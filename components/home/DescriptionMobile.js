// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Components
    
    // - Styles
        import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
        import { breakpoints, pxToVW, pxToVH } from '../../styles/customStyles/globalStyles'
    // - Custom Hooks

// 


// STYLES
    const DescriptionContainer = styled.div`
        position: fixed;
        bottom: ${pxToVH.vhM120px};
        margin: 0 ${pxToVW.vwM20px};
        max-width: calc(100vw - ${pxToVW.vwM20px} - ${pxToVW.vwM20px});
    `
    const Line = styled.div`
        font-size: 8.6956vw;
        line-height: 1.1;
        letter-spacing: 0.5px;
        color: ${brandingColors.light};

        .emoji{
            font-size: 7.7294vw;
        }

        .supScript{
            font-family: ${brandingFonts.display};
            font-size: 4.1062vw;
            line-height: 9.4vw;
            vertical-align: text-top;
        }
    `
//


// MAIN COMPONENT
    export default function DescriptionMobile() {

        return (
            <DescriptionContainer>
                <Line>
                    <span className="emoji">👇🏽</span> <br/>
                    SOMOS AJUAR <span className="supScript">(AJUAR)</span>,
                    EL MENAJE DIGITAL <span className="emoji">🤳🏽</span> MULTIDISCIPLINAR
                    QUE NECESITA TU PROYECTO <span className="emoji">🏡 </span>
                    PARA EL SI <span className="emoji">💍</span> QUIERO DE TU CLIENTE <span className="supScript">(AMOR)</span>.
                </Line>
            </DescriptionContainer>
        )
    }
//