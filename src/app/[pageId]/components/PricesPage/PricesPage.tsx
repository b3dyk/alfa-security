import CallbackForm from "@/components/CallbackForm/CallbackForm";
import Prices from "./components/Prices/Prices";
import { PageProps } from "@/helpers/routes";

export default function PricesPage({ scalable }: PageProps) {
  return (
    <>
      <Prices scalable={scalable} />
      <CallbackForm />
    </>
  );
}
