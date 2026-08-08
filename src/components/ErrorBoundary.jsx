import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Markdown rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">

          <h3 className="text-lg font-semibold text-red-700">
            Unable to render markdown
          </h3>

          <p className="mt-2 text-sm text-red-600">
            The uploaded markdown contains content that could not be rendered.
          </p>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;