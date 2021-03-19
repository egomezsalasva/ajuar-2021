// IMPORTS
  // -Modules
  import { useEffect } from 'react'
  import styled from 'styled-components'
  // -Styles
  import {brandingColors, brandingFonts} from '../../../styles/customStyles/brandingStyles'
  import { breakpoints } from '../../../styles/customStyles/globalStyles'
  import { cursors, zIndexes } from '../../../styles/customStyles/globalStyles'
//


// STYLES
  const Button = styled.div`
    display: none;
    @media (max-width: ${breakpoints.mobileDesign}){
        color: ${brandingColors.light};
        display: block;
        position: fixed;
        bottom: 20px;
        left: 30px;
        font-family: ${brandingFonts.textRegular};
        font-size: 2rem;
        font-size: 7.25vw;
        letter-spacing: 0.5px;
        line-height: 0.95;
        cursor: ${cursors.eyePointer};
    }
  `
//


//  MAIN COMPONENT
  export default function IntagramButton({menuActive}) { 

    // Check if menu is active to remove button
      // const checkIfMenuIsActive = () => {
      //   if(menuActive === true){
      //     return "none"
      //   } else {
      //     return "block"
      //   }
      // }
      // useEffect( () => {
      //   checkIfMenuIsActive()
      // }, [menuActive])
    // 

    return (
      <a href="https://www.instagram.com/ajuarestudio/" target="_blank">
        <Button>Instagram</Button>
      </a>
    )
  }
//