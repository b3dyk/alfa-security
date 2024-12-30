import CallbackForm from "@/components/CallbackForm/CallbackForm";
import css from "./DiscountPage.module.css";
import { PageProps } from "@/helpers/routes";
import Discounts from "./components/Discounts/Discounts";

export default function DiscountPage({ scalable }: PageProps) {
  return (
    <>
      <Discounts scalable={scalable} />
      <CallbackForm />
    </>
  );
}
