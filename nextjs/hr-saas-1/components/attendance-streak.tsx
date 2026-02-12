import StreakOverview from "@/components/streak-overview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateMockStreakData } from "@/mocks/streaks";
import { Calendar } from "lucide-react";
import { FunctionComponent } from "react";

export const AttendanceStreak: FunctionComponent = () => {
  return (
    <div className="px-4">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Streaks</CardTitle>
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              1,540
            </p>
            <p className="text-sm text-muted-foreground">
              You gain <span className="text-green-500">+6</span> from last year
            </p>
          </div>
          <CardAction>
            <Button variant={"outline"}>
              <Calendar /> 2025
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="min-w-300 w-full">
            <StreakOverview data={generateMockStreakData(2025)} year={2025} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
