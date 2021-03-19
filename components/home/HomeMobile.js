// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Components
  import Container from '../global/Container'
  import HomeWrapper from './HomeWrapper'
  import Logo from '../global/Logo'
  import DescriptionHome from './DescriptionHome'
  import InstagramButton from '../global/globalMobile/InstagramButton'
  // -Styles
  import { breakpoints } from '../../styles/customStyles/globalStyles'
//

// MAIN COMPONENT
  const LogoBox = styled.div`
    width: 100%;
    height: 70px;
    margin: 30px;
    max-width: calc(100vw - 30px - 30px - 220px);
    @media (max-width: ${breakpoints.mobileDesign}) {
      max-width: calc(100vw - 30px - 30px);
    }
  `
//


// MAIN COMPONENT
  export default function HomeMobile() {
    return (
        <Container>
            <HomeWrapper>
                <Logo />
                <LogoBox/>
                <DescriptionHome />
            </HomeWrapper>
            <InstagramButton />
        </Container>
    )
  }
//
