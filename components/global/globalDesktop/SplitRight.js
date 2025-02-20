// IMPORTS
// -Modules
import styled from "styled-components";
// -Styles
import { brandingColors } from "../../../styles/customStyles/brandingStyles";
//

// STYLES
const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: ${(props) => props.inputColor || brandingColors.dark};
`;
//

// MAIN COMPONENT
const SplitRight = ({ children, rightBackgroundColor }) => {
  return (
    <RightContainer inputColor={rightBackgroundColor}>
      {children}
    </RightContainer>
  );
};
export default SplitRight;
//
