function Header() {
  return (
    <header className="text-center">

      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        Markdown Renderer
      </h1>

      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Upload a GitHub-Flavored Markdown file and render it with
        clean formatting, syntax highlighting, tables,
        and rich clipboard support.
      </p>

    </header>
  );
}

export default Header;