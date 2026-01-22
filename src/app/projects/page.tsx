import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";
import { Layers } from "lucide-react";

const Projects = async () => {
  const database = await getNotionPages(
    process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID!
  );

  const notionPosts = await databaseIntoNotionPosts(
    process.env.NEXT_PUBLIC_NOTION_PROJECT_COLLECTION_ID!,
    process.env.NEXT_PUBLIC_NOTION_PROJECT_COLLECTION_VIEW_ID!,
    process.env.NEXT_PUBLIC_NOTION_PROJECT_CATEGORY_ID!,
    database
  );

  return (
    <div className="w-full min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-secondary/20">
              <Layers className="w-7 h-7 text-accent-secondary" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">Projects</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
            제 프로젝트 목록입니다.
          </p>
        </div>
        
        {/* Projects Grid */}
        <RecentPostsList
          link="/projects"
          posts={notionPosts ?? []}
          type="project"
        />
      </div>
    </div>
  );
};

export default Projects;
