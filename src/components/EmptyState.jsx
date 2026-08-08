function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">

      <div className="text-7xl">
        📄
      </div>

      <h3 className="mt-6 text-2xl font-semibold">
        No Markdown Loaded
      </h3>

      <p className="mt-3 max-w-sm text-slate-500">
        Upload a markdown file to see a beautifully rendered preview here.
      </p>

    </div>
  );
}

export default EmptyState;