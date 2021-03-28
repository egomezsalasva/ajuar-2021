// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Styles
    import { brandingFonts } from '../../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../../styles/customStyles/globalStyles'
    import { pxToVW } from '../../../styles/customStyles/globalStyles'
//


// STYLES
  const TextContainerStyle = styled.div`
    padding: ${pxToVW.vw30px} ${pxToVW.vw30px} 0;
    text-align: center;
    font-family: ${brandingFonts.textRegular};
    @media (max-width: ${breakpoints.laptopDesign}){
      padding: 30px 30px 0;
    }

    .title{
      font-size: 1.1vw;
      line-height: 1;
      @media (max-width: ${breakpoints.laptopDesign}){
        font-size: 1.1rem;
      }
    }
    .content{
      padding-top: ${pxToVW.vw20px};
      /* original design => font-size: 2rem; */
      font-size: 1.6666vw;
      /* original design => line-height: 1.2; */
      line-height: 1.2;
      @media (max-width: ${breakpoints.laptopDesign}){
        padding-top: 20px;
        font-size: 1.6rem;
      }
    }
    .contentLine{
      margin-bottom: ${pxToVW.vw10px};
      @media (max-width: ${breakpoints.laptopDesign}){
        margin-bottom: 10px;
      }
      span{
        font-size: 1.4583vw;
        @media (max-width: ${breakpoints.laptopDesign}){
          font-size: 1.4rem;
        }
      }
    }

    .postData{
      margin-top: ${pxToVW.vw30px};
      font-size: 1.0416vw;
      line-height: 1;
      margin-bottom: ${pxToVW.vw90px};
      @media (max-width: ${breakpoints.laptopDesign}){
        margin-top: 30px;
        font-size: 1rem;
        margin-bottom: 90px;
      }
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
