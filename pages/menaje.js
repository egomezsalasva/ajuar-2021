// IMPORTS
// -Modules
import Head from "next/head";
import dynamic from "next/dynamic";
// -Components
const MenajeDesktop = dynamic(
  () => import("../components/menaje/MenajeDesktop/index"),
  { ssr: false },
);
const MenajeMobile = dynamic(
  () => import("../components/menaje/MenajeMobile/index"),
  { ssr: false },
);
// -Custom Hooks
import { useWidth } from "../hooks/useWidth";
// -Styles
import { breakpoints } from "../styles/customStyles/globalStyles";
//

// MAIN COMPONENT
export default function Menaje() {
  const windowWidth = useWidth();

  return (
    <>
      <Head>
        <title>Ajuar · Menaje</title>
      </Head>

      {windowWidth < breakpoints.tabletDesignHook ? (
        <MenajeMobile />
      ) : (
        <MenajeDesktop />
      )}
    </>
  );
}
//
