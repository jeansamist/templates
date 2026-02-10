/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Award,
  BarChart2,
  Box,
  Briefcase,
  Calendar,
  FileText,
  HelpCircle,
  Home,
  LucideIcon,
  Plug,
  Settings,
  User,
} from "lucide-react";
import { FunctionComponent, useMemo } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export type AppSidebarProps = {
  user: {
    avatarUrl: string;
    name: string;
    jobTitle: string;
  };
};

type AppSidebarLink = {
  label: string;
  href: string;
  notifications?: number;
  icon: LucideIcon;
  isBeta?: boolean;
  isActive?: boolean;
};

type AppSidebarSection = {
  title: string;
  links: AppSidebarLink[];
};

export const AppSidebar: FunctionComponent<AppSidebarProps> = ({ user }) => {
  const sections = useMemo<AppSidebarSection[]>(
    () => [
      {
        title: "GENERAL MENU",
        links: [
          {
            label: "Dashboard",
            href: "/#dashboard",
            icon: Home,
            isActive: true,
            isBeta: true,
          },
          { label: "Schedule", href: "/#schedule", icon: Calendar },
          { label: "Analytics", href: "/#analytics", icon: BarChart2 },
          { label: "Reports", href: "/#reports", icon: FileText },
        ],
      },
      {
        title: "RECRUITMENT",
        links: [
          { label: "Vacancies", href: "/#vacancies", icon: Briefcase },
          {
            label: "Candidates",
            href: "/#candidates",
            icon: User,
            notifications: 12,
          },
          { label: "Offers", href: "/#offers", icon: Award },
        ],
      },
      {
        title: "SUPPORT",
        links: [
          { label: "Settings", href: "/#settings", icon: Settings },
          { label: "Integration", href: "/#integration", icon: Plug },
        ],
      },
    ],
    []
  );

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="space-y-2">
        <div className="flex gap-2 items-center">
          <div className="w-10 flex items-center justify-center aspect-square rounded-xl bg-primary text-primary-foreground">
            <Box className="mx-auto" size={20} />
          </div>
          <h3 className="font-semibold">Jeansamist</h3>
        </div>
        <div className="flex gap-2 items-center border bg-background rounded-2xl p-1 hover:border-primary transition-colors cursor-pointer">
          <img
            src={user.avatarUrl}
            alt={`${user.name} avatar`}
            className="w-10 flex items-center justify-center aspect-square rounded-xl bg-muted text-primary-foreground"
          />
          <div>
            <h3 className="font-semibold text-sm">{user.name}</h3>
            <p className="text-xs text-muted-foreground">{user.jobTitle}</p>
          </div>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {sections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
              {section.links.map((link) => {
                const SectionIcon = link.icon;
                return (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild isActive={link.isActive}>
                      <a href={link.href}>
                        <SectionIcon />
                        <span>{link.label}</span>
                      </a>
                    </SidebarMenuButton>
                    {link.isBeta && (
                      <Badge
                        className="mr-1 bg-primary/15 text-primary!"
                        asChild
                      >
                        <SidebarMenuBadge>BETA</SidebarMenuBadge>
                      </Badge>
                    )}
                    {link.notifications && (
                      <Badge
                        variant={"outline"}
                        className="mr-1 bg-background"
                        asChild
                      >
                        <SidebarMenuBadge>
                          {link.notifications.toString().padStart(2, "0")}
                        </SidebarMenuBadge>
                      </Badge>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Card>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <Button variant={"outline"} size={"icon-lg"}>
                <HelpCircle />
              </Button>
              <div>
                <h3 className="font-semibold">Help & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Typical reply: 4mins
                </p>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="w-full text-primary"
              size={"lg"}
            >
              Go to help center
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
};
