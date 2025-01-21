export const dynamic = "auto";

import { Card } from "@/components/ui/card";
import Image from "next/image";
async function getRandomCat() {
  try {
    const response = await fetch("https://some-random-api.com/animal/cat?", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    return {
      image: data.image,
      fact: data.fact,
    };
  } catch (error) {
    // Fallback quote in case of API failure
    return {
      image: "https://cdn.some-random-api.com/2BRR9Vqn.png",
      fact: "The best preparation for tomorrow is doing your best today.",
    };
  }
}

export default async function DynamicPage() {
  const cat = await getRandomCat();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Dynamic Rendering Demo</h1>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dynamic Content</h2>
        <p className="mb-4">
          This page is dynamically rendered on every request. Refresh to see a
          new cat fact.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 my-4">
          <p className="text-lg italic mb-2">{cat.fact}</p>
        </blockquote>

        <div className="p-4 bg-muted rounded-lg">
          <p className="font-mono">
            Generated at: {new Date().toLocaleTimeString()}
          </p>
        </div>
        <div className="mt-4">
          Learn more about Next.js Dynamic Rendering in the official{" "}
          <a
            className="text-blue-500"
            href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering"
          >
            docs.
          </a>
        </div>
      </Card>
    </div>
  );
}
