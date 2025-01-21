"use client";

import { Home, Zap, Bolt, Waves } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "PPR Demo", href: "/", icon: Home },
  { name: "Static Demo", href: "/static", icon: Zap },
  { name: "Dynamic Demo", href: "/dynamic", icon: Bolt },
  { name: "Streaming Demo", href: "/streaming", icon: Waves },
];

export function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
