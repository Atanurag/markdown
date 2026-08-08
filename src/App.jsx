import { useState,useRef } from "react";
import Header from "./components/Header";
import UploadArea from "./components/UploadArea";
import MarkdownPreview from "./components/MarkdownPreview";
import CopyButton from "./components/CopyButton";

function App() {

  const [appState, setAppState] = useState({
    markdown: "",
    fileName: "",
    loading: false,
    error: ""
  });

  const previewRef = useRef(null);

  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="mx-auto max-w-6xl">

        <Header />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <UploadArea
            appState={appState}
            setAppState={setAppState}
          />

          <MarkdownPreview
            markdown={appState.markdown}
            previewRef={previewRef}

          />

        </div>

        <div className="mt-6 flex justify-end">
          <CopyButton
            markdown={appState.markdown}
            previewRef={previewRef}

          />
        </div>

      </div>

    </main>
  );
}

export default App;