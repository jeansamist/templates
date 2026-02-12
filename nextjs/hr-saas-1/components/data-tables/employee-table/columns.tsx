/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Employee } from "@/mocks/employees";
import { Column, ColumnDef } from "@tanstack/react-table";
import {
  ChevronsUpDown,
  Eye,
  MoreHorizontal,
  TextAlignStart,
} from "lucide-react";
const SortableHeader = ({
  column,
  title,
}: {
  column: Column<Employee>;
  title: string;
}) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex items-center gap-2 w-full justify-between p-0 hover:bg-transparent cursor-pointer"
      )}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "uid",
    header: ({ column }) => (
      <SortableHeader column={column} title="ID Employee" />
    ),
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <div className="flex items-center gap-2">
          <span>#{employee.uid}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => <SortableHeader column={column} title="Name" />,
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <div className="flex items-center gap-2">
          <img
            src={employee.avatar}
            alt={employee.fullName}
            className="h-8 w-8 rounded-full"
          />
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium leading-none">{employee.fullName}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "grade",
    header: ({ column }) => <SortableHeader column={column} title="Role" />,
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <div className="flex items-center gap-2">
          <TextAlignStart className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{employee.grade}</span>{" "}
          <span className="font-medium">{employee.jobTitle}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "joinDate",
    header: ({ column }) => (
      <SortableHeader column={column} title="Join Date" />
    ),
    cell: ({ row }) => {
      const employee = row.original;
      const date = new Date(employee.joinDate);
      return (
        <span>
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "salary",
    header: ({ column }) => (
      <SortableHeader column={column} title="Total Salary" />
    ),
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <div>
          <span className="text-muted-foreground">$</span>
          <span>{employee.salary}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const employee = row.original;
      const statusColor =
        employee.status === "Active"
          ? "bg-green-500"
          : employee.status === "On Leave"
          ? "bg-yellow-500"
          : "bg-red-500";
      return (
        <div className="flex items-center gap-2">
          <span
            className={cn("h-2 w-2 rounded-full", statusColor)}
            aria-label={employee.status}
          />
          <span>{employee.status}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>, // no sorting here
    enableSorting: false,
    cell: ({ row }) => {
      const employee = row.original;

      return (
        <div className="flex items-center gap-2 justify-end">
          <Button variant="outline" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(employee.uid)}
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View employee</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                Delete employee
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
