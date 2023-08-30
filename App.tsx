import React from "react";
import GroupsSidebar from "./components/groupsSidebar";
import ServiceDashboard from "./components/serviceDashboard";
import ServicesSidebar from "./components/servicesSidebar";

export default function App() {
  return (
    <>
      <GroupsSidebar />
      <ServicesSidebar />
      <ServiceDashboard />
    </>)
}
