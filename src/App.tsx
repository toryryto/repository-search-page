import { Suspense } from 'react';
import { useSearchParams } from 'react-router';
import { Layout } from './components/layout/layout';
import { RepositoryList } from './features/search/components/repository-list/RepositoryList';
import { SearchForm } from './features/search/components/search-form/SearchForm';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const handleSearch = (value: string) => {
    setSearchParams({ search: value });
  };

  return (
    <Layout>
      <SearchForm onSearch={handleSearch} initialQuery={query} />

      {query && (
        <Suspense fallback={<p>로딩 중...</p>}>
          <RepositoryList query={query} />
        </Suspense>
      )}
    </Layout>
  );
}

export default App;
