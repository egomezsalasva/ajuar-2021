// IMPORTS
  // -Modules
    import Head from 'next/head'
    import dynamic from 'next/dynamic'
  // -Components
    //const ContactoDesktop = dynamic( () => import('../components/contacto/contactoDesktop/ContactoDesktop'), { ssr: false } )
    //const ContactoMobile = dynamic( () => import('../components/contacto/contactoMobile/ContactoMobile'), { ssr: false } )
    import ContactoDesktop from '../components/contacto/contactoDesktop/ContactoDesktop'
    import ContactoMobile from '../components/contacto/contactoMobile/ContactoMobile'
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
  // -Styles
    import { breakpoints } from '../styles/customStyles/globalStyles'
//


// MAIN COMPONENT
  export default function Contacto() {

    const windowWidth = useWidth()

    return (
      <>
        <Head>
          <title>Ajuar · Contacto</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        { windowWidth < breakpoints.tabletDesignHook ? <ContactoMobile /> : <ContactoDesktop /> }
        
      </>
    )
  }
// 