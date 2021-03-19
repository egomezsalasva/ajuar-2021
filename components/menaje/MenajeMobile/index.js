// IMPORTS
    // - Modules
        import styled from 'styled-components'
    // - Components
        import AccordionTab from './AccordionTab'
        import PageTitleMobile from '../../global/globalMobile/PageTitleMobile'
        import MensualContent from './MensualContent'
        import EsporadicoContent from './EsporadicoContent'
        import StarterPackContent from './StarterPackContent'
    // - Components
        import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
    const TextIntro = styled.div`
        color: ${brandingColors.light};
        margin: 20px;
        font-family: ${brandingFonts.textRegular};
        font-size: 19px;
        line-height: 22px;
        letter-spacing: -0.3px;
    `
    const AccordionContainer = styled.div`
        margin: 0 20px 80px;
        
    `

// 


// MAIN COMPONENT
  export default function MenajeMobile() {


    return (
      <>
        <TextIntro>Estos son los 3 menajes digitales que podemos ofrecerte:</TextIntro>

        <AccordionContainer>

            <AccordionTab
                menuTitle="Mensual"
                menuEmoji="💍"
                bgColor={brandingColors.menajeMensual}
            >
                <MensualContent />
            </AccordionTab>


            <AccordionTab
                menuTitle="Esporádico"
                menuEmoji="🍆"
                bgColor={brandingColors.menajeEsporadico}
            >
                <EsporadicoContent />
            </AccordionTab>


            <AccordionTab
                menuTitle="Starter Pack"
                menuEmoji="🌹"
                bgColor={brandingColors.menajeStarterPack}
            >
                <StarterPackContent />
            </AccordionTab>


        </AccordionContainer>

        <PageTitleMobile>Menaje</PageTitleMobile>

      </>
    )
  }
//
