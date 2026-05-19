import { Projects } from "@/MyProjectsData/Projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return Projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = Projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="container py-12 max-w-3xl space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      {project.projectImage && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <Image
            src={project.projectImage}
            alt={project.projectName}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{project.projectName}</h1>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {project.projectType}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.projectDescription}</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2">
        {project.link ? (
          <Button asChild size="sm">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            {project.status ?? "Private client system — not publicly available"}
          </p>
        )}
      </div>
    </div>
  );
}
