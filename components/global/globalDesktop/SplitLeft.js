// IMPORTS
// - Modules
import styled from "styled-components";
// - Components
import PageTitle from "./PageTitle";
//

// STYLES
const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
//

// MAIN COMPONENT
const SplitLeft = ({ children, pageTitle }) => {
  return (
    <LeftContainer>
      {children}
      <PageTitle>{pageTitle}</PageTitle>
    </LeftContainer>
  );
};
export default SplitLeft;
//
