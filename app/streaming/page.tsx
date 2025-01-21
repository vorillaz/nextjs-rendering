import { Suspense } from "react";
import { Card } from "@/components/ui/card";

export const getDelay = () => {
  const delays = [12000, 10000, 5000, 20000, 8000, 15000];
  return delays[Math.floor(Math.random() * delays.length)];
};

async function getRandomCat() {
  try {
    const response = await fetch(
      `https://some-random-api.com/animal/cat?key=${Math.random()}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

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

async function StreamingComponent({ delay }: { delay: number }) {
  const cat = await getRandomCat();

  return (
    <Card className="p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">
        Component loaded after {delay}ms
      </h2>
      <p>
        This component was streamed after an artificial delay. and fetched from
        API with a random cat fact
      </p>
      <blockquote>{cat.fact}</blockquote>

      <p className="text-muted-foreground mt-2">
        Loaded at: {new Date().toLocaleTimeString()}
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
        <StreamingComponent delay={getDelay()} />
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
        <StreamingComponent delay={getDelay()} />
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
