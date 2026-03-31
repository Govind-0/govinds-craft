const Footer = () => (
  <footer className="py-8 px-6 border-t border-border/50">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vaishnavi Rawat. Built with precision.
      </p>
      <p className="text-xs text-muted-foreground">
        Java · Spring Boot · React
      </p>
    </div>
  </footer>
);

export default Footer;
