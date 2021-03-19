// IMPORTS
    // - Modules
        import styled from 'styled-components'
        import { Form, Field } from 'formik'
    // - Components

    // - Styles
        import { brandingFonts } from '../../../styles/customStyles/brandingStyles'
        import { cursors } from '../../../styles/customStyles/globalStyles'
//


// STYLES
    const lnHeight = "54px"

    const FieldLabelContainer = styled.div`
        margin-top: ${props => props.inputMarginTop || "0px"};
        position: relative;
        width: 100%;
        height: calc(${lnHeight} * (${props => props.numberOfLines || "1"} + 1));

        label{
            position: absolute;
            z-index: 10;
            font-size: 30px;
            line-height: 30px;
            height: 30px;
            font-family: ${brandingFonts.textRegular};
            transform: translateY(7px);
        }

        .fieldInput{
            position: absolute;
            z-index: 10;
            top: 40px;
            width: 100%;
            background: transparent;
            font-size: 30px;
            line-height: ${lnHeight};
            font-family: ${brandingFonts.textRegular};
            border: none;
            outline: none;
        }

        .messageInput{
            resize: none;
            height: calc(${lnHeight} * 7);
            cursor: ${cursors.pen};
        }

        .emailInput{
            cursor: ${cursors.pen};
        }
    `
    const BackgroundBox = styled.div`
        position: absolute;
        top: 40px;
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
        margin: 40px 0;
        text-align: center;
        button{
            font-size: 30px;
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
    export default function ContactForm() {

        return (
            <Form name="contact" method="POST" data-netlify="true">


                <FieldLabelContainer numberOfLines={7} inputMarginTop={"0px"}>

                    <BackgroundBox numberOfLines={7}>
                        <BackgroundLine />
                        <BackgroundLine />
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
        )
    }
// 