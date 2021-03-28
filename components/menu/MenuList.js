// IMPORTS
    // - Components
    import MenuOptionInternal from './MenuOptionInternal'
    import MenuOptionExternal from './MenuOptionExternal'
    // -Custom Hooks
    import { useWidth } from '../../hooks/useWidth'
    // -Styles
    
// 



// MAIN COMPONENT
    export default function MenuList() {

        const windowWidth = useWidth()

        return (
            <div>
                <MenuOptionInternal 
                    number="01" 
                    linkRoute="/menaje" 
                    title="Menaje" 
                    helperTextDesktop="(Servicios)"
                    helperTextMobile="(01 – Servicios)"
                />
                <MenuOptionInternal 
                    number="02" 
                    linkRoute="/nosotros" 
                    title="Nosotros" 
                    helperTextDesktop="(About)"
                    helperTextMobile="(02 – About)"
                />
                <MenuOptionExternal 
                    number="03" 
                    linkRoute="https://www.instagram.com/ajuarestudio/" 
                    title="Instagram" 
                    helperTextDesktop="(👁)"
                    helperTextMobile="(03 – 👁)"
                />
                <MenuOptionInternal 
                    number="04" 
                    linkRoute="/contacto" 
                    title="Contacto" 
                    helperTextDesktop="(Holis!)"
                    helperTextMobile="04 – (Holis!)"
                />
            </div>
        )
    }
//