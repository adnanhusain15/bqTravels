"use client";
import { Button } from "@/components/ui/button";
import { LocateIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import Map from "./Map";

interface IAddressInfoProps {}
const AddressInfo: FC<IAddressInfoProps> = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">
      <Map />
      <div className="w-full flex flex-col px-4 pt-4 pb-2">
        <p className="text-xl font-bold mb-2">Get in touch</p>
        <div className="flex items-center">
          <Phone size={16} />
          <p>&nbsp;:</p>

          <Button variant="ghost" className="px-1 py-1" asChild>
            <Link className="underline text-lg" href="tel:+91-9975152136">
              +91-9975152136
            </Link>
          </Button>
        </div>
        <div className="flex items-start">
          <Mail size={16} className="mt-1" />
          <p>&nbsp;:</p>
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="px-1 py-1 h-auto" asChild>
              <Link
                className="underline text-lg"
                href="mailto:mustufa@bqtoursandtravels.com"
              >
                mustufa@bqtoursandtravels.com
              </Link>
            </Button>
            <Button variant="ghost" className="px-1 py-1 h-auto" asChild>
              <Link
                className="underline text-lg"
                href="mailto:bookings@bqtoursandtravels.com"
              >
                bookings@bqtoursandtravels.com
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start overflow-x-hidden h-auto">
          <LocateIcon size={16} className="mt-1" />
          <p>&nbsp;:</p>
          <Link
            className="flex-1 underline px-1 py-1 "
            href="https://maps.app.goo.gl/uAtwSXhrbNw4fcGB9"
            target="_blank"
          >
            <p className="font-medium break-words text-sm">
              Sukun Residency, Mezzanine Floor, Opposite Dinshaw Factory, Behind
              Nice Medical Stores Office Number 03, Borgaon, Patel Nagar, Nagpur
            </p>
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
