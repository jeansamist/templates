import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@base-ui/react";
import {
  ArrowRight,
  Cloud,
  Droplets,
  Flag,
  Hash,
  Layout,
  Play,
  Radio,
  Signal,
  Target,
  Thermometer,
  TrendingUp,
  TrendingUpDown,
  Trophy,
  Wind,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="col-span-2 flex flex-col pb-6 gap-6">
        <Card className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold bg-destructive text-destructive-foreground px-2.5 flex items-center gap-1 py-1.5 rounded-3xl text-xs">
              <span className="w-2 h-2 rounded-full bg-destructive-foreground"></span>
              Live
            </span>
            <span className="text-muted-foreground">Rd 4 - Hole 16</span>
          </div>
          <div>
            <h3 className="font-bold text-3xl leading-normal">
              Cypress Point Club Pro-Am
            </h3>
            <p className="text-muted-foreground leading-normal">
              Monterey Peninsula, CA
            </p>
          </div>
          <Card className="bg-white/5 rounded-sm flex gap-4 justify-between items-center">
            <div className="space-y-2">
              <p className="text-muted-foreground leading-normal">
                Current place
              </p>
              <h3 className="font-bold text-4xl leading-normal">12</h3>
              <p className="text-primary text-sm font-semibold leading-normal flex gap-2 items-center">
                <TrendingUp />
                03 Positions
              </p>
            </div>
            <div className="w-px h-20 bg-border"></div>
            <div className="space-y-2 text-right">
              <p className="text-muted-foreground leading-normal">
                Total score
              </p>
              <h3 className="font-bold text-4xl leading-normal">-8</h3>
              <p className="text-muted-foreground text-sm font-semibold leading-normal">
                Thru 15
              </p>
            </div>
          </Card>
        </Card>
        <Card className="space-y-6">
          <p className="font-semibold leading-normal flex gap-2 items-center">
            <Cloud />
            Course Conditions
          </p>
          <span className="font-semibold leading-normal inline-flex border border-primary text-sm gap-2 items-center bg-primary/15 text-primary px-2.5 py-1.5 rounded-3xl">
            <Wind size={20} />
            CROSSWIND RIGHT
          </span>
          <div className="flex items-baseline space-x-2">
            <h3 className="font-bold text-5xl leading-normal">9</h3>
            <p className="text-muted-foreground leading-normal">
              Mph, Northeast
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <Thermometer className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">22C</h3>
              <p className="text-muted-foreground leading-normal">
                Temperature
              </p>
            </Card>
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <Droplets className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">48%</h3>
              <p className="text-muted-foreground leading-normal">Humidity</p>
            </Card>
          </div>
        </Card>
        <Card className="space-y-6 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold leading-normal flex gap-2 items-center">
              <Trophy className="text-primary" />
              Leaderboard
            </p>
            <span className="text-muted-foreground">View all</span>
          </div>
          <div className="space-y-2">
            <Card className="bg-white/0 backdrop-blur-none py-2 border-transparent hover:bg-white/5 transition rounded-sm flex gap-4 justify-between items-center">
              <h3 className="font-bold text-xl leading-normal">1</h3>
              <Avatar.Root className="w-12 h-12">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                  width="48"
                  height="48"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <Avatar.Fallback>LT</Avatar.Fallback>
              </Avatar.Root>
              <div className="flex-1">
                <h3 className="font-bold text-xl leading-normal">Maxim Doe</h3>
                <p className="text-muted-foreground leading-normal">Hole 13</p>
              </div>
              <h3 className="font-bold text-xl leading-normal">-11</h3>
            </Card>
            <Card className="bg-white/0 backdrop-blur-none py-2 border-transparent hover:bg-white/5 transition rounded-sm flex gap-4 justify-between items-center">
              <h3 className="font-bold text-xl leading-normal">2</h3>
              <Avatar.Root className="w-12 h-12">
                <Avatar.Fallback
                  className={
                    "w-12 h-12 bg-accent rounded-4xl flex items-center justify-center"
                  }
                >
                  LT
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="flex-1">
                <h3 className="font-bold text-xl leading-normal">
                  Luth Thomas
                </h3>
                <p className="text-muted-foreground leading-normal">Hole 12</p>
              </div>
              <h3 className="font-bold text-xl leading-normal">-1</h3>
            </Card>
            <Card className="bg-primary/15 border-primary hover:bg-primary/20 py-2 transition rounded-sm flex gap-4 justify-between items-center">
              <h3 className="font-bold text-xl leading-normal">3</h3>
              <Avatar.Root className="w-12 h-12">
                <Avatar.Fallback
                  className={
                    "w-12 h-12 bg-accent rounded-4xl flex items-center justify-center"
                  }
                >
                  AK
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="flex-1">
                <h3 className="font-bold text-xl leading-normal">
                  Adrian Kowalski
                </h3>
                <p className="text-muted-foreground leading-normal">Hole 8</p>
              </div>
              <h3 className="font-bold text-xl leading-normal">+5</h3>
            </Card>
            <Card className="bg-white/0 backdrop-blur-none py-2 border-transparent hover:bg-white/5 transition rounded-sm flex gap-4 justify-between items-center">
              <h3 className="font-bold text-xl leading-normal">4</h3>
              <Avatar.Root className="w-12 h-12">
                <Avatar.Fallback
                  className={
                    "w-12 h-12 bg-accent rounded-4xl flex items-center justify-center"
                  }
                >
                  SM
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="flex-1">
                <h3 className="font-bold text-xl leading-normal">
                  Salomon Meier
                </h3>
                <p className="text-muted-foreground leading-normal">Hole 8</p>
              </div>
              <h3 className="font-bold text-xl leading-normal">-2</h3>
            </Card>
          </div>
        </Card>
      </div>
      <div className="col-span-3 flex flex-col pb-6 gap-6">
        <div className="w-full aspect-4/3 relative rounded-3xl overflow-hidden">
          <div className="absolute z-30 w-full h-full bg-linear-to-b p-6 from-transparent via-transparent to-background flex justify-between flex-col">
            <div className="flex gap-6 items-center">
              <span className="font-semibold bg-destructive text-destructive-foreground px-2.5 flex items-center gap-1 py-1.5 rounded-3xl text-xs">
                <span className="w-2 h-2 rounded-full bg-destructive-foreground"></span>
                LIVE FEED
              </span>
              <Button variant={"outline"}>Hole 16 - Approach shoot</Button>
            </div>
            <div className="flex gap-6 items-center">
              <Button size={"icon"}>
                <Play />
              </Button>
              <div className="flex font-bold text-lg gap-4 flex-1">
                <div>182 MPH</div>
                <div>2800 RPM</div>
                <div>178 Yards</div>
              </div>
              <div className="flex font-bold text-lg gap-4">
                <Button variant={"outline"}>1x</Button>
                <Button variant={"outline"}>HD</Button>
              </div>
            </div>
          </div>
          <Image
            src="/tournament.jpg"
            width="1920"
            height="1920"
            alt="Avatar"
            className="w-full h-full object-cover relative z-20"
          />
        </div>
        <Card className="space-x-6 flex items-center">
          <div className="bg-primary/30 backdrop-blur-sm p-1 border border-primary/50 rounded-full">
            <Button className="text-primary" variant="ghost" size={"icon"}>
              <Layout />
            </Button>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-normal">
              View score card
            </h3>
            <p className="text-muted-foreground text-sm leading-normal">
              Expand for 16 Hole details
            </p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm leading-normal">
              TOTAL
            </p>
            <h3 className="font-bold text-2xl leading-normal">-8</h3>
          </div>
          <ArrowRight className="text-muted-foreground" />
        </Card>
        <Card className="space-y-6 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold leading-normal flex gap-2 items-center">
              <Radio className="text-primary" />
              Course Updates
            </p>
            <span className="text-muted-foreground">View all</span>
          </div>
          <div className="space-y-2">
            <div className="">
              <p className="text-muted-foreground text-sm leading-normal">
                Just now - Hole 17
              </p>
              <h3 className="font-semibold text-lg leading-normal">
                Scotie Smith,{" "}
                <span className="text-muted-foreground font-normal">
                  landed approach shot within 2 yards
                </span>
              </h3>
            </div>
            <div className="">
              <p className="text-muted-foreground text-sm leading-normal">
                2 mins ago - Hole 12
              </p>
              <h3 className="font-semibold text-lg leading-normal">
                Adrain Kyle,{" "}
                <span className="text-muted-foreground font-normal">
                  birded hole in 1 shot
                </span>
              </h3>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-2 flex flex-col pb-6 gap-6">
        <Card className="space-y-6">
          <p className="font-semibold leading-normal flex gap-2 items-center">
            <TrendingUp />
            Win Probability
          </p>
          <div className="w-40 text-primary shadow-lg shadow-primary/20 flex flex-col items-center justify-center mx-auto aspect-square rounded-full bg-primary/15 border border-primary">
            <h3 className="font-bold text-4xl leading-normal">14%</h3>
            <h3 className="leading-normal text-xs">Proj. Finish: Top 10</h3>
          </div>
        </Card>
        <Card className="space-y-6">
          <p className="font-semibold leading-normal flex gap-2 items-center">
            <Signal />
            Round stats
          </p>
          <div className="space-y-2">
            <p className="font-medium flex justify-between text-muted-foreground leading-normal gap-2 items-center">
              <span>Win Probability</span>
              <span className="font-semibold text-foreground">10/12</span>
            </p>
            <div className="bg-white/50 w-full h-1 rounded-full">
              <div className="h-1 bg-white rounded-4xl w-10/12" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium flex justify-between text-muted-foreground leading-normal gap-2 items-center">
              <span>Green in Regulation</span>
              <span className="font-semibold text-foreground">9/12</span>
            </p>
            <div className="bg-white/50 w-full h-1 rounded-full">
              <div className="h-1 bg-primary rounded-4xl w-9/12" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium flex justify-between text-muted-foreground leading-normal gap-2 items-center">
              <span>Putting/hole</span>
              <span className="font-semibold text-foreground">11/12</span>
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/50 w-full h-1 rounded-full"></div>
              <div className="bg-white/50 w-full h-1 rounded-full"></div>
              <div className="bg-white/50 w-full h-1 rounded-full">
                <div className="h-1 bg-destructive rounded-4xl w-full" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="space-y-6">
          <p className="font-semibold leading-normal flex gap-2 items-center">
            <Flag />
            Hole statistics
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <TrendingUpDown className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">4.2</h3>
              <p className="text-muted-foreground leading-normal">
                Average score
              </p>
            </Card>
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <Hash className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">12</h3>
              <p className="text-muted-foreground leading-normal">Hole rank</p>
            </Card>
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <TrendingUp className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">42%</h3>
              <p className="text-muted-foreground leading-normal">Up / down</p>
            </Card>
            <Card className="bg-white/5 rounded-sm p-4 space-y-1 justify-between items-center">
              <Target className="text-muted-foreground" />
              <h3 className="font-bold text-3xl leading-normal">55%</h3>
              <p className="text-muted-foreground leading-normal">GIR</p>
            </Card>
          </div>
        </Card>
      </div>
    </>
  );
}
