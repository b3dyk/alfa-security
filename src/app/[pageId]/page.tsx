import Container from "@/components/Container/Container";
import ROUTES from "@/helpers/routes";

export default function ProjectDetailsPage({
  params,
}: {
  params: { pageId: string };
}) {
  return (
    <main style={{ paddingTop: "200px" }}>
      <Container>
        {ROUTES.map(({ id, path, Component }) => {
          const editedPath = path.split("/").join("");
          if (editedPath !== params.pageId) return;
          return <Component key={id} />;
        })}
      </Container>
    </main>
  );
}
