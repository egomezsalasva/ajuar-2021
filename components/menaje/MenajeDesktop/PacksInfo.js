// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Component
    import SplitRight from '../../global/globalDesktop/SplitRight'
  // -Styles
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
  const TextDefault = styled.div`
    font-family: ${brandingFonts.textRegular};
    font-size: 2rem;
    line-height: 1.25;
    color: ${brandingColors.light};
    margin-top: 30px;
    padding: 0 40px 0 30px;
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
