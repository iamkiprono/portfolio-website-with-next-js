import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hi, I&apos;m <span className="text-primary">Kiprono Collins</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          Full Stack Software Engineer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I build robust, scalable, and user-centric web applications. Based in Nairobi, Kenya, 
          dedicated to crafting clean code and exceptional digital experiences.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link target="_blank" href="/Collins Kiprono Resume.pdf">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
