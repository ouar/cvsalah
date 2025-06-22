

import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import { Card } from "./components/Card";
import photo from "./assets/ouarsalah-eddine.jpg";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [darkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white ">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center space-x-6 font-medium text-sm">
          <a href="#apropos" className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white">À propos</a>
          <Link to="/articles" className="hover:text-black dark:hover:text-white text-zinc-700 dark:text-zinc-300" >
            Articles
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-7xl mx-auto flex-1 px-6 py-24 flex items-center justify-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Je suis Salah-Eddine Ouar.<br />
              Développeur Full Stack passionné, basé à Annecy.
            </h1>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Lead Développeur Full Stack | Java, Spring, Angular, React +15 ans d’expérience.
              Développeur passionné avec plus de 15 ans d’expérience, spécialisé en Java (Spring Boot, Cloud, Security), Angular,
              React, j’ai collaboré au développement d’applications critiques pour le secteur bancaire.

            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              J'ai travaillé avec des entreprises comme Le Crédit Agricole, Le Crédit lyonnais, sur des projets
              critiques. Je suis en veille constante pour intégrer les meilleures technologies à mes projets.
              Je possède une solide expérience des outils
              DevOps (Docker, Kubernetes, CI/CD avec Jenkins et GitLab), et souhaite évoluer davantage dans ce domaine pour
              approfondir mes compétences.
            </p>
            <div className="mt-6 space-y-2">

              <div className="flex items-center space-x-2">
                <Linkedin size={20} /> <a href="https://www.linkedin.com/in/salah-eddine-ouar-2463b0a9/" className="hover:underline">Suivre sur LinkedIn</a>
              </div>

            </div>
          </div>

          <Card className="overflow-hidden">
            <img
              src={photo}
              alt="Salah Ouar"
              className="rounded-2xl object-cover"
            />
          </Card>
        </div>
      </main>
    </div>
  );
}
