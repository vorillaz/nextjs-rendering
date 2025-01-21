import { Card } from "@/components/ui/card";

function getCurrentTime() {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  return `${time} ${date}`;
}

export default function StaticPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Static Rendering Demo</h1>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Static Content</h2>
        <p className="mb-4">
          This page is statically rendered at build time. The content won't
          change until the next deployment.
        </p>
        <div className="p-4 bg-muted rounded-lg">
          <p className="font-mono">Build Time: {getCurrentTime()}</p>
        </div>
        <div className="mt-4">
          Learn more about Next.js Static Rendering in the official{" "}
          <a
            className="text-blue-500"
            href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default"
          >
            docs.
          </a>
        </div>
      </Card>
    </div>
  );
}
