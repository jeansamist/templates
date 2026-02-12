"use client";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { FunctionComponent, useMemo } from "react";
import { Area, AreaChart, CartesianGrid } from "recharts";
export type TotalProjectChartProps = {
  className?: string;
  data?: { month: string; projects: number }[];
};
export const TotalProjectChart: FunctionComponent<TotalProjectChartProps> = ({
  className,
  data = [
    { month: "Dec", projects: 0 },
    { month: "Jan", projects: 40 },
    { month: "Feb", projects: 40 },
    { month: "Mar", projects: 55 },
  ],
}) => {
  const chartData = useMemo<{ month: string; projects: number }[]>(() => {
    return data;
  }, [data]);
  const chartConfig = useMemo<ChartConfig>(() => {
    return {
      projects: {
        label: "Total Project",
      },
    };
  }, []);
  return (
    <ChartContainer config={chartConfig} className={cn("w-full", className)}>
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Area
          dataKey="projects"
          type="natural"
          fillOpacity={0.15}
          fill="#1E90FF"
          strokeWidth={2}
          stroke="#1E90FF"
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
};
