import { appConstants } from "@/constants";
import { FC } from "react";
import Page404 from "../not-found";
import Section from "@/components/Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IServiceProps {
  params: { slug: string };
}
const getService = (slug?: string) =>
  appConstants.services.find((i) => i.href === `/${slug || ""}`);
const Service: FC<IServiceProps> = (props) => {
  const service = getService(props?.params?.slug);
  if (!service) return <Page404 />;
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
            <Link href={"/"}>GET IN TOUCH</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Service;
