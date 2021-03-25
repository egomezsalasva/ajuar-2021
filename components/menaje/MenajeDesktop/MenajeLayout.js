// IMPORTS
    // - Modules
        import styled from 'styled-components'
    // - Components
        import SplitPageLayout from '../../global/globalDesktop/SplitPageLayout'
        import SplitLeft from '../../global/globalDesktop/SplitLeft'
    // - Styles
        import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
        import { cursors } from '../../../styles/customStyles/globalStyles'
import { useRef, useState } from 'react'
// 


// STYLES
    const MenajeOptionsWrapper = styled.div`
        margin-top: 30px;
        padding: 0 30px;
        width: 100%;
        .helperText{
            color: white;
            font-family: ${brandingFonts.textRegular};
            font-size: 15px;
            color: ${brandingColors.light};
            letter-spacing: -0.4px;
        }
    `
    const MenajeOptionContainer = styled.div`
        width: 100%;
        /* min-height: 125px; */
        padding-bottom: 35px;
        border-top: 1px solid white;
        cursor: ${cursors.eyePointer};

        .title{
            display: inline-block;
            margin-top: 10px;
            margin-left: 5px;
            font-family: ${brandingFonts.display};
            font-size: 4.66rem;
            font-size: 4.86vw;
            line-height: 1;
            letter-spacing: -1.5px;
            color: ${brandingColors.light};

            span{
                font-size: 3rem;
            }
        }
    `
//


// MAIN COMPONENT
    export default function MenajeLayout({ children , setCurrentPack }) {

        const [helperTextState, setHelperTextState] = useState("")
        let mensualTitleRef = useRef()
        let esporadicoTitleRef = useRef()
        let starterPackTitleRef = useRef()

        const helperTexts = {
            mensual: "Mensual text",
            esporadico: "esporadico",
            starterPack: "starterPack",
        }

        const setHelperText = (helperTextArg) => {
            setHelperTextState(helperTextArg)
        }
        
        

        return (
            <SplitPageLayout>

                <SplitLeft pageTitle="Menaje">
                    <MenajeOptionsWrapper>
    
                        <MenajeOptionContainer 
                            onClick={ () => setCurrentPack("mensual") }
                            onMouseEnter={ () => { setHelperText(helperTexts.mensual); mensualTitleRef.style.fontFamily = brandingFonts.displayItalic }}
                            onMouseLeave={ () => { setHelperText(""); mensualTitleRef.style.fontFamily = brandingFonts.display } }
                        >
                            <div className="title" ref={el => mensualTitleRef = el}>Mensual <span>💍</span></div>
                        </MenajeOptionContainer>
    
                        <MenajeOptionContainer 
                            onClick={ () => setCurrentPack("esporadico") }
                            onMouseEnter={ () => { setHelperText(helperTexts.esporadico); esporadicoTitleRef.style.fontFamily = brandingFonts.displayItalic } }
                            onMouseLeave={ () => { setHelperText(""); esporadicoTitleRef.style.fontFamily = brandingFonts.display } }
                        >
                            <div className="title" ref={el => esporadicoTitleRef = el}>Esporádico <span>🍆</span></div>
                        </MenajeOptionContainer>
                
                        <MenajeOptionContainer 
                            onClick={ () => setCurrentPack("starterPack") }
                            onMouseEnter={ () => { setHelperText(helperTexts.starterPack); starterPackTitleRef.style.fontFamily = brandingFonts.displayItalic } }
                            onMouseLeave={ () => { setHelperText(""); starterPackTitleRef.style.fontFamily = brandingFonts.display }}
                        >
                            <div className="title" ref={el => starterPackTitleRef = el}>Starter Pack <span>🌹</span></div>
                        </MenajeOptionContainer>

                        <div className="helperText">{helperTextState}</div>
                        
                    </MenajeOptionsWrapper>

                </SplitLeft>

                {children}

            </SplitPageLayout>
        )
    }
//