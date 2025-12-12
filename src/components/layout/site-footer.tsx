export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{' '}
          <a
            className="link"
            href="https://github.com/Alex-Huaracha"
            target="_blank"
            rel="noopener"
          >
            Alex Huaracha
          </a>
          . The source code is available on{' '}
          <a
            className="link"
            href="https://github.com/Alex-Huaracha/portfolio-ss"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
