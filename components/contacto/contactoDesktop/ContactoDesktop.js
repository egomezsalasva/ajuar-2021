// IMPORTS
  // - Modules
    import styled from 'styled-components'
    import { Formik } from 'formik'
  // - Components
    import SplitPageLayout from '../../global/globalDesktop/SplitPageLayout'
    import SplitLeft from '../../global/globalDesktop/SplitLeft'
    import SplitRight from '../../global/globalDesktop/SplitRight'
    import ContactInfo from './ContactInfo'
    import ContactForm from './ContactForm'
  // - Styles
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
    const FormContainer = styled.div`
      width: 100%;
      padding: 30px;
    `
//


// MAIN COMPONENT
export default function ContactoDesktop() {

  return (
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
  )
}
// 