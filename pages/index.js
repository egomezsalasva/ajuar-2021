// IMPORTS
  // -Modules
    import Head from 'next/head'
    import dynamic from 'next/dynamic'
  // -Components
    const HomeDesktop = dynamic( () => import('../components/home/HomeDesktop'), { ssr: false } )
    const HomeMobile = dynamic( () => import('../components/home/HomeMobile'), { ssr: false } )
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Styles
    import { breakpoints } from '../styles/customStyles/globalStyles'
//


// MAIN COMPONENT
  export default function Home() {

    const windowWidth = useWidth()

    return (
      <>
        <Head>
          <title>Ajuar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        { windowWidth < breakpoints.mobileDesignHook ? <HomeMobile /> : <HomeDesktop /> }
        
      </>
    )
  }
//
