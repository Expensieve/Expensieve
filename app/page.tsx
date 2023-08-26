import GroupsSidebar from "./components/groupsSidebar";
import ServiceDashboard from "./components/serviceDashboard";
import ServicesSidebar from "./components/servicesSidebar";

export default function Home() {
  return (
    <>
      <GroupsSidebar />
      <ServicesSidebar />
      <ServiceDashboard />
      
    </>
  )
}
