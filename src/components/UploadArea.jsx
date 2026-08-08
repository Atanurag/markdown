import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function UploadArea({ appState, setAppState }) {
  const onDrop = useCallback(
  (acceptedFiles, fileRejections) => {

    if (fileRejections.length > 0) {
      setAppState(prev => ({
        ...prev,
        markdown: "",
        fileName: "",
        loading: false,
        error: "Please upload a valid Markdown (.md or .markdown) file."
      }));
      return;
    }

    const file = acceptedFiles[0];

    if (!file) return;

    const fileName = file.name.toLowerCase();

    if (
      !fileName.endsWith(".md") &&
      !fileName.endsWith(".markdown")
    ) {
      setAppState(prev => ({
        ...prev,
        markdown: "",
        fileName: "",
        loading: false,
        error: "Only .md and .markdown files are supported."
      }));
      return;
    }

    // Validate empty file
    if (file.size === 0) {
      setAppState(prev => ({
        ...prev,
        markdown: "",
        fileName: "",
        loading: false,
        error: "The selected file is empty."
      }));
      return;
    }

    // Validate file size (2 MB)
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (file.size > MAX_FILE_SIZE) {
      setAppState(prev => ({
        ...prev,
        markdown: "",
        fileName: "",
        loading: false,
        error: "File size must be less than 2 MB."
      }));
      return;
    }

    setAppState(prev => ({
      ...prev,
      loading: true,
      error: ""
    }));

    const reader = new FileReader();

    reader.onload = (event) => {
      setAppState(prev => ({
        ...prev,
        markdown: event.target.result,
        fileName: file.name,
        loading: false,
        error: ""
      }));
    };

    reader.onerror = () => {
      setAppState(prev => ({
        ...prev,
        markdown: "",
        fileName: "",
        loading: false,
        error: "Unable to read the selected file."
      }));
    };

    reader.readAsText(file);

  },
  [setAppState]
);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
  multiple: false,

  maxFiles: 1,

  accept: {
    "text/markdown": [".md", ".markdown"],
    "text/plain": [".md", ".markdown"]
  },

  onDrop
});

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg">

      <h2 className="text-xl font-semibold">
        Upload Markdown
      </h2>

      <p className="mt-2 text-slate-500">
        Upload a single markdown (.md) file.
      </p>

      <div
    {...getRootProps()}
    role="button"
    tabIndex={0}
    aria-label="Drag and drop markdown file"
        className={`
          mt-6
          rounded-xl
          border-2
          border-dashed
          p-14
          text-center
          cursor-pointer
          transition-all
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
          }
        `}
      >
<input
    {...getInputProps()}
    aria-label="Upload markdown file"
/>
        <div className="text-6xl">
          📄
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          {isDragActive
            ? "Drop the markdown file here"
            : "Drag & Drop your markdown file"}
        </h3>

        <p className="mt-2 text-slate-500">
          or click to browse
        </p>

      </div>

      {/* Loading */}

      {appState.loading && (
        <div className="mt-5 rounded-lg bg-blue-50 p-3 text-blue-700">
          Reading markdown...
        </div>
      )}

      {/* Error */}

      {appState.error && (
        <div className="mt-5 rounded-lg bg-red-50 p-3 text-red-700">
          {appState.error}
        </div>
      )}

      {/* Uploaded File */}

      {appState.fileName && !appState.loading && (
        <div className="mt-5 rounded-lg border bg-green-50 p-4">

          <p className="font-semibold text-green-700">
            ✅ Uploaded Successfully
          </p>

          <p className="mt-1 text-sm text-slate-600">
            {appState.fileName}
          </p>

        </div>
      )}
    </section>
  );
}

export default UploadArea;