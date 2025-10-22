"use client";
import Logo from "@/components/Logo";
import { TypeAnimation } from "react-type-animation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen max-h-screen h-full">
      <div className="hidden lg:flex flex-col p-10 bg-primary/10">
        <div className="flex items-center mb-20">
          <Logo />
        </div>
        <div className="h-full flex flex-col justify-center">
          <TypeAnimation
          sequence={[
            "No setup, no hassle -",
            1000, 
            " just write, run,",
            1000,
            " and see your code in action,",
            1000,
            "with CipherSchools Code Editor!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-medium "
        />
          <div className="mb-8 w-120 ml-20">
            <img
              src="https://compiler.cipherschools.com/images/laptop.svg"
              alt="Laptop"
            />
          </div>
          
        </div>
      </div>
      <div className="h-full flex flex-col justify-center">{children}</div>
    </div>
  );
}
