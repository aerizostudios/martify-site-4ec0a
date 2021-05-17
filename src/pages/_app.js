// import App from 'next/app'
import { useEffect } from 'react';
import Router from 'next/router';
import '../sass/main.scss';


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        if (window.onNextjsAppDidMount) {
            window.onNextjsAppDidMount();
        }

        if (window.onNextjsRouteChangeComplete) {
            window.onNextjsRouteChangeComplete();
        }

        const handleRouteChangeStart = () => {
            if (window.onNextjsRouteChangeStart) {
                window.onNextjsRouteChangeStart();
            }
        }

        const handleRouteChangeComplete = () => {
            if (window.onNextjsRouteChangeComplete) {
                window.onNextjsRouteChangeComplete();
            }
        }

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    return <>   <Head>
        <meta name="robots" content="noindex" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Martify</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/logo16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/logo32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo192.png"></link>
        <meta name=<Component {...pageProps} /></>;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
