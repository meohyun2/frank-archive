import { getNotionPages } from "@/apis/notion";
import ClientNotionRenderer from "@/components/notion/client-notion-renderer";
import { User } from "lucide-react";

const About = async () => {
  const aboutMePost = await getNotionPages(
    process.env.NEXT_PUBLIC_NOTION_ABOUT_ME_ID!
  );

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-accent-tertiary/20">
              <User className="w-7 h-7 text-accent-tertiary" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">About Me</h1>
          </div>
        </div>
        
        {/* Content */}
        <article className="glass rounded-2xl overflow-hidden">
          <ClientNotionRenderer recordMap={aboutMePost} />
        </article>
      </div>
    </div>
  );
};

export default About;
