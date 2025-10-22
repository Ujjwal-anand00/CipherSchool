"use client";
import Logo from "@/components/Logo";
import TextAnimationHeading from "@/components/TextAnimationHeading";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 overflow-hidden">
      <header className="h-20 flex items-center">
        <div className="container px-4 mx-auto flex items-center justify-between gap-4">
          <Logo />
          <nav>
            <Button
              onClick={() => router.push("/login")}
              className="cursor-pointer"
            >
              Login
            </Button>
          </nav>
        </div>
      </header>

      <TextAnimationHeading classNameAnimationContainer="mx-auto" />

      {/***dashboard landing image */}
      <div className="mx-auto w-fit shadow-lg">
        <Image
          src={"/banner-animate.gif"}
          width={1000}
          height={400}
          alt="banner"
        />
      </div>

      <footer className="bg-gradient-to-r from-slate-500 to-slate-800 py-6 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 gap-4">
        <p className="text-base font-semibold text-center sm:text-left">
          Made by{" "}
          <span className="text-primary hover:underline decoration-primary/70">
            Ujjwal Anand
          </span>
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Ujjwal-anand00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/ujjwal-anand63/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}
