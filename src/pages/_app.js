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

    return <>
    <Head>

<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60902077185beb22b30997a8/1f4pftl4s';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>

    </Head>
    <Component {...pageProps} />
    </>;
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
