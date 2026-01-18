const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < MINUTE) {
    return 'just now';
  }

  if (diffInSeconds < HOUR) {
    const minutes = Math.floor(diffInSeconds / MINUTE);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }

  if (diffInSeconds < DAY) {
    const hours = Math.floor(diffInSeconds / HOUR);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }

  if (diffInSeconds < WEEK) {
    const days = Math.floor(diffInSeconds / DAY);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }

  if (diffInSeconds < MONTH) {
    const weeks = Math.floor(diffInSeconds / WEEK);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }

  if (diffInSeconds < YEAR) {
    const months = Math.floor(diffInSeconds / MONTH);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }

  const years = Math.floor(diffInSeconds / YEAR);
  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
}
