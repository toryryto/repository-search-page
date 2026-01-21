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
        <section className={styles.wrapper}>
          <h2 className={styles.title}>
            문제가 발생했습니다.{'\n'}아래의 더보기 버튼을 눌러 다시
            시도해주세요.
          </h2>

          <p>{this.state.error?.message}</p>

          <button onClick={this.handleRetry} className={styles.button}>
            다시 시도하기
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryWithRetry;
