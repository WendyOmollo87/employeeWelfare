import HRSidebar from "./HRSidebar";
import { Bell } from "lucide-react";

export default function HRShell({
  children,
  userName = "Sarah Njoroge",
  userRole = "HR Administrator",
  initials = "SN",
}: {
  children: React.ReactNode;
  userName?: string;
  userRole?: string;
  initials?: string;
}) {
  return (
    <div className="flex">
      <HRSidebar />
      <div className="ml-[250px] flex-1 min-h-screen">
        <header className="flex items-center justify-end gap-4 px-8 py-4 border-b border-border bg-background">
          <Bell className="text-muted" size={20} />
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-medium text-heading text-right">
                {userName}
              </p>
              <p className="text-xs text-muted text-right">{userRole}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
              {initials}
            </div>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}