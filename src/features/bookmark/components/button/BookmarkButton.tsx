import { useState } from 'react';

import { Bookmark } from 'lucide-react';

import { bookmarkButtonStyles as styles } from './BookmarkButton.css';

import { bookMarkUtils } from '@/features/bookmark/utils';


type Props = {
  repositoryId: string;
  repositoryName: string;
};

export function BookmarkButton({ repositoryId, repositoryName }: Props) {
  const [isBookmarked, setIsBookmarked] = useState(() =>
    bookMarkUtils.has(repositoryId),
  );

  const handleToggle = () => {
    const newValue = bookMarkUtils.toggle(repositoryId);
    setIsBookmarked(newValue);
  };

  return (
    <button
      type='button'
      className={`${styles.button} ${isBookmarked ? styles.filled : styles.outline}`}
      onClick={handleToggle}
      aria-label={
        isBookmarked
          ? `${repositoryName} remove bookmark`
          : `${repositoryName} add bookmark`
      }
      aria-pressed={isBookmarked}
    >
      <Bookmark
        size={18}
        fill={isBookmarked ? 'currentColor' : 'none'}
        aria-hidden
      />
    </button>
  );
}
