import { useState, type ChangeEvent, type FormEvent } from 'react';
import { searchFormStyles as styles } from './SearchForm.css';

type Props = {
  onSearch: (query: string) => void;
  initialQuery?: string;
};

export function SearchForm({ onSearch, initialQuery = '' }: Props) {
  const [input, setInput] = useState(initialQuery);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    onSearch(trimmed);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <search>
      <form className={styles.form} onSubmit={handleSubmit} role='search'>
        <input
          type='search'
          value={input}
          onChange={handleInputChange}
          className={styles.input}
          placeholder='검색어를 입력해주세요.'
        />
        <button type='submit' className={styles.button}>
          <span className={styles.buttonText}>검색</span>
        </button>
      </form>
    </search>
  );
}
