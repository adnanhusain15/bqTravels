import React, { FC } from "react";
import Section from "../Section";
import { Button } from "../ui/button";
import Link from "next/link";

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <Section className="bg-[#291414]">
      <div className="py-16 flex flex-wrap items-center">
        {links.map((item, index) => {
          return (
            <Button className="m-2" variant={"ghost"} key={index} asChild>
              <Link className="text-white text-xl" href={item.link}>
                {item.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </Section>
  );
};

export default Footer;

const links: {
  label: string;
  link: string;
}[] = [
  {
    label: "Home",
    link: "/#home",
  },
  {
    label: "About",
    link: "/#about",
  },
  {
    label: "Services",
    link: "/#services",
  },
  {
    label: "Contact",
    link: "/#contact",
  },
];
