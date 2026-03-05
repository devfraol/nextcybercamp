import Link from "next/link";
import { BookCopy, LayoutDashboard, FlaskConical, Settings } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/courses", label: "My Courses", icon: BookCopy },
  { href: "/dashboard/labs", label: "Labs", icon: FlaskConical },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  return (
    <aside className="w-full rounded-xl border border-border bg-card p-4 lg:w-64">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">NCC Dashboard</p>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
