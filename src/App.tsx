import './styles/App.css';

import Search from './Search';
import Result from './Result';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Search />
        <Suspense fallback={<div>loading...</div>}>
          <Result />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
