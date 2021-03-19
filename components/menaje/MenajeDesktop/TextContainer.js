// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Styles
    import { brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
  const TextContainerStyle = styled.div`
    padding: 30px 30px 0;
    text-align: center;
    font-family: ${brandingFonts.textRegular};

    .title{
        font-size: 1.1rem;
        line-height: 1;
    }
    .content{
      padding-top: 20px;
      /* font-size: 2rem; */
      font-size: 1.6rem;
      /* line-height: 1.25; */
      line-height: 1.2;
    }
    .contentLine{
      margin-bottom: 10px;
      span{
        font-size: 1.4rem;
      }
    }

    .postData{
      margin-top: 30px;
      font-size: 1rem;
      line-height: 1;
      margin-bottom: 90px;
    }
  `
//


// MAIN COMPONENT
  export default function TextContainer({children}) {
    return (
        <TextContainerStyle>{children}</TextContainerStyle>
    )
  }
//
