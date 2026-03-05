import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { Navbar } from "@/components/layout/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 lg:flex-row">
        <DashboardSidebar />
        <section className="flex-1 rounded-xl border border-border bg-card p-6">{children}</section>
      </main>
    </div>
  );
}
