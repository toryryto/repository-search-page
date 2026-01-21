import { useEffect, useRef } from 'react';
type InfiniteScrollOptions = {
  hasNext: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
  threshold?: number;
};

export function useInfiniteScroll({
  hasNext,
  isLoading,
  onLoadMore,
  threshold = 0.1,
}: InfiniteScrollOptions) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || !hasNext || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();

          return;
        }
      },
      { threshold },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasNext, isLoading, onLoadMore, threshold]);

  return {
    targetRef,
  };
}
