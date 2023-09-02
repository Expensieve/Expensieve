import React, { useEffect, useState } from "react";
import GroupsSidebar from "./src/front-end/components/groupsSidebar";
import ServicesSidebar from "./src/front-end/components/servicesSidebar";
import ServiceDashboard from "./src/front-end/components/serviceDashboard";
import './app.css';
import Axios from "axios";

export default function App() {
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
    <>
      <GroupsSidebar />
      <ServicesSidebar />
      <ServiceDashboard
        serviceData={serviceData} //TODO: make this depend on serviceSidebar selection
      />
    </>
  )
};
