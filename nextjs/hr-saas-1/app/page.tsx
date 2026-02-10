import { AppHeader } from "@/components/app-header";
import { TotalEmployeeChart } from "@/components/charts/total-employee-chart";
import { TotalProjectChart } from "@/components/charts/total-project-chart";
import { TotalTaskChart } from "@/components/charts/total-task-chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Page() {
  return (
    <main>
      <AppHeader
        path={[
          { label: "Jeansamist", href: "#" },
          { label: "Dashboard", href: "#" },
        ]}
        userFirstName="Ephraim"
      />
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex gap-2">
            <div className="space-y-6 flex-1">
              <h4 className="font-medium">Total Project</h4>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    956
                  </p>
                  <Button
                    className="border-green-500/30 bg-green-500/15 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                    variant={"outline"}
                    size={"sm"}
                  >
                    <ArrowUp />
                    3.5%
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-green-500">+6</span> from last month
                </p>
              </div>
            </div>
            <TotalProjectChart className="max-w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex gap-2">
            <div className="space-y-6 flex-1">
              <h4 className="font-medium">Total Employee</h4>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    1,234
                  </p>
                  <Button
                    className="border-green-500/30 bg-green-500/15 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                    variant={"outline"}
                    size={"sm"}
                  >
                    <ArrowUp />
                    13.4%
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-green-500">+10</span> from last month
                </p>
              </div>
            </div>
            <TotalEmployeeChart className="max-w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex gap-2">
            <div className="space-y-6 flex-1">
              <h4 className="font-medium">Total Task</h4>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    400
                  </p>
                  <Button
                    className="border-red-500/30 bg-red-500/15 text-red-500 hover:bg-red-500/20 hover:text-red-500"
                    variant={"outline"}
                    size={"sm"}
                  >
                    <ArrowDown />
                    4.2%
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-red-500">-500</span> from last month
                </p>
              </div>
            </div>
            <TotalTaskChart className="max-w-24" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
