const BOOKMARK_STORAGE_KEY = 'bookmark_repositories';

function getAll(): Set<string> {
  try {
    const stored = localStorage.getItem(BOOKMARK_STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function save(bookmarks: Set<string>): void {
  localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify([...bookmarks]));
}

function has(id: string): boolean {
  return getAll().has(id);
}

function toggle(id: string): boolean {
  const bookmarks = getAll();
  const isNowBookmarked = !bookmarks.has(id);

  if (isNowBookmarked) {
    bookmarks.add(id);
  } else {
    bookmarks.delete(id);
  }

  save(bookmarks);
  return isNowBookmarked;
}

export const bookMarkUtils = {
  getAll,
  save,
  has,
  toggle,
};
