// IMPORTS
  // -Modules
    import Head from 'next/head'
  // -Components
    import Menu from '../components/menu/Menu'
  // -Styles
    import '../styles/globals.css'
    import { breakpoints } from '../styles/customStyles/globalStyles'
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Contexts
    import MenuContextProvider from '../contexts/menuContext'
// 

//  MAIN COMPONENT
  function MyApp({ Component, pageProps }) {

    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/cako/Cako-Regular.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/cako/Cako-RegularItalic.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl-Light.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl-RegularItalic.eot" as="font" crossOrigin="" />
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