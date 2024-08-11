import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return this.props.fallback;
      // <div>
      //   <h1>An error occurred</h1>
      //   <p>Error: {error.message}</p>
      //   <p>Stack Trace: {error.stack}</p>
      // </div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
