"use client";
import { Avatar, NavigationMenu } from "@base-ui/react";
import {
  Crosshair,
  LayoutGrid,
  Lightbulb,
  Search,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
export const Topbar: FC = () => {
  return (
    <div className="p-6 min-h-16 flex justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
        <div className="font-bold text-xl">iGOLF</div>
      </div>
      <NavigationMenu.Root className="bg-accent/30 backdrop-blur-sm p-1 border rounded-full">
        <NavigationMenu.List className="flex items-center gap-2">
          <NavigationMenu.Item>
            <Link href="/" className={buttonVariants({ variant: "default" })}>
              <LayoutGrid />
              Rounds
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#" className={buttonVariants({ variant: "ghost" })}>
              <TrendingUp />
              Performances
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#" className={buttonVariants({ variant: "ghost" })}>
              <Crosshair />
              Tactics
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#" className={buttonVariants({ variant: "ghost" })}>
              <Lightbulb />
              Insights
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="#" className={buttonVariants({ variant: "ghost" })}>
              <Trophy />
              LeaderBoards
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <div className="flex items-center gap-6 ">
        <div className="bg-accent/30 backdrop-blur-sm p-1 border rounded-full">
          <Button variant="ghost" size={"icon"}>
            <Search />
          </Button>
        </div>
        <div className="bg-accent/30 backdrop-blur-sm p-1 border rounded-full flex gap-2 items-center pr-6">
          <Avatar.Root className="w-12 h-12">
            <Avatar.Image
              src="https://avatars.githubusercontent.com/u/79153739?v=4"
              width="48"
              height="48"
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <Avatar.Fallback>LT</Avatar.Fallback>
          </Avatar.Root>
          <div>
            <div className="font-semibold">Ephraim BAHA</div>
            <div className="text-sm text-muted-foreground">Amateur Golfer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
