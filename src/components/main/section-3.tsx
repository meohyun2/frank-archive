import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Section3 = async () => {
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
    <div className="w-full pb-24 pt-12 bg-sky-100 flex flex-col justify-center items-center border-collapse px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl max-lg:text-xl font-bold">
            Recently Projects
          </h1>
          <Button asChild>
            <Link href="/projects" className="flex items-center gap-2" scroll>
              <p>View all</p>
            </Link>
          </Button>
        </div>
        <RecentPostsList
          link="/projects"
          posts={notionPosts?.slice(0, 3) ?? []}
          type="project"
        />
      </div>
    </div>
  );
};

export default Section3;
