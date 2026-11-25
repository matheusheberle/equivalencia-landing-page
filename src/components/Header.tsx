
import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import Button from "./Button";
import "../styles/header.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    return (
        <header className="container py-sm">
            <nav className="flex items-center justify-between">
                <img
                    src={Logo}
                    alt="Logo EquivalêncIA"
                    width={220}
                    height={80}
                />

                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#solution">Soluções</a></li>
                        <li><a href="#testimonials">Depoimentos</a></li>
                        <li><a href="#pricing">Preços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                <div className="desktop-only">
                    <div className="flex items-center">
                        <a className="reverse-color ml-lg" href="#">
                            Login
                        </a>
                        <Button text="Cadastre-se" />
                    </div>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ? (
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li><a href="#hero" onClick={closeMobileMenu}>Home</a></li>
                                    <li><a href="#solution" onClick={closeMobileMenu}>Soluções</a></li>
                                    <li><a href="#testimonials" onClick={closeMobileMenu}>Depoimentos</a></li>
                                    <li><a href="#pricing" onClick={closeMobileMenu}>Preços</a></li>
                                    <li><a href="#contact" onClick={closeMobileMenu}>Contato</a></li>
                                    <li><a className="reverse-color" href="#" onClick={closeMobileMenu}>Login</a></li>
                                </ul>

                                <button
                                    type="button"
                                    className="btn-wrapper"
                                    aria-label="Fechar menu"
                                    onClick={closeMobileMenu}
                                >
                                    <img src={Close} alt="" width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="btn-wrapper"
                            aria-label="Abrir menu"
                            onClick={() => setShowMobileMenu(true)}
                        >
                            <img src={Menu} alt="" width={24} height={24} />
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}
