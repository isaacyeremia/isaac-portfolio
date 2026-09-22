"use client";

import { useState } from "react";

import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Database,
  Menu,
  X,
} from "lucide-react";

import {
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaLaravel,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";

import {
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);

  /*
   * ==================================================
   * PROJECTS
   * ==================================================
   */

  const projects = [
    {
      id: "griya-sehat",
      number: "01",
      title: "Griya Sehat",
      type: "Full-Stack Web Application",
      year: "2025 — 2026",

      description:
        "Sistem informasi kesehatan untuk membantu pengelolaan antrean, rekam medis, produk herbal, dan riwayat pasien.",

      details:
        "Dikembangkan menggunakan Laravel, PHP, MySQL, HTML, CSS, dan JavaScript. Proyek mencakup autentikasi berbasis peran, pengelolaan data pasien dan terapis, pengelolaan produk herbal, serta integrasi database.",

      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
      ],

      github: "#",
      demo: "#",

      image:
        "\\portofolio\\griya sehat\\Griya_Sehat_Original_Screenshots_Portfolio.png",
    },

    {
      id: "eventify",
      number: "02",
      title: "Eventify",
      type: "Android Application",
      year: "2025",

      description:
        "Aplikasi Android untuk membantu pengelolaan event, kalender, tugas pribadi, dan informasi aktivitas.",

      details:
        "Berfokus pada pengembangan frontend menggunakan Kotlin, Android Studio, dan Jetpack Compose. Integrasi REST API dilakukan menggunakan Retrofit, ViewModel, Coroutines, dan StateFlow.",

      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Retrofit",
        "REST API",
      ],

      github: "#",
      demo: "#",

      image:
        "\\portofolio\\eventify\\Eventify_Android_App_Showcase.png",
    },

    {
      id: "prita-bali",
      number: "03",
      title: "Prita Bali Nanny & Family Care",
      type: "Web Development",
      year: "2026 — Present",

      description:
        "Website pemasaran bilingual untuk memperkenalkan layanan childcare dan family care kepada pengguna.",

      details:
        "Dikembangkan menggunakan Next.js, TypeScript, dan Tailwind CSS dengan dukungan bahasa Indonesia dan Inggris. Website menerapkan technical SEO, reusable components, dan localization menggunakan next-intl.",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
      ],

      github: "#",

      demo:
        "https://pritabalinannyfamilycare.com",

      image:
        "\\portofolio\\prita\\Prita_Bali_Portfolio_Showcase(1).png",
    },
  ];

  /*
   * ==================================================
   * EXPERIENCE
   * ==================================================
   */

  const experiences = [
    {
      year: "2026 — Present",

      role: "Frontend Developer",

      company:
        "Prita Bali Nanny & Family Care",

      description:
        "Mengembangkan website pemasaran bilingual menggunakan Next.js, TypeScript, dan Tailwind CSS, termasuk localization dan technical SEO.",
    },

    {
      year: "2025 — 2026",

      role: "Full-Stack Web Developer",

      company: "Griya Sehat",

      description:
        "Mengembangkan sistem informasi kesehatan menggunakan Laravel, PHP, MySQL, HTML, CSS, dan JavaScript.",
    },

    {
      year: "2025",

      role: "Frontend / Android Developer",

      company: "Eventify",

      description:
        "Mengembangkan frontend aplikasi Android menggunakan Kotlin dan Jetpack Compose serta mengintegrasikan REST API.",
    },
  ];

  /*
   * ==================================================
   * TECH STACK
   * ==================================================
   */

  const skills = [
    {
      title: "Frontend",

      icon: <Code2 size={19} />,

      items: [
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },

        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },

        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },

        {
          name: "React",
          icon: <FaReact />,
        },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],
    },

    {
      title: "Backend",

      icon: <FaLaravel size={19} />,

      items: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
        },

        {
          name: "PHP",
          icon: <SiPhp />,
        },

        {
          name: "REST API",
          icon: <ArrowUpRight size={17} />,
        },
      ],
    },

    {
      title: "Mobile & Database",

      icon: <Database size={19} />,

      items: [
        {
          name: "Kotlin",
          icon: <SiKotlin />,
        },

        {
          name: "MySQL",
          icon: <SiMysql />,
        },

        {
          name: "SQL",
          icon: <Database size={17} />,
        },
      ],
    },

    {
      title: "Tools & Design",

      icon: <FaFigma size={18} />,

      items: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },

        {
          name: "Figma",
          icon: <FaFigma />,
        },
      ],
    },
  ];

  return (
    <main className="portfolio">

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="navbar">

        <div className="container nav-inner">

          {/* LOGO */}

          <a
            href="#home"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo-mark">
              IY
            </span>

            <span className="logo-name">
              Isaac Yeremia Nugroho
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-nav">

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#experience">
              Experience
            </a>

          </nav>

          {/* CONTACT BUTTON */}

          <a
            href="#contact"
            className="nav-contact"
          >
            Let&apos;s talk
          </a>

          {/* MOBILE MENU */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
          >

            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}

          </button>

        </div>

        {/* MOBILE NAVIGATION */}

        {menuOpen && (
          <div className="mobile-nav">

            <a
              href="#about"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contact
            </a>

          </div>
        )}

      </header>

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="container hero-content">

          <div className="hero-intro">

            <span className="eyebrow">
              Computer Science Graduate
            </span>

            <h1>
              I build websites
              <br />
              <span>
                that feel simple.
              </span>
            </h1>

            <p className="hero-description">
              I&apos;m Isaac, a Computer Science
              graduate focused on web development,
              frontend interfaces, and practical
              digital products.
            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="primary-button"
              >
                See my work

                <ArrowUpRight
                  size={17}
                />
              </a>

              <a
                href="/Isaac_Yeremia_Nugroho_CV_ID.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-button"
              >
                View CV
              </a>

            </div>

          </div>

          <div className="hero-side">

            <div className="hero-line" />

            <p>
              Based in Indonesia.
              <br />
              Available for new opportunities.
            </p>

            <div className="hero-socials">

              <a
                href="https://github.com/isaacyeremia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          ABOUT
      ================================================== */}

      <section
        id="about"
        className="section"
      >

        <div className="container">

          <SectionHeading
            number="01"
            title="A little about me"
          />

          <div className="about-grid">

            <div className="about-lead">

              <p>
                I enjoy turning ideas into useful
                and easy-to-use digital experiences.
              </p>

            </div>

            <div className="about-copy">

              <p>
                I am a Computer Science graduate
                from Universitas Katolik Darma
                Cendika with an interest in web
                development and software development.
              </p>

              <p>
                During my studies, I worked on
                several projects ranging from
                healthcare information systems
                and Android applications to modern
                marketing websites.
              </p>

              <p>
                I&apos;m comfortable learning new
                technologies, working with others,
                and adapting to different project
                requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          SKILLS
      ================================================== */}

      <section
        id="skills"
        className="section section-soft"
      >

        <div className="container">

          <SectionHeading
            number="02"
            title="What I work with"
          />

          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-group"
                key={skill.title}
              >

                <div className="skill-heading">

                  <span>
                    {skill.icon}
                  </span>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <div className="skill-list">

                  {skill.items.map(
                    (item) => (

                      <div
                        className="skill-item"
                        key={item.name}
                      >

                        <span className="skill-icon">
                          {item.icon}
                        </span>

                        <span>
                          {item.name}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section
        id="projects"
        className="section"
      >

        <div className="container">

          <SectionHeading
            number="03"
            title="Selected work"
          />

          <div className="projects-list">

            {projects.map((project) => {

              const isOpen =
                openProject === project.id;

              return (

                <article
                  className={`project ${
                    isOpen
                      ? "project-open"
                      : ""
                  }`}
                  key={project.id}
                >

                  <button
                    type="button"
                    className="project-header"
                    onClick={() =>
                      setOpenProject(
                        isOpen
                          ? null
                          : project.id
                      )
                    }
                    aria-expanded={isOpen}
                  >

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-main">

                      <span className="project-title">
                        {project.title}
                      </span>

                      <span className="project-type">
                        {project.type}
                      </span>

                    </span>

                    <span className="project-year">
                      {project.year}
                    </span>

                    <span className="project-arrow">

                      <ChevronDown
                        size={19}
                        className={
                          isOpen
                            ? "rotate-arrow"
                            : ""
                        }
                      />

                    </span>

                  </button>

                  <div
                    className={`project-details ${
                      isOpen
                        ? "details-open"
                        : ""
                    }`}
                  >

                    <div className="project-details-inner">

                      {/* PROJECT TEXT */}

                      <div>

                        <p>
                          {project.description}
                        </p>

                        <div className="project-tags">

                          {project.tech.map(
                            (tech) => (

                              <span
                                key={tech}
                              >
                                {tech}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                      {/* PROJECT EXTRA */}

                      <div className="project-extra">

                        <p>
                          {project.details}
                        </p>

                        <div className="project-links">

                          {project.github &&
                            project.github !== "#" && (
                              <a
                                href={
                                  project.github
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub
                                  size={16}
                                />

                                GitHub
                              </a>
                            )}

                          {project.demo &&
                            project.demo !== "#" && (
                              <a
                                href={
                                  project.demo
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight
                                  size={16}
                                />

                                Live project
                              </a>
                            )}

                        </div>

                      </div>

                    </div>

                    {/* ==================================================
                        PROJECT SHOWCASE
                    ================================================== */}

                    <div className="project-showcase">

                      <img
                        src={project.image}
                        alt={`${project.title} showcase`}
                      />

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>

      {/* ==================================================
          EXPERIENCE
      ================================================== */}

      <section
        id="experience"
        className="section section-soft"
      >

        <div className="container">

          <SectionHeading
            number="04"
            title="Experience"
          />

          <div className="experience-list">

            {experiences.map(
              (experience) => (

                <div
                  className="experience-row"
                  key={experience.company}
                >

                  <div className="experience-year">
                    {experience.year}
                  </div>

                  <div className="experience-content">

                    <h3>
                      {experience.role}
                    </h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                    <p className="experience-description">
                      {
                        experience.description
                      }
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ==================================================
          CONTACT
      ================================================== */}

      <section
        id="contact"
        className="contact"
      >

        <div className="container contact-inner">

          <div>

            <span className="eyebrow dark-eyebrow">
              Get in touch
            </span>

            <h2>
              Have a project
              <br />
              in mind?
            </h2>

            <a
              href="mailto:isaacyeremia@gmail.com"
              className="email-link"
            >

              isaacyeremia@gmail.com

              <ArrowUpRight
                size={20}
              />

            </a>

          </div>

          <div className="contact-right">

            <p>
              I&apos;m open to opportunities,
              collaborations, and interesting
              projects.
            </p>

            <div className="contact-socials">

              <a
                href="https://github.com/isaacyeremia"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaGithub
                  size={18}
                />

                GitHub

              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaLinkedinIn
                  size={18}
                />

                LinkedIn

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="footer">

        <div className="container footer-inner">

          <span>
            ©{" "}
            {new Date().getFullYear()}{" "}
            Isaac Yeremia Nugroho
          </span>

          <span>
            Designed & built with Next.js
          </span>

        </div>

      </footer>

    </main>
  );
}

/*
 * ==================================================
 * SECTION HEADING
 * ==================================================
 */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="section-heading">

      <span>
        {number}
      </span>

      <h2>
        {title}
      </h2>

    </div>
  );
}