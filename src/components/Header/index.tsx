"use client";

import clsx from "clsx";
import { Menu, CircleX } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import Section from "../Section";
import { Button, ButtonProps, buttonVariants } from "../ui/button";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { appConstants } from "@/constants";
interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((e) => !e);
  };
  return (
    <Section className="bg-white sticky top-0 shadow-sm z-10 py-5">
      <div className="w-full flex justify-between items-center relative">
        <div className="flex-1">
          <Link
            href={"/"}
            scroll
            className="sm:text-2xl lg:text-3xl font-semibold tracking-wide"
          >
            {appConstants.appName}
          </Link>
        </div>
        <div className="hidden md:flex justify-between">
          {links.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.label}
                className={clsx(
                  buttonVariants({ variant: "ghost", ...item.props })
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="block md:hidden ">
          <Button variant={"ghost"} onClick={toggleOpen}>
            <Menu />
          </Button>
          {open ? (
            <Drawer
              open={open}
              direction="right"
              className="!w-full h-full bg-white flex flex-col p-4 justify-start"
            >
              <div className="w-full flex justify-between items-center">
                <div />
                <p className="sm:text-2xl lg:text-3xl font-semibold tracking-wide">
                  {appConstants.appName}
                </p>
                <Button variant={"ghost"} onClick={toggleOpen}>
                  <CircleX />
                </Button>
              </div>
              <div className="flex-1 flex-col flex justify-center items-center gap-3">
                {links.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      key={item.label}
                      onClick={toggleOpen}
                      className={clsx(
                        "text-xl",
                        buttonVariants({ variant: "ghost", ...item.props })
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </Drawer>
          ) : null}
        </div>
      </div>
    </Section>
  );
};

export default Header;

const links: {
  label: string;
  link: string;
  props?: Pick<ButtonProps, "variant" | "size">;
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
    props: {
      variant: "outline",
      size: "lg",
    },
  },
];
