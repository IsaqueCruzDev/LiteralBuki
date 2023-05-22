import {
    FooterStyled,
    FooterDivStyled,
    AreaLogo,
    Logo,
    FaleConosco
} from './style.jsx';
import logo from "../../../assets/img/umapaginadecadavez.svg";

export default function Footer() {
    return (
        <FooterStyled>
            <FooterDivStyled>
                <AreaLogo>
                    <Logo src={logo}/>
                </AreaLogo>
                
                <FaleConosco>
                    
                </FaleConosco>
            </FooterDivStyled>
        </FooterStyled >
    )
}