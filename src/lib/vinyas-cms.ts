import "server-only";

import type {
  VinyasAboutUs,
  VinyasCtaSection,
  VinyasHeroSection,
} from "@/common/types";

const API_URL = process.env.VINYAS_API_URL ?? "https://api-vinyas.vyomnix.com";
const SITE_SLUG = "vyomnix-innovations";
const REVALIDATE_SECONDS = 300;

interface VinyasApiItem<T> {
  data: T;
}

interface VinyasApiCollectionResponse<T> {
  items: VinyasApiItem<T>[];
  total: number;
  hasMore: boolean;
}

interface VinyasCollectionResponse<T> {
  items: T[];
  total: number;
  hasMore: boolean;
}

interface GetContentOptions {
  fields: string[];
  limit?: number;
}

/**
 * Fetches a published Vinyas collection from the server-only CMS API.
 * Use this function for new CMS-backed sections instead of calling fetch
 * directly from a component.
 */
export async function getVinyasContent<T>(
  contentType: string,
  { fields, limit = 20 }: GetContentOptions,
): Promise<VinyasCollectionResponse<T>> {
  const apiKey = process.env.VINYAS_API_KEY;

  if (!apiKey) {
    throw new Error("VINYAS_API_KEY is not configured");
  }

  const params = new URLSearchParams({
    fields: fields.join(","),
    sort: "publishedAt",
    order: "desc",
    page: "0",
    limit: String(limit),
  });
  const url = new URL(
    `/public/content/${SITE_SLUG}/${contentType}?${params}`,
    API_URL,
  );

  const response = await fetch(url, {
    headers: { "X-CMS-API-Key": apiKey },
    next: {
      revalidate: REVALIDATE_SECONDS,
      tags: ["vinyas-cms", `vinyas-cms:${contentType}`],
    },
  });

  if (!response.ok) {
    throw new Error(
      `Vinyas API request for ${contentType} failed: ${response.status}`,
    );
  }

  const payload = (await response.json()) as VinyasApiCollectionResponse<T>;

  return {
    ...payload,
    items: payload.items.map((item) => item.data),
  };
}

export const DEFAULT_HERO_CONTENT: VinyasHeroSection = {
  tag: "Nepal's Premier Software Consultancy",
  title: "We Build Software That Moves Businesses Forward",
  subTitle:
    "From concept to deployment — we engineer custom software, cloud infrastructure, and AI-powered systems that accelerate growth and operational efficiency.",
};

export const DEFAULT_ABOUT_US_CONTENT: VinyasAboutUs = {
  title: "Your Trusted Technology Partner in South Asia.",
  description:
    "Vyomnix is a Nepal-based software consultancy that partners with businesses to build custom software, cloud infrastructure, and AI-powered systems. We start by understanding your operating reality, then shape technology around the outcomes that matter.\n\nFounded to bridge the gap between ambition and technology, we support organizations across South Asia and beyond — from ambitious startups to established enterprises looking for dependable digital execution.",
  projectDelivered: 100,
  clientServed: 50,
  clientRetention: 95,
};

export const DEFAULT_CTA_CONTENT: VinyasCtaSection = {
  title: "Ready to Build Something Great?.",
  subTitle:
    "Let's discuss your project, requirements, and business goals. Our team responds within one business day.",
};
/**
 * Loads all CMS content needed by the home page. A section falls back to its
 * checked-in copy if the CMS is temporarily unavailable or has no published item.
 */
export async function getHomePageContent() {
  const [heroResult, aboutResult, ctaResult] = await Promise.allSettled([
    getVinyasContent<VinyasHeroSection>("hero-section", {
      fields: ["title", "subTitle", "tag"],
      limit: 1,
    }),
    getVinyasContent<VinyasAboutUs>("about-us", {
      fields: [
        "title",
        "description",
        "projectDelivered",
        "clientServed",
        "clientRetention",
      ],
      limit: 1,
    }),

    getVinyasContent<VinyasCtaSection>("cta-section", {
      fields: ["title", "subTitle"],
      limit: 1,
    }),
  ]);

  return {
    hero:
      heroResult.status === "fulfilled" && heroResult.value.items[0]
        ? { ...DEFAULT_HERO_CONTENT, ...heroResult.value.items[0] }
        : DEFAULT_HERO_CONTENT,
    about:
      aboutResult.status === "fulfilled" && aboutResult.value.items[0]
        ? { ...DEFAULT_ABOUT_US_CONTENT, ...aboutResult.value.items[0] }
        : DEFAULT_ABOUT_US_CONTENT,
    cta:
      ctaResult.status === "fulfilled" && ctaResult.value.items[0]
        ? { ...DEFAULT_CTA_CONTENT, ...ctaResult.value.items[0] }
        : DEFAULT_CTA_CONTENT,
  };
}
