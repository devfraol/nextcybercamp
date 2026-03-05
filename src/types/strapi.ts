export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: Array<StrapiEntity<T>>;
  meta: Record<string, unknown>;
}

export interface StrapiCourse {
  title: string;
  slug: string;
  level: string;
  duration: string;
  lessons: number;
  labs: number;
}
