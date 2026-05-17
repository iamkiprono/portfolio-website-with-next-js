"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://portfolio-backend-kiprono1.onrender.com/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      setLoading(false);

      const data = await res.json();
      if (!res.ok) {
        throw Error(data.error);
      }
      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">kiprono.collins@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-muted rounded-xl">
            <p className="italic text-muted-foreground">
              &quot;I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.&quot;
            </p>
          </div>
        </div>

        <Card className="border-muted-foreground/20">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMail();
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}
