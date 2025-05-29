import { ReactNode } from "react";

type FooterProps = {
  children?: ReactNode;
};

export default function Footer({ children }: FooterProps) {
  return (
    <footer className="w-full bg-[var(--background)] py-6 px-8 flex justify-between items-center text-white shadow-inner">
      <div className="flex items-center">
        <img src="/michigan.svg" alt="University of Michigan logo" className="w-8 h-8" />
      </div>
      <div className="flex gap-5 items-center">
        <a href="https://github.com/isdiemer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/git.svg" alt="GitHub" className="w-6 h-6 hover:opacity-70 transition-opacity" />
        </a>
        <a href="https://linkedin.com/in/isaac-diemer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-70 transition-opacity" />
        </a>
        <a href="mailto:isdiemer@umich.edu" aria-label="Email">
          <img src="/gmail.svg" alt="Email" className="w-6 h-6 hover:opacity-70 transition-opacity" />
        </a>
      </div>
    {children && <div>{children}</div>}
    </footer>
  );
}