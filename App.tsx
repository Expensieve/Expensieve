import React, { useState } from "react";
import GroupSidebar from "./src/front-end/components/GroupSidebar";
import ServiceSidebar from "./src/front-end/components/ServiceSidebar";
import ServiceDashboard from "./src/front-end/components/ServiceDashboard";
import "./app.css"

export default function App() {
  const [groupSelection, setGroupSelection] = useState("");
  const [serviceSelection, setServiceSelection] = useState("");

  return (
    <>
      <GroupSidebar groupSelection = {groupSelection} setGroupSelection = {setGroupSelection}/>
      <ServiceSidebar serviceSelection = {serviceSelection} setServiceSelection = {setServiceSelection}/>
      <ServiceDashboard/>
    </>
  )
}
