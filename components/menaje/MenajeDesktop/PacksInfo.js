// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Component
    import SplitRight from '../../global/globalDesktop/SplitRight'
  // -Styles
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
    import { breakpoints, pxToVW } from '../../../styles/customStyles/globalStyles'
//


// STYLES
  const TextDefault = styled.div`
    font-family: ${brandingFonts.textRegular};
    font-size: 2.08333vw;
    line-height: 1.25;
    color: ${brandingColors.light};
    margin-top: ${pxToVW.vw30px};
    padding: 0 ${pxToVW.vw40px} 0 ${pxToVW.vw30px};
    @media (max-width: ${breakpoints.laptopDesign}){
      font-size: 2rem;
      margin-top: 30px;
      padding: 0 40px 0 30px;
    }
  `
//


// MAIN COMPONENT
  export default function PacksInfo() {
    return (
        <SplitRight rightBackgroundColor={brandingColors.dark}>
          <TextDefault>Estos son los 3 menajes digitales que podemos ofrecerte</TextDefault>
        </SplitRight>
    )
  }
//
