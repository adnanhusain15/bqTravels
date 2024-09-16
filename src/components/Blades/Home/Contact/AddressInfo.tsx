"use client";
import { FC, ReactNode } from "react";
import { Phone, Mail, LocateIcon } from "lucide-react";
import Map from "./Map";
import { Button } from "@/components/ui/button";
import Link from "next/link";
declare module "react-google-maps" {
  interface GoogleMapProps {
    children?: ReactNode | undefined;
  }
}
interface IAddressInfoProps {}
const AddressInfo: FC<IAddressInfoProps> = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">
      <Map
        mapElement={<div className="w-full h-64" />}
        containerElement={<div className="w-full h-64" />}
      />
      <div className="w-full flex flex-col px-4 pt-4 pb-2">
        <p className="text-xl font-bold mb-2">Get in touch</p>
        <div className="flex items-center">
          <Phone size={16} />
          <p>:</p>
          <Button variant="ghost" className="px-1 py-1" asChild>
            <Link className="underline text-lg" href="tel:+91-712-2585352">
              +91-712-2585352
            </Link>
          </Button>
          <p>,</p>
          <Button variant="ghost" className="px-1 py-1" asChild>
            <Link className="underline text-lg" href="tel:+91-9975152136">
              +91-9975152136
            </Link>
          </Button>
        </div>
        <div className="flex items-center">
          <Mail size={16} />
          <p>:</p>

          <Button variant="ghost" className="px-1 py-1" asChild>
            <Link
              className="underline text-lg"
              href="mailto:mustufa@bqtoursandtravels.com"
            >
              mustufa@bqtoursandtravels.com
            </Link>
          </Button>
        </div>
        <div className="flex items-center overflow-hidden">
          <LocateIcon size={16} />
          <p>:</p>

          <Link
            className="underline text-sm truncate w-full px-1 py-1 font-medium"
            href="https://maps.app.goo.gl/iKoxMWq5ssacvRAJ8"
            target="_blanks"
          >
            01, Masum Complex, Awasthi Nagar Nagpur, Maharashtra 440030 India
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col px-4 pb-4 pt-2">
        <p className="text-xl font-bold mb-2">Office Hours</p>
        {[
          "Monday_9:00am	–	8:00pm",
          "Tuesday_9:00am	–	8:00pm",
          "Wednesday_9:00am	–	8:00pm",
          "Thursday_9:00am	–	8:00pm",
          "Friday_9:00am	–	8:00pm",
          "Saturday_9:00am	–	8:00pm",
          "Sunday_9:00am	–	8:00am",
        ].map((item, index) => {
          const [day, time] = item.split("_");
          return (
            <div key={index} className="flex items-center ">
              <p className="min-w-28 font-medium">{day}</p>
              <p className="font-medium">{time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddressInfo;
