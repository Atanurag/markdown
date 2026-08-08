import MarkdownRenderer from "./MarkdownRenderer";
import EmptyState from "./EmptyState";
import ErrorBoundary from "./ErrorBoundary";

function MarkdownPreview({ markdown, previewRef }) {
  return (
    <section
      className="
        flex
        h-[500px]
        min-h-0
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-lg
        sm:h-[600px]
      "
    >

      {/* Preview Header */}
      <div className="shrink-0 border-b px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Preview
        </h2>
      </div>

      {/* ONLY THIS AREA SCROLLS */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">

        {!markdown ? (
          <div className="p-8">
            <EmptyState />
          </div>
        ) : (
          <ErrorBoundary>
            <article
              ref={previewRef}
              className="markdown-body !m-0 !max-w-none !p-8"
            >
              <MarkdownRenderer markdown={markdown} />
            </article>
          </ErrorBoundary>
        )}

      </div>

    </section>
  );
}

export default MarkdownPreview;