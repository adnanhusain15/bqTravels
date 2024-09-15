import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { appConstants } from "@/constants";
import Link from "next/link";
import { FC } from "react";

interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
  return (
    <Section
      className="relative overflow-hidden bg-black"
      containerClassName=""
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(/assets/background.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex flex-col justify-center min-h-96 lg:min-h-[450px] items-start text-white">
        <p className="text-3xl md:text-5xl lg:text-7xl font-semibold">
          {appConstants.appName}
        </p>
        <p className="mt-2 mb-8 text-sm md:text-xl">{appConstants.tagLine}</p>
        <Button variant={"default"} size={"lg"} asChild>
          <Link href={"/#services"}>View Services</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Hero;
