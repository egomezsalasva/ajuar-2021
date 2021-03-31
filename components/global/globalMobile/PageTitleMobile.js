// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Styles
  import {brandingColors, brandingFonts} from '../../../styles/customStyles/brandingStyles'
// 


// STYLES
  const PageTitleStyle = styled.div`
    position: fixed;
    bottom: 10px;
    left: 20px;
    font-family: ${brandingFonts.display};
    font-size: 47px;
    color: ${brandingColors.light};
    letter-spacing: -0.4px;
  `
// 


// MAIN COMPONENTS
  export default function PageTitleMobile({children}) {
    return (
      <PageTitleStyle>{children}</PageTitleStyle>
    )
  }
// 
