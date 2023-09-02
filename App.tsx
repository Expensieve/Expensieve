import React, { useState } from "react";
import GroupSidebar from "./src/front-end/components/GroupSidebar";
import ServiceSidebar from "./src/front-end/components/ServiceSidebar";
import ServiceDashboard from "./src/front-end/components/ServiceDashboard";
import { GroupSidebarProps, ServiceSidebarProps } from "./src/front-end/types/types";
import "./app.css"

export default function App() {
  const [groupSelection, setGroupSelection] = useState("");
  const [serviceSelection, setServiceSelection] = useState("");

  return (
    <div className="display: flex h-screen">
      <GroupSidebar
        groupSelection = {groupSelection}
        setGroupSelection = {setGroupSelection}
      />
      <ServiceSidebar
        groupSelection = {groupSelection}
        setGroupSelection = {setGroupSelection}
        serviceSelection = {serviceSelection}
        setServiceSelection = {setServiceSelection}
      />
      <ServiceDashboard/>
    </div>
  )
}
