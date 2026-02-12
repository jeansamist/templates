"use client";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { FunctionComponent, useMemo } from "react";
import { Bar, BarChart, CartesianGrid } from "recharts";
export type TotalEmployeeChartProps = {
  className?: string;
  data?: { month: string; employees: number }[];
};
export const TotalEmployeeChart: FunctionComponent<TotalEmployeeChartProps> = ({
  className,
  data = [
    { month: "Jan", employees: 38 },
    { month: "Feb", employees: 25 },
    { month: "Mar", employees: 55 },
  ],
}) => {
  const chartData = useMemo<{ month: string; employees: number }[]>(() => {
    return data;
  }, [data]);
  const chartConfig = useMemo<ChartConfig>(() => {
    return {
      employees: {
        label: "Total Employees",
      },
    };
  }, []);
  return (
    <ChartContainer config={chartConfig} className={cn("w-full", className)}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="employees" className="fill-green-500" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
