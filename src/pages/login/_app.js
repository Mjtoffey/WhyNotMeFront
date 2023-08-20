import { GlobalStateProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
  return ;
}
export default MyApp;