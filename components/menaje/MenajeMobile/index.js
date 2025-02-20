// IMPORTS
// - Modules
import styled from "styled-components";
// - Components
import AccordionTab from "./AccordionTab";
import PageTitleMobile from "../../global/globalMobile/PageTitleMobile";
import MensualContent from "./MensualContent";
import EsporadicoContent from "./EsporadicoContent";
import StarterPackContent from "./StarterPackContent";
import MenuButton from "../../global/MenuButton";
// - Styles
import {
  brandingColors,
  brandingFonts,
} from "../../../styles/customStyles/brandingStyles";
import { breakpoints } from "../../../styles/customStyles/globalStyles";
import { pxToVW } from "../../../styles/customStyles/globalStyles";
//

// STYLES
const TextIntro = styled.div`
  color: ${brandingColors.light};
  margin: ${pxToVW.vwM20px};
  font-family: ${brandingFonts.textRegular};
  font-size: 19px;
  line-height: 1.157;
  letter-spacing: -0.3px;
  @media (max-width: ${breakpoints.mobileDesign}) {
    font-size: 4.5893vw;
  }
`;
const AccordionContainer = styled.div`
  margin: 0 ${pxToVW.vwM20px} ${pxToVW.vwM80px};
`;

//

// MAIN COMPONENT
export default function MenajeMobile() {
  return (
    <>
      <TextIntro>
        Estos son los 3 menajes digitales que podemos ofrecerte:
      </TextIntro>

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
      <MenuButton />
    </>
  );
}
//
