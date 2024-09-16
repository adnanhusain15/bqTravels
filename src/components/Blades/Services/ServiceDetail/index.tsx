import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { IService } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

interface IServiceDetailProps {
  service: IService;
}

const ServiceDetail: FC<IServiceDetailProps> = ({ service }) => {
  const { title, image, description } = service;
  return (
    <Section>
      <div className="flex flex-col md:flex-row min-h gap-5">
        <div className="w-full md:w-[40%]">
          <Image
            src={image}
            className="!w-full  md:aspect-[0.8] object-cover rounded-sm"
            height={0}
            width={0}
            alt={title}
            unoptimized
          />
        </div>
        <div className="w-full md:w-auto md:flex-1 flex flex-col justify-center items-center md:items-start">
          <p className="font-xl text-primary font-medium">{title}</p>

          <p className="font-lg text-bq-gray font-medium text-center md:text-left mb-3">
            {description}
          </p>
          <Button className="w-full md:w-auto" asChild>
            <Link href={"/#contact"}>GET IN TOUCH</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetail;
