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
  
  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3000/all",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log("res.data:", res.data);
      setData(res.data);
    })
  }, [setData]);
  
  
  const [serviceData, setServiceData] = useState({
    cost: 0,
    description: "",
    id: 0,
    name: "",
    owner: 0,
    password: "",
    url: "",
  });

  console.log("data:", data);

  // setServiceData(data.serviceData.filter((service) => service.id === 1003))


  return (
    <div className="display: flex h-screen">
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
