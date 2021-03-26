// IMPORTS
  // -Modules
    import styled from 'styled-components'
    import { useContext } from 'react'
    import gsap from 'gsap'
  // -Styles
    import {brandingColors, brandingFonts} from '../../styles/customStyles/brandingStyles'
    import { cursors, zIndexes, breakpoints, pxToPercentage } from '../../styles/customStyles/globalStyles'
  // -Custom Hook

  // -Context
    import {MenuContext} from '../../contexts/menuContext'
//


// STYLES
  const Button = styled.div`
    position: fixed;
    bottom: ${pxToPercentage.vw20px};
    right: ${pxToPercentage.vw30px};
    z-index: ${zIndexes.menuButton};
    font-family: ${brandingFonts.textRegular};
    font-size: 3.61vw;
    letter-spacing: 0.5px;
    line-height: 0.95;
    cursor: ${cursors.eyePointer};
    color: ${props => props.inputColor || brandingColors.light};
    @media (max-width: ${breakpoints.laptopDesign}) {
      font-size: 3.5rem;
      bottom: 20px;
      right: 30px;
    }
    @media (max-width: ${breakpoints.mobileDesign}) {
      font-size: 2rem;
      font-size: 7.25vw;
    }
  `
//


//  MAIN COMPONENT
  const MenuButton = ({ inputColorProp }) => {  

    const { menuActive, toggleMenuActive, menuContainerRef, dur, del } = useContext(MenuContext)
  

    const clickAnimation = () => {
      if(menuActive === false){
          gsap.to(menuContainerRef.current, { duration: dur, yPercent: 100,  ease: "power1.out" })
      } else {
          gsap.to(menuContainerRef.current, { duration: dur, yPercent: 0, ease: "power1.in", delay: del  })
      }
  }

    const clickHandlers = () => {
      toggleMenuActive()
      clickAnimation()
    }

    return (
          <Button onClick={clickHandlers}  inputColor={inputColorProp}>
            {menuActive ? "(Cerrar)" : "Menu"}
          </Button>
    )
  }
  export default MenuButton
//