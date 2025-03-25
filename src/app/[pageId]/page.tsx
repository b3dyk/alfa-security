import ROUTES from "@/helpers/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { pageId: string };
}): Promise<Metadata> {
  const id = params.pageId;

  const meta = ROUTES.find(({ path }) => path.replace(/\//g, "") === id);

  if (!meta) {
    return {
      title: "404 - Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: `${meta.name} - Alfa Security`,
    description: meta.desc,
  };
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { pageId: string };
}) {
  const route = ROUTES.find(
    ({ path }) => path.replace(/\//g, "") === params.pageId
  );

  if (!route) {
    notFound();
  }

  return (
    <main>
      <route.Component key={route.id} scalable={route.scalable} />
    </main>
  );
}
