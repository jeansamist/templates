"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Bell, MessageSquare, Search } from "lucide-react";
import React, { FunctionComponent } from "react";
import { ModeToggle } from "./theme-toggle-button";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
export type AppHeaderProps = {
  path: { href: string; label: string }[];
  userFirstName: string;
};

export const AppHeader: FunctionComponent<AppHeaderProps> = ({
  path,
  userFirstName,
}) => {
  return (
    <header className="flex shrink-0 items-center justify-between gap-2 border-b p-4">
      <div className="flex gap-4 items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" />
        <div className="flex flex-col">
          <Breadcrumb>
            <BreadcrumbList>
              {path.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {path.length - 1 === index ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={item.href}>
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <h2 className="md:text-lg font-semibold">
            Welcome back, {userFirstName}.
          </h2>
        </div>
      </div>
      <div className="gap-2 items-center hidden md:flex">
        <InputGroup>
          <InputGroupInput placeholder="Search for anything" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button variant="outline" size="icon">
          <Bell />
        </Button>
        <Button variant="outline" size="icon">
          <MessageSquare />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};
