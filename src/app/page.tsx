import { NavGroup } from "@/components/navGroup";
import { Statistic } from "@/components/statistic";
import { Answer } from "@/sections/answer";
import { Entry } from "@/sections/entry";
import { Faq } from "@/sections/faq";
import { Hero } from "@/sections/hero";
import { Location } from "@/sections/location";
import { Resons } from "@/sections/resons";
import { Test } from "@/sections/test";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistic />
      <Resons />
      <NavGroup />
      <Location />
      <Test />
      <Entry />
      <Faq />
      <Answer />
    </>
  );
}
