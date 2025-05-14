import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const Section2 = async () => {
  const database = await getNotionPages(
    process.env.NEXT_PUBLIC_NOTION_ROOT_DATABASE_ID!
  );

  console.log("database", database);
  const notionPosts = await databaseIntoNotionPosts(
    process.env.NEXT_PUBLIC_NOTION_COLLECTION_ID!,
    process.env.NEXT_PUBLIC_NOTION_COLLECTION_VIEW_ID!,
    process.env.NEXT_PUBLIC_NOTION_CATEGORY_ID!,
    database
  );

  console.log("notionPosts", notionPosts);

  return (
    <div className="w-full pt-24 pb-12 bg-sky-100 flex flex-col justify-center items-center border-collapse px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl max-lg:text-xl font-bold">Recent Archives</h1>
          <Button asChild>
            <Link href="/archives" className="flex items-center gap-2" scroll>
              <p>View all</p>
            </Link>
          </Button>
        </div>
        <RecentPostsList
          link="/archives"
          posts={notionPosts?.slice(0, 3) ?? []}
          type="archive"
        />
      </div>
    </div>
  );
};

export default Section2;
