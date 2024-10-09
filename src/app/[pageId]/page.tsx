import ROUTES from "@/helpers/routes";

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
