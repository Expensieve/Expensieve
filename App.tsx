import React from "react";
import GroupsSidebar from "./src/front-end/components/groupsSidebar";
import ServicesSidebar from "./src/front-end/components/servicesSidebar";
import ServiceDashboard from "./src/front-end/components/ServiceDashboard";
import './app.css';

export default function App() {
  return (
    <>
      <GroupsSidebar />
      <ServicesSidebar />
      <ServiceDashboard />
    </>
  )
}
