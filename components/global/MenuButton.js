// IMPORTS
  // -Modules
    import styled from 'styled-components'
    import { useRouter } from 'next/router'
  // -Styles
    import {brandingColors, brandingFonts} from '../../styles/customStyles/brandingStyles'
    import { cursors, zIndexes, breakpoints } from '../../styles/customStyles/globalStyles'
    import { useEffect } from 'react'
  // -Custom Hook
    import { useWidth } from '../../hooks/useWidth'
//


// STYLES
  const Button = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: ${zIndexes.menuButton};
    font-family: ${brandingFonts.textRegular};
    font-size: 3.5rem;
    letter-spacing: 0.5px;
    line-height: 0.95;
    cursor: ${cursors.eyePointer};
    @media (max-width: ${breakpoints.mobileDesign}) {
      font-size: 2rem;
      font-size: 7.25vw;
    }
  `
//


//  MAIN COMPONENT
  const MenuButton = ({toggleMenuActive, menuActive, clickAnimation }) => {  
   
    // Menu button conditional Black or White
      const router = useRouter()
      const windowWidth = useWidth()
      
      const menuColorConditional = () => {
        if(router.pathname === '/contacto' && menuActive === false ){
          return brandingColors.dark
        } else if (router.pathname === '/menaje/mensual' && menuActive === false ) {
          return brandingColors.dark
        } else if (router.pathname === '/menaje/esporadico' && menuActive === false ) {
          return brandingColors.dark
        } else if (router.pathname === '/menaje/starter-pack' && menuActive === false ) {
          return brandingColors.dark
        } else {
          return brandingColors.light
        }
      }

      useEffect( () => {
        menuColorConditional()
      }, [])
      
    // 

    const clickHandlers = () => {
      toggleMenuActive()
      clickAnimation()
    }

    return (
          <Button onClick={clickHandlers} style={{color: menuColorConditional()}} >
            {menuActive ? "(Cerrar)" : "Menu"}
          </Button>
    )
  }
  export default MenuButton
//