// IMPORTS
  // - Modules
    import { useContext } from 'react'
    import styled from 'styled-components'
  // - Components
    import SplitPageLayout from '../../global/globalDesktop/SplitPageLayout'
    import SplitLeft from '../../global/globalDesktop/SplitLeft'
    import SplitRight from '../../global/globalDesktop/SplitRight'
    import ContactInfo from './ContactInfo'
    import ContactForm from './ContactForm'
    import MenuButton from '../../global/MenuButton'
  // - Styles
    import { brandingColors } from '../../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../../styles/customStyles/globalStyles'
    import { pxToVW } from '../../../styles/customStyles/globalStyles'
  // -Context
    import { MenuContext } from '../../../contexts/menuContext'
//


// STYLES
    const FormContainer = styled.div`
      width: 100%;
      padding: ${pxToVW.vw30px};
      @media (max-width: ${breakpoints.laptopDesign}){
        padding: 30px;
      }
    `
//


// MAIN COMPONENT
export default function ContactoDesktop() {

  const { menuActive } = useContext(MenuContext)

  const checkMenuColor = () => {
    if ( menuActive === false ) {
      return <MenuButton inputColorProp={brandingColors.dark} />
    } else {
      return <MenuButton inputColorProp={brandingColors.light} />
    }
  }

  return (
    <>
      <SplitPageLayout>

        <SplitLeft pageTitle="Escríbenos">
          <ContactInfo />
        </SplitLeft>


        <SplitRight rightBackgroundColor={brandingColors.light}>
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </SplitRight>

      </SplitPageLayout>

      { checkMenuColor() }
    </>
  )
}
// 