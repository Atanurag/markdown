import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EmptyState from "./EmptyState";
import MarkdownRenderer from "./MarkdownRenderer";
import ErrorBoundary from "./ErrorBoundary";
function MarkdownPreview({ markdown, previewRef }) {

    return (

        <section className="rounded-2xl bg-white shadow-lg overflow-hidden">

            <div className="border-b px-6 py-4">

                <h2 className="text-xl font-semibold">
                    Preview
                </h2>

            </div>

            <div className="p-8 min-h-[600px] overflow-auto">

                {!markdown ? (

                    <EmptyState />

                ) : (

                    <article  ref={previewRef} className="markdown-body" >

<ErrorBoundary>
    <MarkdownRenderer markdown={markdown} />
</ErrorBoundary>
</article>

                )}

            </div>

        </section>

    );

}

export default MarkdownPreview;