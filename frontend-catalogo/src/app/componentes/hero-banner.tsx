import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="/coding-workspace-dark-theme.jpg"
          alt="Hero Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative flex h-full items-center px-4 md:px-12">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Domine o Desenvolvimento Full Stack
          </h2>

          <p className="text-lg text-muted-foreground text-pretty md:text-xl">
            Aprenda as tecnologias mais demandadas do mercado com projetos
            práticos e instrutores experientes. De React a Node.js, de iniciante
            a avançado.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className="h-5 w-5 fill-current" />
              Começar Agora
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-secondary/80 backdrop-blur-sm hover:bg-secondary"
            >
              <Info className="h-5 w-5" />
              Mais Informações
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="rounded bg-primary/20 px-2 py-1 font-semibold text-primary">
              NOVO
            </span>
            <span>24 horas de conteúdo</span>
            <span>•</span>
            <span>Certificado incluso</span>
          </div>
        </div>
      </div>
    </div>
  );
}
