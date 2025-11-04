"use client";

import { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [titles, setTitles] = useState<string[]>([
    "Cursos",
    "Minha Lista",
    "Categorias",
  ]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary md:text-3xl">
            CODEFLIX
          </h1>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Início
            </a>
            {titles.map((title) => (
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {title}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar cursos..."
                className="w-64 bg-secondary/50 pl-10 text-sm backdrop-blur-sm"
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
