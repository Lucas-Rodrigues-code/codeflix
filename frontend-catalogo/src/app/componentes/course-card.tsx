"use client";

import { Clock, Play } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Course {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  level: string;
}
export function CourseCard({ course }: { course: Course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group/card relative min-w-[200px] shrink-0 cursor-pointer overflow-hidden border-0 bg-card transition-all duration-300 hover:scale-105 md:min-w-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-3/4">
        <img
          src={course.thumbnail || "/placeholder.svg"}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary/90 hover:bg-primary"
          >
            <Play className="h-6 w-6 fill-current" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="mb-2 font-semibold text-balance text-foreground">
            {course.title}
          </h4>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
            <span className="rounded bg-primary/20 px-2 py-0.5 text-primary">
              {course.level}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
