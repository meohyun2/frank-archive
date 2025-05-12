import { Post, Category } from "@/types/notion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface RecentPostsListProps {
  posts: Post[];
  link: string;
  type: "archive" | "project";
}

const RecentPostsList = ({ posts, link, type }: RecentPostsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {posts.map((post) => (
        <Link
          href={`${link}/${post.id}`}
          key={post.id}
          className="w-[320px] group relative block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
        >
          {post.cover && (
            <div className="relative w-full h-48">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {post.category.map((cat: Category, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    cat.color === "default" && "bg-gray-100 text-gray-800",
                    cat.color === "gray" && "bg-gray-100 text-gray-800",
                    cat.color === "brown" && "bg-amber-100 text-amber-800",
                    cat.color === "orange" && "bg-orange-100 text-orange-800",
                    cat.color === "yellow" && "bg-yellow-100 text-yellow-800",
                    cat.color === "green" && "bg-green-100 text-green-800",
                    cat.color === "blue" && "bg-blue-100 text-blue-800",
                    cat.color === "purple" && "bg-purple-100 text-purple-800",
                    cat.color === "pink" && "bg-pink-100 text-pink-800",
                    cat.color === "red" && "bg-red-100 text-red-800"
                  )}
                >
                  {cat.name}
                </span>
              ))}
            </div>
            {type === "archive" ? (
              <div className="flex items-center text-sm text-gray-500">
                <time dateTime={post.createdAt}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </time>
              </div>
            ) : (
              <div className="flex items-center text-sm text-gray-500">
                <time dateTime={post.startedAt}>
                  {new Date(post?.startedAt || "").toLocaleDateString()}
                </time>
                <span className="mx-1">~</span>
                <time dateTime={post.endedAt}>
                  {new Date(post?.endedAt || "").toLocaleDateString()}
                </time>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPostsList;
