import DashboardTable from "@/components/dashboard/dashboard-table";

function DashboardPage() {
  return (
    <div className="flex flex-col">
        <h1 className="text-white text-4xl my-2 font-medium">Dashboard</h1>
        <DashboardTable />
    </div>
  );
}
export default DashboardPage;
