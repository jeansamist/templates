"use client";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { FunctionComponent, useMemo } from "react";
import { Bar, BarChart, CartesianGrid } from "recharts";
export type TotalEmployeeChartProps = { className?: string };
export const TotalEmployeeChart: FunctionComponent<TotalEmployeeChartProps> = ({
  className,
}) => {
  const chartData = useMemo<{ month: string; employees: number }[]>(() => {
    return [
      { month: "Jan", employees: 38 },
      { month: "Feb", employees: 25 },
      { month: "Mar", employees: 55 },
    ];
  }, []);
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
