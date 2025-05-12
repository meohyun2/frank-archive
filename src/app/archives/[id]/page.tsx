import ClientNotionRenderer from "@/components/notion/client-notion-renderer";
import { getNotionPages } from "@/apis/notion";
import Giscus from "@/components/giscus";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArchivesPage({ params }: Props) {
  const recordMap = await getNotionPages(params.id);
  return (
    <div>
      <ClientNotionRenderer recordMap={recordMap} />
      <Giscus />
    </div>
  );
}
