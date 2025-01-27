import ROUTES from "@/helpers/routes";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { pageId: string };
}): Promise<Metadata> {
  const id = params.pageId;

  const meta = ROUTES.find(({ path }) => path.split("/").join("") === id);

  return {
    title: `${meta?.name} - Alfa Security`,
    description: meta?.desc,
  };
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { pageId: string };
}) {
  return (
    <main>
      {ROUTES.map(({ id, path, Component, scalable }) => {
        const editedPath = path.split("/").join("");
        if (editedPath !== params.pageId) return;
        return <Component key={id} scalable={scalable} />;
      })}
    </main>
  );
}
