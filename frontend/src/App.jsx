// Packages
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Resource
import { Router } from './routes/router';

// Components
import { Loader } from './components/Loader';

// Styles
import { GlobalStyles } from './styles/GlobalStyles';
import { LoadingContainer } from './styles';

export function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1300);
  }, []);

  return (
    <>
      {!loaded ? (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}

      <GlobalStyles />
    </>
  );
}
