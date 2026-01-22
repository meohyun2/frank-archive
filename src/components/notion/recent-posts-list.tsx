import { Post, Category } from "@/types/notion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

interface RecentPostsListProps {
  posts: Post[];
  link: string;
  type: "archive" | "project";
}

const categoryColorMap: Record<string, string> = {
  default: "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/25",
  gray: "bg-gray-500/15 text-gray-700 dark:text-gray-300 border-gray-500/25",
  brown: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/25",
  orange: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/25",
  yellow: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-500/25",
  green: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
  blue: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/25",
  purple: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/25",
  pink: "bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-500/25",
  red: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/25",
};

const RecentPostsList = ({ posts, link, type }: RecentPostsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {posts.map((post) => (
        <Link
          href={`${link}/${post.id}`}
          key={post.id}
          className="group relative block glass rounded-2xl overflow-hidden glass-hover"
        >
          {/* Cover Image */}
          {post.cover && (
            <div className="relative w-full h-48">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* 다크/라이트 모드에 따른 그라데이션 - 하단을 넘어서 콘텐츠까지 확장 */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#1a1a2e] dark:via-[#1a1a2e]/80 dark:to-transparent pointer-events-none translate-y-1" />
            </div>
          )}
          
          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Title */}
            <h2 className="text-lg font-semibold text-foreground group-hover:text-accent-primary transition-colors line-clamp-2">
              {post.title}
            </h2>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {post.category.map((cat: Category, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-lg border",
                    categoryColorMap[cat.color] || categoryColorMap.default
                  )}
                >
                  {cat.name}
                </span>
              ))}
            </div>
            
            {/* Date */}
            <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              {type === "archive" ? (
                <>
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.archiveCreatedAt}>
                    {new Date(post.archiveCreatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}
                  </time>
                </>
              ) : (
                <>
                  <Clock className="w-3.5 h-3.5" />
                  <time dateTime={post.startedAt}>
                    {new Date(post?.startedAt || "").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short"
                    })}
                  </time>
                  <span className="mx-1">→</span>
                  <time dateTime={post.endedAt}>
                    {new Date(post?.endedAt || "").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short"
                    })}
                  </time>
                </>
              )}
            </div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%)'
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default RecentPostsList;
