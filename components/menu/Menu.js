// IMPORTS
    // - Modules
    import styled from 'styled-components'
    import { useRouter } from 'next/router'
    import { useContext, useEffect } from 'react'
    import gsap from 'gsap'
    // - Components
    import Logo from '../global/Logo'
    import MenuList from './MenuList'
    // - Styles
    import { brandingColors } from '../../styles/customStyles/brandingStyles'
    import { zIndexes } from '../../styles/customStyles/globalStyles'
    // -Context
    import { MenuContext } from '../../contexts/menuContext'
// 


// STYLES
    const MenuContainer = styled.div`
        //display: ${props => props.active ? "flex" : "none"};
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
            <MenuContainer active={menuActive} ref={menuContainerRef}>
                <Logo/>
                <MenuList/>
            </MenuContainer>
        )
    }
//