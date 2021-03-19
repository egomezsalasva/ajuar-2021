// IMPORTS
  // -Modules
  import Head from 'next/head'
  // -Components
    import MenajeDesktop from '../components/menaje/MenajeDesktop/index'
    import MenajeMobile from '../components/menaje/MenajeMobile/index'
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Styles
    import { breakpoints } from '../styles/customStyles/globalStyles'
//


// MAIN COMPONENT
  export default function Menaje() {

    const windowWidth = useWidth()

    return (
      <>
        <Head>
          <title>Ajuar · Menaje</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        { windowWidth < breakpoints.tabletDesignHook ? <MenajeMobile /> : <MenajeDesktop /> }

      </>
    )
  }
//
