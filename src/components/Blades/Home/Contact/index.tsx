import Section from "@/components/Section";
import React, { FC } from "react";
import ContactForm from "./ContactForm";
import AddressInfo from "./AddressInfo";

interface IContactProps {}

const Contact: FC<IContactProps> = () => {
  return (
    <Section
      id="contact"
      containerClassName="grid grid-cols-1 md:grid-cols-2 gap-5 py-5"
    >
      <ContactForm />
      <AddressInfo />
    </Section>
  );
};

export default Contact;
