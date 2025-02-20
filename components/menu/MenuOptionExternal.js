// IMPORTS
// - Components
import MenuOptionWrapper from "./MenuOptionWrapper";
//

// MAIN COMPONENT
export default function MenuOptionExternal({
  number,
  linkRoute,
  title,
  helperTextDesktop,
  helperTextMobile,
}) {
  return (
    <MenuOptionWrapper>
      <span className="number">{number}</span>
      <a className="title" href={linkRoute} target="_blank">
        {title}
      </a>
      <span className="helperTextDesktop">{helperTextDesktop}</span>
      <span className="helperTextMobile">{helperTextMobile}</span>
    </MenuOptionWrapper>
  );
}
//
