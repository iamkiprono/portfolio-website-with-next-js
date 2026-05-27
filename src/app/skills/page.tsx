import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techSkills = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "React Query"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Java Spring Boot", "Django"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma", "Sequelize"],
  },
  {
    category: "Search & AI",
    skills: ["Elasticsearch", "Meilisearch", "OpenAI API", "LangChain"],
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Docker", "Nginx", "PM2", "Linux", "GitHub Actions", "Git"],
  },
  {
    category: "Integrations & Services",
    skills: ["JWT", "Socket.IO", "Dynamics 365 Business Central"],
  },
];

export default function SkillsPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h1>
        <p className="text-muted-foreground text-lg">
          My technical toolkit and the technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techSkills.map((group) => (
          <Card key={group.category} className="border-muted-foreground/20">
            <CardHeader>
              <CardTitle>{group.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
