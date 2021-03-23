// IMPORTS
  // - Modules
    import { useContext } from 'react'
    import styled from 'styled-components'
    import { Formik } from 'formik'
  // - Components
    import SplitPageLayout from '../../global/globalDesktop/SplitPageLayout'
    import SplitLeft from '../../global/globalDesktop/SplitLeft'
    import SplitRight from '../../global/globalDesktop/SplitRight'
    import ContactInfo from './ContactInfo'
    import ContactForm from './ContactForm'
    import MenuButton from '../../global/MenuButton'
  // - Styles
    import { brandingColors } from '../../../styles/customStyles/brandingStyles'
  // -Context
    import { MenuContext } from '../../../contexts/menuContext'
//


// STYLES
    const FormContainer = styled.div`
      width: 100%;
      padding: 30px;
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
            <Formik
              initialValues={{ message: '', email: '', }}
              onSubmit={(values, actions) => { 
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              {() => (<ContactForm />)}
            </Formik>
          </FormContainer>
        </SplitRight>

      </SplitPageLayout>

      { checkMenuColor() }
    </>
  )
}
// 