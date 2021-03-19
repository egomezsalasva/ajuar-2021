// IMPORTS
    // - Modules
    import Link from 'next/link'
    // - Components
    import MenuOptionWrapper from './MenuOptionWrapper'
// 




// MAIN COMPONENT
    export default function MenuOptionInternal({ toggleMenuActive, number, linkRoute, title, helperTextDesktop, helperTextMobile }) {
        return (
            <MenuOptionWrapper>
                <span className="number">{number}</span>
                    <Link href={linkRoute}>
                        <span className="title" onClick={toggleMenuActive}>{title}</span>
                    </Link>
                <span className="helperTextDesktop">{helperTextDesktop}</span>
                <span className="helperTextMobile">{helperTextMobile}</span>
            </MenuOptionWrapper>
        )
    }
//