"use client";

import { useEffect } from "react";
import Container from "@/components/Container/Container";
import css from "./page.module.css";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  // Якщо це виклик notFound(), то перенаправляємо на not-found.tsx
  if (error.message.includes("NEXT_NOT_FOUND")) {
    return import("./not-found").then(({ default: NotFound }) => <NotFound />);
  }

  return (
    <Container>
      <div className={css.section}>
        <h1 className={css.disclaimer}>Щось пішло не так...</h1>
        <p>{error.message}</p>
      </div>
    </Container>
  );
}
