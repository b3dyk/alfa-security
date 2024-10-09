import CallbackForm from "@/components/CallbackForm/CallbackForm";
import Services from "./components/Services/Services";
import { PageProps } from "@/helpers/routes";

export default function ServicesPage({ scalable }: PageProps) {
  return (
    <>
      <Services scalable={scalable} />
      <CallbackForm />
    </>
  );
}
