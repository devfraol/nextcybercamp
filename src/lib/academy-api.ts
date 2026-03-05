import { strapiFetch } from "@/lib/strapi-client";
import { StrapiCourse, StrapiResponse } from "@/types/strapi";

export async function getCourses() {
  return strapiFetch<StrapiResponse<StrapiCourse>>({
    endpoint: "/courses",
    query: {
      "pagination[pageSize]": 12,
      "sort[0]": "createdAt:desc",
    },
    next: {
      revalidate: 60,
    },
  });
}
