// IMPORTS
  // -Modules
    import { useEffect, useRef, useState } from 'react'
    import { useRouter } from 'next/router'
    import gsap from 'gsap'
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
        <MenuContextProvider>
          <Menu />
          <Component {...pageProps} />
        </MenuContextProvider>
      </>
    )
  }
  export default MyApp
// 