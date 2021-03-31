// IMPORTS
  // -Modules
    import Head from 'next/head'
  // -Components
    import Menu from '../components/menu/Menu'
  // -Styles
    import '../styles/globals.css'
  // -Contexts
    import MenuContextProvider from '../contexts/menuContext'
// 

//  MAIN COMPONENT
  function MyApp({ Component, pageProps }) {

    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/cako/Cako-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="preload" href="/fonts/cako/Cako-RegularItalic.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl-Light.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl-RegularItalic.woff2" as="font" type="font/woff2" crossOrigin="" />
        </Head>
        
        <MenuContextProvider>
          <Menu />
          <Component {...pageProps} />
        </MenuContextProvider>
      </>
    )
  }
  export default MyApp
// 