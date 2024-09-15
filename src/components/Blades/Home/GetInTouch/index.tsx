import Section from "@/components/Section";
import { appConstants } from "@/constants";
import Image from "next/image";
import React, { FC } from "react";

interface IGetInTouchProps {}

const GetInTouch: FC<IGetInTouchProps> = () => {
  return (
    <Section id="about">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 ">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start">
          <p className="font-xl text-primary font-medium">
            {appConstants.getInTouchHelper}
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl  mb-3 font-medium">
            {appConstants.getInTouchTitle}
          </p>
          <p className="font-lg text-bq-gray font-medium text-center md:text-left">
            {appConstants.getInTouchContent}
          </p>
        </div>
        <div className="w-full md:w-auto md:flex-1">
          <Image
            src="/assets/getInTouch.jpeg"
            alt="Get in touch"
            className="!w-full !h-auto aspect-[0.75]  object-cover rounded-sm"
            width={0}
            height={0}
            unoptimized
          />
        </div>
      </div>
    </Section>
  );
};

export default GetInTouch;
