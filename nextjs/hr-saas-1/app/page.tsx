import { AppHeader } from "@/components/app-header";
import { AttendanceStreak } from "@/components/attendance-streak";
import { Employee } from "@/components/employee";
import { KPICards } from "@/components/kpi-cards";

export default function Page() {
  return (
    <main className="space-y-4">
      <AppHeader
        path={[
          { label: "Jeansamist", href: "#" },
          { label: "Dashboard", href: "#" },
        ]}
        userFirstName="Ephraim"
      />
      <KPICards />
      <AttendanceStreak />
      <Employee />
    </main>
  );
}
