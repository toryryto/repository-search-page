import { Suspense, useState } from 'react';
import { Layout } from './components/layout/layout';
import { RepositoryList } from './features/repository-list/RepositoryList';
import { SearchForm } from './features/search-form/SearchForm';

function App() {
  const [query, setQuery] = useState('');

  return (
    <Layout>
      <SearchForm onSearch={setQuery} initialQuery={query} />

      {query && (
        <Suspense fallback={<p>로딩 중...</p>}>
          <RepositoryList query={query} />
        </Suspense>
      )}
    </Layout>
  );
}

export default App;
