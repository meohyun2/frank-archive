import { NotionAPI } from "notion-client";

export const notion = new NotionAPI();

export async function getNotionPages(rootDatabaseId: string) {
  const recordMap = await notion.getPage(rootDatabaseId);
  return recordMap;
}
