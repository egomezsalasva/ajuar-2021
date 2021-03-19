// IMPORTS
  // -Modules
  import styled from 'styled-components'
// -Styles
  import {brandingColors, brandingFonts} from '../../styles/customStyles/brandingStyles'
  import { breakpoints } from '../../styles/customStyles/globalStyles'
  import { cursors, zIndexes } from '../../styles/customStyles/globalStyles'
// -Custom Hook

//


// STYLES
const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: ${zIndexes.menuButton};
  font-family: ${brandingFonts.textRegular};
  font-size: 2rem;
  font-size: 7.25vw;
  letter-spacing: 0.5px;
  line-height: 0.95;
  cursor: ${cursors.eyePointer};
  color: ${brandingColors.light};
`
//


//  MAIN COMPONENT
const MenuButton = ({toggleMenuActive, menuActive, clickAnimation }) => {  
 
    
  const clickHandlers = () => {
    toggleMenuActive()
    clickAnimation()
  }

  return (
        <Button onClick={clickHandlers}  >
          {menuActive ? "(Cerrar)" : "Menu"}
        </Button>
  )
}
export default MenuButton
//