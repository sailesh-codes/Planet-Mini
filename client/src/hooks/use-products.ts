import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// Define a helper to safely parse Zod responses with logging
function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    // Fallback: Return raw data if it looks somewhat correct to avoid totally breaking the UI
    // In strict production we might throw, but let's be resilient here.
    return data as T; 
  }
  return result.data;
}

export function useProducts(params?: { category?: string; search?: string }) {
  return useQuery({
    queryKey: [api.products.list.path, params],
    queryFn: async () => {
      const url = new URL(api.products.list.path, window.location.origin);
      if (params?.category) url.searchParams.append("category", params.category);
      if (params?.search) url.searchParams.append("search", params.search);

      const res = await fetch(url.toString(), { credentials: "omit" });
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      return parseWithLogging<any>(api.products.list.responses[200], data, "products.list");
    },
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: [api.products.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.products.get.path, { slug });
      const res = await fetch(url, { credentials: "omit" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      return parseWithLogging<any>(api.products.get.responses[200], data, "products.get");
    },
    enabled: !!slug,
  });
}
