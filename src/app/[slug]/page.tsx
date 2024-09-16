import ServiceDetail from "@/components/Blades/Services/ServiceDetail";
import { appConstants } from "@/constants";
import { FC } from "react";
import Page404 from "../not-found";

interface IServiceProps {
  params: { slug: string };
}
const getService = (slug?: string) =>
  appConstants.services.find((i) => i.href === `/${slug || ""}`);
const Service: FC<IServiceProps> = (props) => {
  const service = getService(props?.params?.slug);
  if (!service) return <Page404 />;
  return <ServiceDetail service={service} />;
};

export default Service;
