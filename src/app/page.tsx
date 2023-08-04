import { NavGroup } from "@/components/navGroup";
import { Statistic } from "@/components/statistic";
import { Hero } from "@/sections/hero";
import { Location } from "@/sections/location";
import { Resons } from "@/sections/resons";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistic />
      <Resons />
      <NavGroup />
      <Location />
    </>
  );
}
