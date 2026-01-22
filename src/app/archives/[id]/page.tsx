import ClientNotionRenderer from "@/components/notion/client-notion-renderer";
import { getNotionPages } from "@/apis/notion";
import Giscus from "@/components/giscus";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArchivesPage({ params }: Props) {
  const { id } = await params;
  const recordMap = await getNotionPages(id);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        <article className="glass rounded-2xl overflow-hidden">
          <ClientNotionRenderer recordMap={recordMap} />
        </article>
      </div>
      <Giscus />
    </div>
  );
}
