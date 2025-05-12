import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ExtendedRecordMap } from "notion-types";
import { getNotionPages } from "@/apis/notion";
import { Post } from "@/types/notion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function databaseIntoNotionPosts(
  collectionId: string,
  collectionViewId: string,
  categoryKey: string,
  recordMap: ExtendedRecordMap
) {
  // 0. recordMap에서 category 테마 가져오기
  const categories =
    recordMap.collection[collectionId].value.schema[categoryKey].options;

  // 1. view id로 내부 페이지 id 배열 불러오기
  const blockIds =
    recordMap.collection_query[collectionId][collectionViewId]
      .collection_group_results?.blockIds;
  console.log("blockIds", blockIds);
  const postRecordMaps: ExtendedRecordMap[] = [];

  if (!blockIds) return;

  // 2. 페이지 배열 notion API 호출
  for await (const pageId of blockIds) {
    console.log("pageId", pageId);
    const page = await getNotionPages(pageId);
    postRecordMaps.push(page);
  }

  console.log("postRecordMaps", postRecordMaps);

  // 3. 각 페이지 별 데이터 파싱 (Post 인터페이스로 만들기)
  const posts: Post[] = postRecordMaps.map((recordMap) => {
    const pageId = Object.keys(recordMap.block)[0];
    const page = recordMap.block[pageId];

    // 커버 이미지 추출
    let cover = page.value.format.page_cover
      ? `https://www.notion.so${page.value.format.page_cover}`
      : "/images/default-image.png";

    if (
      cover.includes("attachment:") &&
      cover !== "/images/default-image.png"
    ) {
      const encodedUrl = encodeURIComponent(page.value.format.page_cover);
      cover = `https://www.notion.so/image/${encodedUrl}?table=block&id=${pageId}&cache=v2`;
    }

    console.log("page.value.properties", page.value.properties);
    // startedAt, endedAt 추출
    const endedAt =
      page.value.properties?.[
        process.env.NEXT_PUBLIC_NOTION_PROJECT_START_DATE_ID!
      ]?.[0]?.[1]?.[0]?.[1]?.["start_date"] || "";
    const startedAt =
      page.value.properties?.[
        process.env.NEXT_PUBLIC_NOTION_PROJECT_END_DATE_ID!
      ]?.[0]?.[1]?.[0]?.[1]?.["start_date"] || "";

    // 제목 추출
    const title = page.value.properties.title?.[0]?.[0] || "";

    // 생성 시간 추출
    const createdAt = new Date(page.value.created_time).toISOString();

    // 마지막 수정 시간 추출
    const lastUpdatedAt = new Date(page.value.last_edited_time).toISOString();

    // 카테고리 추출 (properties에서 카테고리 필드가 있다고 가정)
    const categoryValues =
      page.value.properties[categoryKey]?.[0]?.[0]?.split(",") || [];
    const category = categoryValues.map((value: string) => {
      const category = categories?.find((category) => category.value === value);
      return {
        color: category?.color,
        name: category?.value,
      };
    });

    return {
      id: pageId,
      cover,
      title,
      createdAt,
      lastUpdatedAt,
      category,
      recordMap: recordMap,
      startedAt,
      endedAt,
    };
  });

  // 4. return result
  return posts;
}
