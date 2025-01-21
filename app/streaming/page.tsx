import { Suspense } from "react";
import { Card } from "@/components/ui/card";

async function StreamingComponent({ delay }: { delay: number }) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <Card className="p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">
        Component loaded after {delay}ms
      </h2>
      <p>This component was streamed after an artificial delay.</p>
      <p className="text-muted-foreground mt-2">
        Loaded at: {new Date().toLocaleTimeString()} and fetched from API with{" "}
        {posts.length} posts
      </p>
    </Card>
  );
}

export const revalidate = 60;

export default function StreamingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Streaming Demo</h1>

      <Card className="p-6 mb-4">
        <h2 className="text-2xl font-bold mb-4">Instant Load</h2>
        <p>This content is available immediately.</p>
      </Card>

      <Suspense
        fallback={
          <Card className="p-6 mb-4 animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </Card>
        }
      >
        <StreamingComponent delay={Math.round(Math.random() * 10000)} />
      </Suspense>

      <Suspense
        fallback={
          <Card className="p-6 animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </Card>
        }
      >
        <StreamingComponent delay={Math.round(Math.random() * 10000)} />
      </Suspense>
      <div className="mt-4">
        Learn more about Next.js Streaming in the official{" "}
        <a
          className="text-blue-500"
          href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming"
        >
          docs.
        </a>
      </div>
    </div>
  );
}
