import { employees } from "@/mocks/employees";
import { FunctionComponent } from "react";
import { DataTable } from "../data-table";
import { columns } from "./columns";

export const EmployeeDataTable: FunctionComponent = () => {
  return <DataTable columns={columns} data={employees} />;
};
