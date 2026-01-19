import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-serif text-xl tracking-tight">
            Gafia Graphics
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="#work"
                  className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-primary-foreground/70">
            © {currentYear} Gafia Graphics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
