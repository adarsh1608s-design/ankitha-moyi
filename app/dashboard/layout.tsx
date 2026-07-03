import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-center h-16">
          <h1 className="text-xl font-bold text-white">
            Ankitha<span className="text-pink-500">.</span>
          </h1>
        </div>
      </header>

      <div className="lg:flex">

        {/* Desktop Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}