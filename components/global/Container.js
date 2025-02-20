// IMPORTS
// -Modules
import styled from "styled-components";
// -Styles
import { breakpoints } from "../../styles/customStyles/globalStyles";
//

// MAIN COMPONENT
const ContainerStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
//

// MAIN COMPONENT
export default function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
//
