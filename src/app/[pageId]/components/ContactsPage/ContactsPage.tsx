import CallbackForm from "@/components/CallbackForm/CallbackForm";
import Map from "./components/Map/Map";
import Contacts from "./components/Contacts/Contacts";
import { PageProps } from "@/helpers/routes";

export default function ContactsPage({ scalable }: PageProps) {
  return (
    <>
      <Contacts scalable={scalable} />
      <Map />
      <CallbackForm />
    </>
  );
}
