"use client";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { FunctionComponent, useMemo } from "react";
import { Area, AreaChart, CartesianGrid } from "recharts";
export type TotalTaskChartProps = {
  className?: string;
  data?: { month: string; tasks: number }[];
};
export const TotalTaskChart: FunctionComponent<TotalTaskChartProps> = ({
  className,
  data = [
    { month: "Oct", tasks: 970 },
    { month: "Nov", tasks: 700 },
    { month: "Dec", tasks: 800 },
    { month: "Jan", tasks: 400 },
    { month: "Feb", tasks: 370 },
    { month: "Mar", tasks: 550 },
  ],
}) => {
  const chartData = useMemo<{ month: string; tasks: number }[]>(() => {
    return data;
  }, [data]);
  const chartConfig = useMemo<ChartConfig>(() => {
    return {
      tasks: {
        label: "Total Tasks",
      },
    };
  }, []);
  return (
    <ChartContainer config={chartConfig} className={cn("w-full", className)}>
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Area
          dataKey="tasks"
          type="natural"
          fillOpacity={0.15}
          fill="#FCB045"
          strokeWidth={2}
          stroke="#FCB045"
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
};
