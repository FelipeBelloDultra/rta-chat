// Packages
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Loader } from './components/Loader';

// Resource
import Routes from './routes';

// Styles
import { GlobalStyles } from './styles/GlobalStyles';
import { LoadingContainer } from './styles';
import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded ? (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      ) : (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      )}

      <GlobalStyles />
    </>
  );
}
