// IMPORTS
  // -Modules
    import Head from 'next/head'
    import dynamic from 'next/dynamic'
  // -Components
    const NosotrosDesktop = dynamic( () => import('../components/nosotros/nosotrosDesktop/NosotrosDesktop'), { ssr: false } )
    const NosotrosMobile = dynamic( () => import('../components/nosotros/nosotrosMobile/NosotrosMobile'), { ssr: false } )
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Styles
    import { breakpoints } from '../styles/customStyles/globalStyles'
//

// STYLES

//

// MAIN COMPONENT
  export default function Nosotros() {

    const windowWidth = useWidth()

    return (
      <>
        <Head>
          <title>Ajuar · Nosotros</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/cako/Cako-Regular.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/cako/Cako-RegularItalic.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl-Light.eot" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/suisse/SuisseIntl.eot" as="font" crossOrigin="" />
        </Head>

        { windowWidth < breakpoints.mobileDesignHook ? <NosotrosMobile /> : <NosotrosDesktop /> }

      </>
    )
  }
// 
