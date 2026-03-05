const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
const apiToken = process.env.STRAPI_API_TOKEN;

interface StrapiRequestOptions {
  endpoint: string;
  query?: Record<string, string | number | boolean>;
  next?: RequestInit["next"];
}

function buildUrl(endpoint: string, query?: StrapiRequestOptions["query"]) {
  const url = new URL(`/api${endpoint}`, baseUrl);
  if (query) {
    Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, String(value)));
  }
  return url.toString();
}

export async function strapiFetch<T>({ endpoint, query, next }: StrapiRequestOptions): Promise<T> {
  const response = await fetch(buildUrl(endpoint, query), {
    headers: {
      "Content-Type": "application/json",
      ...(apiToken ? { Authorization: `Bearer ${apiToken}` } : {}),
    },
    next,
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
