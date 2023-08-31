import React from "react";
import GroupsSidebar from "./src/front-end/components/groupsSidebar";
import ServiceDashboard from "./src/front-end/components/serviceDashboard";
import ServicesSidebar from "./src/front-end/components/servicesSidebar";
import './app.css';

export default function App() {
  return (
    <>
      <GroupsSidebar />
      <ServicesSidebar />
      <ServiceDashboard />
    </>)
}
