'use client'
import React from 'react';

interface NavlinkProps {
  href: string;
  sectionId: string;
  children: React.ReactNode; // Esto permite que el componente acepte cualquier tipo de nodo React como children
}

const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  event.preventDefault();
  const section = document.getElementById(sectionId) as HTMLElement;
  if (section) {
    const offset = 110; // Altura del navbar
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Navlink: React.FC<NavlinkProps> = ({ href, sectionId, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:font-semibold border border-transparent hover:border p-5 transition-all duration-300 ease-in-out hover:before:absolute rounded-sm"
      onClick={(e) => scrollToSection(e, sectionId)}
    >
      {children}
    </a>
  );
};

export default Navlink;
