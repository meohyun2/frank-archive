import ClientNotionRenderer from "@/components/notion/client-notion-renderer";
import { getNotionPages } from "@/apis/notion";
import Giscus from "@/components/giscus";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectsPage({ params }: Props) {
  const { id } = await params;
  const recordMap = await getNotionPages(id);
  return (
    <div>
      <ClientNotionRenderer recordMap={recordMap} />
      <Giscus />
    </div>
  );
}
