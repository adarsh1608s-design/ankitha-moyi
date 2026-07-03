import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black lg:flex">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>

      {/* Mobile Top Bar */}
      <div className="lg:hidden sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-5 py-4">
        <h1 className="text-xl font-bold text-white">
          Ankitha<span className="text-pink-500">.</span>
        </h1>
      </div>

      {/* Page Content */}
      <main className="flex-1 px-5 py-6 lg:p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}