// IMPORTS
    // - Modules
        import styled from 'styled-components'
    // - Components
        import SplitPageLayout from '../../global/globalDesktop/SplitPageLayout'
        import SplitLeft from '../../global/globalDesktop/SplitLeft'
    // - Styles
        import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
        import { cursors } from '../../../styles/customStyles/globalStyles'
// 


// STYLES
    const MenajeOptionsWrapper = styled.div`
        margin-top: 30px;
        padding: 0 30px;
        width: 100%;
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
        return (
            <SplitPageLayout>

                <SplitLeft pageTitle="Menaje">
                    <MenajeOptionsWrapper>
    
                        <MenajeOptionContainer onClick={ () => setCurrentPack("mensual") }>
                            <div className="title">Mensual <span>💍</span></div>
                        </MenajeOptionContainer>
    
                        <MenajeOptionContainer onClick={ () => setCurrentPack("esporadico") }>
                            <div className="title">Esporádico <span>🍆</span></div>
                        </MenajeOptionContainer>
                
                        <MenajeOptionContainer onClick={ () => setCurrentPack("starterPack") }>
                            <div className="title">Starter Pack <span>🌹</span></div>
                        </MenajeOptionContainer>
                        
                    </MenajeOptionsWrapper>
                </SplitLeft>

                {children}

            </SplitPageLayout>
        )
    }
//