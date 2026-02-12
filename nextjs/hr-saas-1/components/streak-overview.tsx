import React from "react";

interface ContributionDay {
  date: string; // ISO date string (YYYY-MM-DD)
  intensity: number; // 0-100
}

interface StreakOverviewProps {
  data?: ContributionDay[];
  year?: number;
}

const StreakOverview: React.FC<StreakOverviewProps> = ({
  data = [],
  year = new Date().getFullYear(),
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dataMap = new Map(data.map((d) => [d.date, d.intensity]));

  const getIntensityClass = (intensity: number): string => {
    if (intensity === 0) return "bg-gray-100 dark:bg-muted";
    if (intensity <= 25) return "bg-emerald-100";
    if (intensity <= 50) return "bg-emerald-400";
    if (intensity <= 75) return "bg-emerald-600";
    return "bg-emerald-700";
  };

  const generateWeeksForYear = () => {
    const startOfYear = new Date(year, 0, 1);
    const start = new Date(startOfYear);
    start.setDate(start.getDate() - start.getDay());

    const endOfYear = new Date(year, 11, 31);
    const end = new Date(endOfYear);
    end.setDate(end.getDate() + (6 - end.getDay()));

    const weeks: (ContributionDay | null)[][] = [];
    const cursor = new Date(start);

    while (cursor <= end) {
      const week: (ContributionDay | null)[] = [];
      for (let d = 0; d < 7; d++) {
        if (cursor.getFullYear() === year) {
          const dateStr = cursor.toISOString().split("T")[0];
          const intensity = dataMap.get(dateStr) ?? 0;
          week.push({ date: dateStr, intensity });
        } else {
          week.push(null);
        }
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(week);
    }

    const monthLabels: { label: string; index: number }[] = [];
    for (let m = 0; m < 12; m++) {
      const firstOfMonth = new Date(year, m, 1);
      const daysFromStart = Math.round(
        (firstOfMonth.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      const weekIndex = Math.floor(daysFromStart / 7);
      monthLabels.push({ label: months[m], index: weekIndex });
    }

    return { weeks, monthLabels };
  };

  const { weeks, monthLabels } = generateWeeksForYear();

  return (
    <div className="w-full p-6 rounded-lg">
      {/* Month labels */}
      <div className="flex">
        <div className="w-10" />
        <div className="flex gap-1 w-full mb-1">
          {weeks.map((_, weekIdx) => {
            const month = monthLabels.find((ml) => ml.index === weekIdx);
            return (
              <div
                key={weekIdx}
                className="flex-1 text-xs text-muted-foreground text-left"
              >
                {month ? month.label : ""}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid with weekday labels */}
      <div className="flex">
        {/* Weekday labels on the left */}
        <div className="flex flex-col gap-1 w-10 text-xs text-muted-foreground mr-2">
          {weekDays.map((day) => (
            <div key={day} className="h-full flex items-center">
              {day}
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex gap-1 w-full">
          {weeks.map((week, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-1 flex-1">
              {week.map((day, rowIdx) => (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className={`rounded hover:scale-105 cursor-pointer transition-transform w-full aspect-square ${
                    day
                      ? getIntensityClass(day.intensity)
                      : "bg-transparent pointer-events-none cursor-default"
                  }`}
                  title={day ? `${day.date}: ${day.intensity}%` : ""}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between gap-2 mt-4 text-xs text-muted-foreground flex-wrap">
        <div className="flex items-center gap-2">
          <span>How contribution works?</span>
          <button className="underline font-medium text-gray-900">
            Learn More
          </button>
        </div>
        <div className="flex items-center gap-1">
          <span>0%</span>
          <div className="flex gap-1">
            <div className="w-6 h-3 rounded bg-gray-100" />
            <div className="w-6 h-3 rounded bg-emerald-200" />
            <div className="w-6 h-3 rounded bg-emerald-400" />
            <div className="w-6 h-3 rounded bg-emerald-700" />
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default StreakOverview;
