import { marked } from "marked";

export async function copyRichContent(markdown,previewRef) {
const html = previewRef?.current?.innerHTML || "";
  if (!navigator.clipboard || !window.ClipboardItem) {
    await navigator.clipboard.writeText(markdown);
    return;
  }
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([html], {
          type: "text/html",
        }),
        "text/plain": new Blob([markdown], {
          type: "text/plain",
        }),
        "text/markdown": new Blob([markdown], {
          type: "text/markdown",
        }),
      }),
    ]);

    return;
  } catch (error) {
    console.warn(
      "text/markdown clipboard format is not supported. Falling back..."
    );
  }

  await navigator.clipboard.write([
    new ClipboardItem({
      "text/html": new Blob([html], {
        type: "text/html",
      }),
      "text/plain": new Blob([markdown], {
        type: "text/plain",
      }),
    }),
  ]);
}