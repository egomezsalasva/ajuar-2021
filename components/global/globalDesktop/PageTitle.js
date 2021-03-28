// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Styles
  import {brandingColors, brandingFonts} from '../../../styles/customStyles/brandingStyles'
  import { breakpoints } from '../../../styles/customStyles/globalStyles'
  import { pxToVW } from '../../../styles/customStyles/globalStyles'
// 


// STYLES
  const PageTitleStyle = styled.div`
    font-family: ${brandingFonts.display};
    font-size: 7.6vw;
    line-height: 1;
    color: ${brandingColors.light};
    letter-spacing: -0.2px;
    text-align: center;
    margin-top: ${pxToVW.vw20px};
    margin-bottom: 1.04166vw;
    @media (max-width: ${breakpoints.laptopDesign}) {
      font-size: 7.3rem;
      margin-top: 20px;
      margin-bottom: 15px;
    }
  `
// 


// MAIN COMPONENTS
  export default function PageTitle({children}) {
    return (
      <PageTitleStyle>{children}</PageTitleStyle>
    )
  }
// 
