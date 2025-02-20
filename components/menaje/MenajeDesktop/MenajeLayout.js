// IMPORTS
// - Modules
import { useRef, useState } from "react";
import styled from "styled-components";
// - Components
import SplitPageLayout from "../../global/globalDesktop/SplitPageLayout";
import SplitLeft from "../../global/globalDesktop/SplitLeft";
// - Styles
import {
  brandingColors,
  brandingFonts,
} from "../../../styles/customStyles/brandingStyles";
import { breakpoints, pxToVW } from "../../../styles/customStyles/globalStyles";
import { cursors } from "../../../styles/customStyles/globalStyles";

//

// STYLES
const MenajeOptionsWrapper = styled.div`
  margin-top: ${pxToVW.vw30px};
  padding: 0 ${pxToVW.vw30px};
  width: 100%;
  @media (max-width: ${breakpoints.laptopDesign}) {
    margin-top: 30px;
    padding: 0 30px;
  }
  .helperText {
    color: white;
    font-family: ${brandingFonts.textRegular};
    font-size: 1.041666vw;
    color: ${brandingColors.light};
    letter-spacing: -0.4px;
    @media (max-width: ${breakpoints.laptopDesign}) {
      font-size: 15px;
    }
  }
`;
const MenajeOptionContainer = styled.div`
  width: 100%;
  /* min-height: 125px; */
  padding-bottom: 2.43055vw;
  border-top: 0.06944vw solid white;
  cursor: ${cursors.eyePointer};
  @media (max-width: ${breakpoints.laptopDesign}) {
    padding-bottom: 35px;
    border-top: 1px solid white;
  }

  .title {
    display: inline-block;
    margin-top: ${pxToVW.vw10px};
    margin-left: 0.347222vw;
    font-family: ${brandingFonts.display};
    font-size: 4.86vw;
    line-height: 1;
    letter-spacing: -1.5px;
    color: ${brandingColors.light};
    @media (max-width: ${breakpoints.laptopDesign}) {
      margin-top: 10px;
      margin-left: 5px;
      font-size: 4.66rem;
    }

    span {
      font-size: 3.125vw;
      @media (max-width: ${breakpoints.laptopDesign}) {
        font-size: 3rem;
      }
    }
  }
`;
//

// MAIN COMPONENT
export default function MenajeLayout({ children, setCurrentPack }) {
  const [helperTextState, setHelperTextState] = useState("");
  let mensualTitleRef = useRef();
  let esporadicoTitleRef = useRef();
  let starterPackTitleRef = useRef();

  const helperTexts = {
    mensual:
      "Pack de contenidos realizado mensualmente con planificación y estrategia en Social Media.",
    esporadico: "Pack de contenidos para campañas o momentos puntuales.",
    starterPack:
      "Creamos la imagen de tu marca desde cero o la renovamos para mejorar tu presencia en redes sociales.",
  };

  const setHelperText = (helperTextArg) => {
    setHelperTextState(helperTextArg);
  };

  return (
    <SplitPageLayout>
      <SplitLeft pageTitle="Menaje">
        <MenajeOptionsWrapper>
          <MenajeOptionContainer
            onClick={() => setCurrentPack("mensual")}
            onMouseEnter={() => {
              setHelperText(helperTexts.mensual);
              mensualTitleRef.style.fontFamily = brandingFonts.displayItalic;
            }}
            onMouseLeave={() => {
              setHelperText("");
              mensualTitleRef.style.fontFamily = brandingFonts.display;
            }}
          >
            <div className="title" ref={(el) => (mensualTitleRef = el)}>
              Mensual <span>💍</span>
            </div>
          </MenajeOptionContainer>

          <MenajeOptionContainer
            onClick={() => setCurrentPack("esporadico")}
            onMouseEnter={() => {
              setHelperText(helperTexts.esporadico);
              esporadicoTitleRef.style.fontFamily = brandingFonts.displayItalic;
            }}
            onMouseLeave={() => {
              setHelperText("");
              esporadicoTitleRef.style.fontFamily = brandingFonts.display;
            }}
          >
            <div className="title" ref={(el) => (esporadicoTitleRef = el)}>
              Esporádico <span>🍆</span>
            </div>
          </MenajeOptionContainer>

          <MenajeOptionContainer
            onClick={() => setCurrentPack("starterPack")}
            onMouseEnter={() => {
              setHelperText(helperTexts.starterPack);
              starterPackTitleRef.style.fontFamily =
                brandingFonts.displayItalic;
            }}
            onMouseLeave={() => {
              setHelperText("");
              starterPackTitleRef.style.fontFamily = brandingFonts.display;
            }}
          >
            <div className="title" ref={(el) => (starterPackTitleRef = el)}>
              Starter Pack <span>🌹</span>
            </div>
          </MenajeOptionContainer>

          <div className="helperText">{helperTextState}</div>
        </MenajeOptionsWrapper>
      </SplitLeft>

      {children}
    </SplitPageLayout>
  );
}
//
