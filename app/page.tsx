"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ClientRequest } from "http";
import Clients from "@/components/Clients";
import { LampContainer } from "@/components/ui/lamp";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
