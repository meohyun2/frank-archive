import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";

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
    <div className="w-full min-h-screen py-12 bg-sky-100 flex flex-col items-center border-collapse px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>
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
