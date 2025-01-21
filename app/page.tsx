import { Suspense } from "react";
import { Card } from "@/components/ui/card";

// This component will be prerendered
function PrerenderedContent() {
  return (
    <Card className="p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Prerendered Content</h2>
      <p>This section is prerendered at build time and served immediately.</p>
    </Card>
  );
}

// This component simulates dynamic content
async function DynamicContent() {
  // Simulate a slow API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dynamic Content</h2>
      <p>This content was loaded dynamically after the initial page load.</p>
      <p className="text-muted-foreground mt-2">
        Loaded at: {new Date().toLocaleTimeString()}
      </p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Partial Prerendering (PPR) Demo
      </h1>

      <PrerenderedContent />

      <Suspense
        fallback={
          <Card className="p-6 animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </Card>
        }
      >
        <DynamicContent />
        <div className="mt-4">
          Learn more about Next.js Partial Prerendering in the official{" "}
          <a
            className="text-blue-500"
            href="https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering"
          >
            docs.
          </a>
        </div>
      </Suspense>
    </div>
  );
}
