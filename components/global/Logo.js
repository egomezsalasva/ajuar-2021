// IMPORTS
  // -Modules
  import Link from 'next/link'
  //import Image from 'next/image'
  import styled from 'styled-components'
  // -Styles
  import { cursors, zIndexes, breakpoints } from '../../styles/customStyles/globalStyles'
//


// STYLES
  const LogoImg = styled.img`
    position: absolute;
    top: 30px;
    left: 30px;
    //z-index: ${zIndexes.logo};
    cursor: ${cursors.eyePointer};
    @media (max-width: ${breakpoints.mobileDesign}) {
      width: 183px;
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