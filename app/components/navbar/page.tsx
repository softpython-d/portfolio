"use client";

import { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const menus = useMemo(
    () => ["Home", "About", "Projects", "Contact"],
    []
  );

  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus
        .map((menu) => document.getElementById(menu.toLowerCase()))
        .filter((section): section is HTMLElement => section !== null);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          current = section.id;
        }
      });

      setCurrentPage(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menus]);


  const handleMenuClick = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  useGSAP(() => {
    gsap.from(`.${style.branding} .${style.brandinginfo}`, {
      opacity: 0,
      y: "-200%",
      duration: 0.4,
      ease: "power1.inOut",
    })
     gsap.fromTo(
        `.${style.menubox} .${style.menu}`,
        {
            y: 400,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
        }
    );
  })



  return (
    <nav className={style.navbar}>
      <div className={`${style.branding} kaushanScript`}>
        <div className={style.brandinginfo}>
          Portfolio 
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={style.menubox}>
        {menus.map((val) => {
          const page = val.toLowerCase();

          return (
            <Link
              href={`#${page}`}
              key={page}
              className={`${style.menu} ${currentPage === page ? style.active : ""
                }`}
              onClick={() => handleMenuClick(page)}
            >
              {val}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={style.menuButton}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${style.mobileMenu} ${menuOpen ? style.mobileMenuOpen : ""
          }`}
      >
        {menus.map((val) => {
          const page = val.toLowerCase();

          return (
            <Link
              href={`#${page}`}
              key={page}
              className={`${style.mobileMenuItem} ${currentPage === page ? style.active : ""
                }`}
              onClick={() => handleMenuClick(page)}
            >
              {val}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;