import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';
import { errorBoundaryStyles as styles } from './ErrorBoundaryWithRetry.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryWithRetry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section className={styles.wrapper} aria-label="Error notification">
          <h2 className={styles.title}>
            Something went wrong.{'\n'}Please click the button below to try
            again.
          </h2>

          <p aria-live="polite">{this.state.error?.message}</p>

          <button
            onClick={this.handleRetry}
            className={styles.button}
            aria-label="Reload page to try again"
          >
            Try Again
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryWithRetry;
