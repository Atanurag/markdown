import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function MarkdownRenderer({ markdown }) {

    return (

        <ReactMarkdown

            remarkPlugins={[remarkGfm]}

            components={{

                code({ inline, className, children, ...props }) {

                    const match = /language-(\w+)/.exec(className || "");

                    if (!inline) {

                        return (

                            <SyntaxHighlighter

                                style={oneDark}

    language={match ? match[1] : "text"}

                                PreTag="div"

                                customStyle={{
                                    borderRadius: "12px",
                                    fontSize: "14px",
                                    padding: "20px",
                                    overflowX: "auto"
                                }}

                                {...props}

                            >

                                {String(children).replace(/\n$/, "")}

                            </SyntaxHighlighter>

                        );

                    }

                    return (

                        <code
                            className="rounded bg-slate-200 px-1 py-0.5"
                            {...props}
                        >

                            {children}

                        </code>

                    );

                },
                a({ href, children }) {

    return (

        <a

            href={href}

            target="_blank"

            rel="noopener noreferrer"

            className="text-blue-600 underline hover:text-blue-800"

        >

            {children}

        </a>

    );

}
,
                
table({ children }) {

    return (

        <div className="overflow-x-auto">

            <table className="min-w-full">

                {children}

            </table>

        </div>

    );

},
blockquote({ children }) {

    return (

        <blockquote
            className="
                border-l-4
                border-blue-500
                bg-slate-50
                px-4
                py-2
                italic
            "
        >

            {children}

        </blockquote>

    );

}
            }}

        >

            {markdown}

        </ReactMarkdown>

    );

}

export default MarkdownRenderer;