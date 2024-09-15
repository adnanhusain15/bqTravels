import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { appConstants } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";

interface IServicesProps {}

const Services: FC<IServicesProps> = () => {
  return (
    <Section id="services" className="bg-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 ">
        <div className="flex flex-col justify-center text-center md:text-left md:aspect-square p-3">
          <p className="font-xl text-primary font-medium">OUR SERVICES</p>
          <p className="text-2xl md:text-3xl lg:text-4xl  mb-3 font-semibold">
            Explore the world with ease
          </p>
        </div>
        {appConstants.services.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col justify-end items-start aspect-square p-3 rounded-sm"
              style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(${item.image})`,
              }}
            >
              <p className="font-xl text-white font-medium">{item.title}</p>
              <p className="text-2xl text-white  mb-3 font-semibold">
                {item.shortDescription}
              </p>
              <Button size={"lg"} variant={"default"} asChild>
                <Link href={item.href}>Read More</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
