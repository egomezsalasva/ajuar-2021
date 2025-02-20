// IMPORTS
// -Modules
import styled from "styled-components";
// -Styles
import {
  brandingColors,
  brandingFonts,
} from "../../../styles/customStyles/brandingStyles";
import { pxToVW } from "../../../styles/customStyles/globalStyles";
//

// STYLES
const PageTitleStyle = styled.div`
  position: fixed;
  bottom: ${pxToVW.vwM10px};
  left: ${pxToVW.vwM20px};
  font-family: ${brandingFonts.display};
  //font-size: 47px;
  font-size: 11.352657vw;
  line-height: 1.22;
  color: ${brandingColors.light};
  letter-spacing: -0.4px;
`;
//

// MAIN COMPONENTS
export default function PageTitleMobile({ children }) {
  return <PageTitleStyle>{children}</PageTitleStyle>;
}
//
