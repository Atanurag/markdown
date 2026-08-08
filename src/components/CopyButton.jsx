import { useState } from "react";
import { copyRichContent } from "../utils/clipboard";

function CopyButton({ markdown, previewRef }) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {

        if (!markdown) return;

        try {

            await copyRichContent(markdown,previewRef);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);

        }catch (error) {
             console.error(error);
             alert("Unable to copy content. Please try again.");
}

    };

    return (

        <button

            onClick={handleCopy}
            disabled={!markdown}  
            aria-label="Copy rendered markdown"
            className="
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-white
                font-medium
                transition
                hover:bg-blue-700
                disabled:bg-slate-300
                disabled:cursor-not-allowed
                focus:outline-none
                focus:ring-4
                focus:ring-blue-300
            "
        >

            {copied
                ? "✅ Copied!"
                : "📋 Copy Rich Content"}

        </button>

    );

}

export default CopyButton;