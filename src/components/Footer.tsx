const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          © 2026 NEXUS.dev — All Rights Reserved
        </p>
        <div className="flex gap-6">
          {["Twitter", "LinkedIn", "Dribbble"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
