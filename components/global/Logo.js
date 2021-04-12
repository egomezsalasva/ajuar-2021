// IMPORTS
  // -Modules
  import Link from 'next/link'
  //import Image from 'next/image'
  import styled from 'styled-components'
  // -Styles
  import { cursors, breakpoints, pxToVW } from '../../styles/customStyles/globalStyles'
//


// STYLES
  const LogoImg = styled.img`
    position: fixed;
    top: ${pxToVW.vw30px};
    left: ${pxToVW.vw30px};
    width: 17.43vw;
    cursor: ${cursors.eyePointer};
    @media (max-width: ${breakpoints.laptopDesign}) {
      top: 30px;
      left: 30px;
      width: 251px;
    }
    @media (max-width: ${breakpoints.mobileDesign}) {
      //width: 183px;
      top: ${pxToVW.vwM20px};
      left: ${pxToVW.vwM20px};
      width: 44.2028vw;
    }
  `
//


//  MAIN COMPONENT
  const Logo = () => {
      return (
          <Link href="/">
            <LogoImg src="/assets/logoHome.svg"  alt="logo" />
          </Link>
      )
  }
  export default Logo
//