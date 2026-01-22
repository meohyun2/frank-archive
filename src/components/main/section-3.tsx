import { getNotionPages } from "@/apis/notion";
import RecentPostsList from "@/components/notion/recent-posts-list";
import { databaseIntoNotionPosts } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers } from "lucide-react";

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
    <section className="w-full py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent-secondary/20">
              <Layers className="w-5 h-5 text-accent-secondary" />
            </div>
            <h2 className="text-3xl max-lg:text-xl font-bold text-slate-800 dark:text-slate-100">
              Recent Projects
            </h2>
          </div>
          <Button variant="glass" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        {/* Projects Grid */}
        <RecentPostsList
          link="/projects"
          posts={notionPosts?.slice(0, 3) ?? []}
          type="project"
        />
      </div>
    </section>
  );
};

export default Section3;
