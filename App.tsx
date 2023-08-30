import React, { useState } from "react";
import GroupSidebar from "./src/front-end/components/GroupSidebar";
import ServiceSidebar from "./src/front-end/components/ServiceSidebar";

const [groupSelection, setGroupSelection] = useState("");
const [serviceSelection, setServiceSelection] = useState("");

export default function App() {
  return (
    <>
      <GroupSidebar group = {groupSelection} setGroup = {setGroupSelection}/>
      <ServiceSidebar service = {serviceSelection} setService = {setServiceSelection}/>
      {/* <ServiceDashboard /> */}
    </>
  )
}
