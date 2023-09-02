import React, { useEffect, useState } from "react";
import GroupsSidebar from "./src/front-end/components/GroupSidebar";
import ServicesSidebar from "./src/front-end/components/ServiceSidebar";
import ServiceDashboard from "./src/front-end/components/ServiceDashboard";
import { GroupSidebarProps, ServiceSidebarProps } from "./src/front-end/types/types";
import './app.css';
import Axios from "axios";

export default function App() {
  const [groupSelection, setGroupSelection] = useState("");
  const [serviceSelection, setServiceSelection] = useState("");

  const [data, setData] = useState<any>({});
  
  const [serviceData, setServiceData] = useState({
    cost: 0,
    description: "",
    id: 0,
    name: "",
    owner: 0,
    password: "",
    url: "",
  });

  const getData = async () => {
    const {data} = await Axios.get("http://localhost:3000/all");
    setData(data);
    setServiceData(data.serviceData.filter((service: { id: number; }) => service.id === 1003)[0]);
  }
  useEffect(() => {
    getData();
  }, []);
  
  console.log("data:", data);
  console.log("serviceData:", serviceData);
  
  return (
    <div className="flex h-screen">
      <GroupsSidebar
        groupSelection = {groupSelection}
        setGroupSelection = {setGroupSelection}
      />
      <ServicesSidebar
        groupSelection = {groupSelection}
        setGroupSelection = {setGroupSelection}
        serviceSelection = {serviceSelection}
        setServiceSelection = {setServiceSelection}
      />
      <ServiceDashboard
        serviceData={serviceData} //TODO: make this depend on serviceSidebar selection
     />
    </div>
  )
};
