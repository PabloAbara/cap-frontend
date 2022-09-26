import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <OpenAPIProvider definition="http://localhost:3001/api-docs/index.html">
    <Component {...pageProps} />
  </OpenAPIProvider>);
}

export default MyApp;
