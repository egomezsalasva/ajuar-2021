// IMPORTS
  // - Modules
    import styled from 'styled-components'
    //import { Formik, Form, Field } from 'formik'
  // - Component
    import PageTitleMobile from '../../global/globalMobile/PageTitleMobile'
    import ContactInfo from './ContactInfo'
    import MenuButton from '../../global/MenuButton'
  // - Styles
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
    import { cursors, pxToVH, pxToVW } from '../../../styles/customStyles/globalStyles'
//


// STYLES
  const FormContainer = styled.div`
    padding: ${pxToVW.vwM20px};
    margin: ${pxToVW.vwM20px};
    margin-bottom: ${pxToVW.vwM80px};
    background: ${brandingColors.light};
  `

  //const lnHeight = "46px"
  const lnHeight = "5.13392857vh"
  //const fntSize = "26px"
  const fntSize = "6.28019324vw"
  const FieldLabelContainer = styled.div`
    margin-top: ${props => props.inputMarginTop || "0px"};
    position: relative;
    width: 100%;
    height: calc( ${lnHeight} * (${props => props.numberOfLines || "1"} + 1));

    label{
        position: absolute;
        z-index: 10;
        font-size: ${fntSize};
        line-height: 1;
        font-family: ${brandingFonts.textRegular};
        transform: translateY(7px);
    }

    .fieldInput{
        position: absolute;
        z-index: 10;
        //top: 37px;
        top: 4.12946429vh;
        width: 100%;
        background: transparent;
        font-size: ${fntSize};
        line-height: ${lnHeight};
        font-family: ${brandingFonts.textRegular};
        border: none;
        outline: none;
    }

    .messageInput{
        height: calc(${lnHeight} * 5);
        resize: none;
        cursor: ${cursors.pen};
    }

    .emailInput{
        height: calc(${lnHeight} * 1);
        cursor: ${cursors.pen};
    }
  `
  const BackgroundBox = styled.div`
    position: absolute;
    //top: 35px;
    top: 3.90625vh;
    z-index: 0;
    width: 100%;
    height: calc(${lnHeight} * ${props => props.numberOfLines || "1"});
  `
  const BackgroundLine = styled.div`
    width: 100%;
    height: ${lnHeight};
    background: transparent;
    border-bottom: 1px solid #A5A5A5;
  `
  const ButtonContainer = styled.div`
    width: 100%;
    margin: 4.46428571vh 0;
    text-align: center;

    button{
        font-size: ${fntSize};
        border: none;
        background: transparent;
        outline: none;
        cursor: ${cursors.letter};
        
        span{
          text-decoration: underline;
          text-transform: uppercase;
        }
    }
  `
//


// MAIN COMPONENT
export default function ContactoMobile() {
  return (
    <>
      <ContactInfo />

      <FormContainer>
        {/* <Formik
          initialValues={{ message: '', email: '', }}
          onSubmit={(values, actions) => { 
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {() => (
            <Form name="contact" method="POST" data-netlify="true">

              <FieldLabelContainer numberOfLines={5} inputMarginTop={"0px"}>
                <BackgroundBox numberOfLines={5}>
                  <BackgroundLine />
                  <BackgroundLine />
                  <BackgroundLine />
                  <BackgroundLine />
                  <BackgroundLine />
                </BackgroundBox>
                <label htmlFor="message">Querido Ajuar, </label>
                <Field name="message" component="textarea" placeholder="Texto aquí..." className="fieldInput messageInput"/>
              </FieldLabelContainer>


              <FieldLabelContainer numberOfLines={1} inputMarginTop={"30px"}>
                <BackgroundBox numberOfLines={1}>
                  <BackgroundLine />
                </BackgroundBox>
                <label htmlFor="email">Con amor, </label>
                <Field name="email" placeholder="Email aquí..." className="fieldInput emailInput" />
              </FieldLabelContainer>

          
              <ButtonContainer>
                <button type="submit">💖🕊 <span>Mandar</span> 🕊💖</button>
              </ButtonContainer>


            </Form>
          )}
        </Formik> */}
        <form name="contact" method="POST" data-netlify="true">

          <input type="hidden" name="form-name" value="contact" />

          <FieldLabelContainer numberOfLines={5} inputMarginTop={"0px"}>
            <BackgroundBox numberOfLines={5}>
              <BackgroundLine />
              <BackgroundLine />
              <BackgroundLine />
              <BackgroundLine />
              <BackgroundLine />
            </BackgroundBox>
            <label htmlFor="message">Querido Ajuar, </label>
            <textarea name="message" placeholder="Texto aquí..." className="fieldInput messageInput"/>
          </FieldLabelContainer>


          <FieldLabelContainer numberOfLines={1} inputMarginTop={"30px"}>
            <BackgroundBox numberOfLines={1}>
              <BackgroundLine />
            </BackgroundBox>
            <label htmlFor="email">Con amor, </label>
            <input type="email" name="email" placeholder="Email aquí..." className="fieldInput emailInput" />
          </FieldLabelContainer>

      
          <ButtonContainer>
            <button type="submit">💖🕊 <span>Mandar</span> 🕊💖</button>
          </ButtonContainer>


        </form>
      </FormContainer>

      <PageTitleMobile>Escríbenos</PageTitleMobile>
      <MenuButton />
    </>
  )
}
// 