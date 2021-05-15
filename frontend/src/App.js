import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import { Router } from './routes/router';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}
