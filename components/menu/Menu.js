// IMPORTS
    // - Modules
    import Head from 'next/head'
    import styled from 'styled-components'
    import { useRouter } from 'next/router'
    import { useContext, useEffect } from 'react'
    import gsap from 'gsap'
    // - Components
    import Logo from '../global/Logo'
    import MenuList from './MenuList'
    // - Styles
    import { brandingColors } from '../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../styles/customStyles/globalStyles'
    import { pxToVW, zIndexes } from '../../styles/customStyles/globalStyles'
    // -Context
    import { MenuContext } from '../../contexts/menuContext'
// 


// STYLES
    const MenuContainer = styled.div`
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100vw;
        height: 100vh;
        transform: translateY(-100%);
        z-index: ${zIndexes.menu};
        background: ${brandingColors.dark};
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; 
    `
    const Smiley = styled.img`
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: ${breakpoints.mobileDesign}){
            bottom: ${pxToVW.vwM20px};
        } 
    `   
//


// MAIN COMPONENT
    export default function Menu() {

        const { menuActive, setMenuActive, menuContainerRef, dur, del } = useContext(MenuContext)

        
        //Reset Menu State on Router Change
            const router = useRouter()
            useEffect(() => {
                router.events.on('routeChangeComplete', () => {
                    gsap.to(menuContainerRef.current, { duration: dur, yPercent: 0, ease: "power1.in", delay: del  })
                    setMenuActive(false)
                })
            }, [])
        //


        return (
            <>
                <Head>
                    <link rel="preload" href="/fonts/cako/Cako-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/cako/Cako-RegularItalic.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/suisse/SuisseIntl-Light.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/suisse/SuisseIntl.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/suisse/SuisseIntl-RegularItalic.woff2" as="font" type="font/woff2" crossOrigin="" />
                </Head>
                <MenuContainer active={menuActive} ref={menuContainerRef}>
                    <Logo/>
                    <MenuList/>
                    <Smiley src="/assets/smiley.svg" alt="smiley ajuar"/>
                </MenuContainer>
            </>
        )
    }
//