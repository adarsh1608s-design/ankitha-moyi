import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black lg:flex">

      <DashboardSidebar />

      <main className="flex-1 px-5 py-6 lg:p-8">
        {children}
      </main>

    </div>
  );
}