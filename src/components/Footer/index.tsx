import React, { FC } from "react";
import Section from "../Section";
import { Button } from "../ui/button";
import Link from "next/link";

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <Section className="bg-[#291414] py-16 " containerClassName="flex-col ">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {links.map((item, index) => {
          return (
            <Button className="" variant={"ghost"} key={index} asChild>
              <Link
                className="text-white text-xl hover:underline"
                href={item.link}
              >
                {item.label}
              </Link>
            </Button>
          );
        })}
      </div>
      <div className=" flex flex-wrap items-center gap-1">
        {policyLinks.map((item, index) => {
          return (
            <Button className="" variant={"ghost"} key={index} asChild>
              <Link
                target="_blank"
                className="text-white text-lg hover:underline"
                href={item.link}
              >
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
    label: "Contact Us",
    link: "/#contact",
  },
];

/**
 * Terms and Conditions

Created by Razorpay

https://merchant.razorpay.com/policy/RFveLKHmmlDukA/terms
Privacy Policy

Created by Razorpay

https://merchant.razorpay.com/policy/RFveLKHmmlDukA/privacy
Cancellations and Refunds

Created by Razorpay

https://merchant.razorpay.com/policy/RFveLKHmmlDukA/refund
Shipping Policy

Created by 
 */

const policyLinks: {
  label: string;
  link: string;
}[] = [
  {
    label: "Terms and Conditions",
    link: "https://merchant.razorpay.com/policy/RFveLKHmmlDukA/terms",
  },
  {
    label: "Privacy Policy",
    link: "https://merchant.razorpay.com/policy/RFveLKHmmlDukA/privacy",
  },
  {
    label: "Cancellations and Refunds",
    link: "https://merchant.razorpay.com/policy/RFveLKHmmlDukA/refund",
  },
  {
    label: "Shipping Policy",
    link: "https://merchant.razorpay.com/policy/RFveLKHmmlDukA/shipping",
  },
];
