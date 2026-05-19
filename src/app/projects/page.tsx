import React from "react";
import { Projects } from "@/MyProjectsData/Projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectDescription from "@/components/ProjectDescription";

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
          <Card key={index} className="flex flex-col overflow-hidden border-muted-foreground/20">
            <div className="relative aspect-video overflow-hidden">
              {project.projectImage ? (
                <Image
                  src={project.projectImage}
                  alt={project.projectName}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">No Image</span>
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.projectName}</CardTitle>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {project.projectType}
                </span>
              </div>
              <ProjectDescription text={project.projectDescription} />
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
            <CardFooter className="pt-4 border-t gap-2">
              {project.link ? (
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              ) : (
                <span className="text-xs text-muted-foreground italic">
                  {project.status ?? "Private client system — not publicly available"}
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
