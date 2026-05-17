import type { MetadataRoute } from "next";

const baseUrl = "https://www.museobucolico.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/vieni-a-visitarci`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credits`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sostienici`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
