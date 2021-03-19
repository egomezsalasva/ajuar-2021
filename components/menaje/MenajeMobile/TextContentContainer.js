// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Components

  // -Styles
  import { brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
  const TextContainerStyle = styled.div`
    margin: 30px auto;
    text-align: center;
    font-family: ${brandingFonts.textRegular};

    .title{
        font-family: ${brandingFonts.textLight};
        font-size: 12px;
        line-height: 1;
        margin-top: 10px;
    }
    .content{
      padding-top: 10px;
      font-size: 18px;
      line-height: 1.25;
    }
  `
//


// MAIN COMPONENT
  export default function TextContentContainer({children}) {
    return (
      <TextContainerStyle>
          {children}
      </TextContainerStyle>
    )
  }
//
