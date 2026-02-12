import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MoreHorizontal, Search } from "lucide-react";
import { FunctionComponent } from "react";

export const Employee: FunctionComponent = () => {
  return (
    <div className="px-4">
      <Card>
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>Employee</CardTitle>
            <CardDescription>
              Track employee details and compensation at a glance .
            </CardDescription>
          </div>
          <CardAction className="hidden md:flex gap-2">
            <InputGroup>
              <InputGroupInput placeholder="Search for anything" />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <Button variant={"outline"} size={"icon"}>
              <MoreHorizontal />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="overflow-x-auto"></CardContent>
      </Card>
    </div>
  );
};
