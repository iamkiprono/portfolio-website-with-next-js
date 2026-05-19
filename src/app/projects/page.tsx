import React from "react";
import { Projects } from "@/MyProjectsData/Projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="text-muted-foreground text-lg">
          A collection of my recent work, ranging from web applications to mobile apps.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`} className="group block">
            <Card className="flex flex-col overflow-hidden border-muted-foreground/20 h-full transition-shadow group-hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                {project.projectImage ? (
                  <Image
                    src={project.projectImage}
                    alt={project.projectName}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">No Image</span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-base leading-snug">{project.projectName}</CardTitle>
                  <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {project.projectType}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mt-1">
                  {project.projectDescription}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <span className="flex items-center gap-1 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                  View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
