import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h1>
        <p className="text-muted-foreground text-lg">
          My journey, passion, and what drives me as a software engineer.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> with a flair for crafting 
            remarkable web and mobile experiences. My journey into the world of coding began with a fascination for 
            technology and a drive to create innovative solutions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I specialize in the <span className="text-foreground font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js) 
            and <span className="text-foreground font-semibold">Next.js</span>, using these powerful tools to build captivating 
            and performant applications. I also enjoy working with SQL databases to maintain robust and structured data operations.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I&apos;m not coding, you can find me immersed in a world of music, exploring the wonders of nature,
            or enjoying thought-provoking books. I believe in the power of continuous learning and constantly 
            seek new challenges to sharpen my skills and expand my horizons.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-muted-foreground/20">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Quick Facts</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Location</Badge>
                  <span>Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Focus</Badge>
                  <span>Web & Mobile Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Interests</Badge>
                  <span>Music, Nature, Reading</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Motto</Badge>
                  <span>&quot;Building something incredible, one line at a time.&quot;</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
