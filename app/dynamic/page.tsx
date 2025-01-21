export const dynamic = "auto";

import { Card } from "@/components/ui/card";

async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random", {
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
      content: data.content,
      author: data.author,
    };
  } catch (error) {
    // Fallback quote in case of API failure
    return {
      content: "The best preparation for tomorrow is doing your best today.",
      author: "H. Jackson Brown Jr.",
    };
  }
}

export default async function DynamicPage() {
  const quote = await getRandomQuote();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Dynamic Rendering Demo</h1>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dynamic Content</h2>
        <p className="mb-4">
          This page is dynamically rendered on every request. Refresh to see a
          new quote.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 my-4">
          <p className="text-lg italic mb-2">{quote.content}</p>
          <footer className="text-sm text-muted-foreground">
            — {quote.author}
          </footer>
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
