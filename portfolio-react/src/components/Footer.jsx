export default function Footer() {
  return (
    <footer className="bg-surface border-t mt-12">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-muted">
        <div className="text-primary">
          © {new Date().getFullYear()} Patricia Puaso. All rights reserved.
        </div>
        <div className="mt-3">
          <a
            href="https://github.com/patriciapuaso"
            className="mx-3 text-muted hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/patriciapuaso"
            className="mx-3 text-muted hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@patriciapuaso.com"
            className="mx-3 text-muted hover:text-primary"
          >
            Email
          </a>
          <a
            href="tel:+1234567890"
            className="mx-3 text-muted hover:text-primary"
          >
            +1 234 567 890
          </a>
        </div>
      </div>
    </footer>
  );
}
