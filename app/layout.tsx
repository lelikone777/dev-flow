import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOverflow | Modern Stack Overflow",
  description:
    "DevOverflow - DevOverflow is a modern and innovative platform designed to serve as a contemporary alternative to Stack Overflow. With a focus on catering to the needs of developers and tech enthusiasts, DevOverflow provides a space for individuals to seek and share knowledge, troubleshoot coding issues, and engage in collaborative problem-solving within the ever-evolving realm of technology.\n" +
    "\n" +
    "This platform leverages a cutting-edge stack and employs a sleek design to enhance the user experience. By integrating the Clerk authentication system, DevOverflow ensures secure and seamless user interactions. The platform encourages a vibrant community of developers to come together, exchange ideas, and contribute to the collective growth of their skills and expertise.\n" +
    "\n" +
    'Whether you are a seasoned developer or just starting your coding journey, DevOverflow aims to be a go-to resource for finding solutions, discussing best practices, and staying up-to-date with the latest trends in the tech industry. The title "Modern Stack Overflow" reflects DevOverflow\'s commitment to embracing contemporary technologies and methodologies, making it a valuable hub for the tech-savvy community.',
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className="h1-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            consequuntur doloribus eligendi natus nesciunt quisquam repellat
            repudiandae sit sunt vel.
          </h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
