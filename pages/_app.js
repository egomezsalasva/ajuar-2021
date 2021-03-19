// IMPORTS
  // -Modules
    import { useEffect, useRef, useState } from 'react'
    import { useRouter } from 'next/router'
    import gsap from 'gsap'
  // -Components
    import MenuButton from '../components/global/MenuButton'
    import MenuButtonMobile from '../components/global/MenuButtonMobile'
    import Menu from '../components/menu/Menu'
  // -Styles
    import '../styles/globals.css'
    import { breakpoints } from '../styles/customStyles/globalStyles'
  // -Custom Hooks
    import { useWidth } from '../hooks/useWidth'
// 

//  MAIN COMPONENT
  function MyApp({ Component, pageProps }) {

    // Menu Toggle
      const [menuActive, setMenuActive] = useState(false)
      const toggleMenuActive = () => {
        setMenuActive(!menuActive)
      }
    // 

    const dur = 0.7
    const del = 0.1

    //Reset Menu State on Router Change
      const router = useRouter()
      useEffect(() => {
        router.events.on('routeChangeComplete', () => {
          gsap.to(menuContainerRef.current, { duration: dur, yPercent: 0, ease: "power1.in", delay: del  })
          setMenuActive(false)
        })
      }, [])
    //


    let menuContainerRef = useRef()
    const clickAnimation = () => {
      if(menuActive === false){
        gsap.to(menuContainerRef.current, { duration: dur, yPercent: 100,  ease: "power1.out" })
      } else {
        gsap.to(menuContainerRef.current, { duration: dur, yPercent: 0, ease: "power1.in", delay: del  })
      }
    }
    

    const windowWidth = useWidth()


    return (
      <>
        <MenuButton toggleMenuActive={toggleMenuActive} menuActive={menuActive} clickAnimation={clickAnimation} />
        <Menu toggleMenuActive={toggleMenuActive} menuActive={menuActive} forwardRef={menuContainerRef}/>
        <Component {...pageProps} />
      </>
    )
  }
  export default MyApp
// 