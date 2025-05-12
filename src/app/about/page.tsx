import { getNotionPages } from "@/apis/notion";
import ClientNotionRenderer from "@/components/notion/client-notion-renderer";

const About = async () => {
  const aboutMePost = await getNotionPages(
    process.env.NEXT_PUBLIC_NOTION_ABOUT_ME_ID!
  );

  return <ClientNotionRenderer recordMap={aboutMePost} />;
};

export default About;
