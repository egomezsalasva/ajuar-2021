// IMPORTS
// -Modules
import Head from "next/head";
import dynamic from "next/dynamic";
// -Components
const NosotrosDesktop = dynamic(
  () => import("../components/nosotros/nosotrosDesktop/NosotrosDesktop"),
  { ssr: false },
);
const NosotrosMobile = dynamic(
  () => import("../components/nosotros/nosotrosMobile/NosotrosMobile"),
  { ssr: false },
);
// -Custom Hooks
import { useWidth } from "../hooks/useWidth";
// -Styles
import { breakpoints } from "../styles/customStyles/globalStyles";
//

// STYLES

//

// MAIN COMPONENT
export default function Nosotros() {
  const windowWidth = useWidth();

  return (
    <>
      <Head>
        <title>Ajuar · Nosotros</title>
      </Head>

      {windowWidth < breakpoints.mobileDesignHook ? (
        <NosotrosMobile />
      ) : (
        <NosotrosDesktop />
      )}
    </>
  );
}
//
