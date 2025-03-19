import { ModalType } from "@/components/Modal/Modal";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export const usePay = (openModal: (type: ModalType) => void) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [href, setHref] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (selectedValue === "АБ") {
      setHref(
        "https://next.privat24.ua/payments/form/%7B%22token%22:%22123d7d50-3066-46bf-9bcd-184e4af1542f%22%7D"
      );
    } else {
      setHref(
        "https://next.privat24.ua/payments/form/%7B%22token%22:%224565d8f8-3f3e-414b-bfac-988cbfb1ddc0%22%7D"
      );
    }
  }, [selectedValue]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!selectedValue) {
      return e.preventDefault();
    }
    openModal("final");
  };

  return { selectedValue, href, handleChange, handleClick };
};
