import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";
import { FileText } from "lucide-react";

const Archives = async () => {
  const database = await getNotionPages(
    process.env.NEXT_PUBLIC_NOTION_ROOT_DATABASE_ID!
  );
  const notionPosts = await databaseIntoNotionPosts(
    process.env.NEXT_PUBLIC_NOTION_COLLECTION_ID!,
    process.env.NEXT_PUBLIC_NOTION_COLLECTION_VIEW_ID!,
    process.env.NEXT_PUBLIC_NOTION_CATEGORY_ID!,
    database
  );

  return (
    <div className="w-full min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-primary/20">
              <FileText className="w-7 h-7 text-accent-primary" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">Archives</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
            기술적인 글, 튜토리얼, 인사이트 등
          </p>
        </div>
        
        {/* Posts Grid */}
        <RecentPostsList
          link="/archives"
          posts={notionPosts ?? []}
          type="archive"
        />
      </div>
    </div>
  );
};

export default Archives;
