import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>EquivalêncIA</h3>
                    <p>
                        Simplificando a análise de equivalências acadêmicas.
                    </p>
                </div>

                <nav className="footer-column">
                    <h4>Projeto</h4>
                    <a href="#hero">Início</a>
                    <a href="#solution">Solução</a>
                    <a href="#contact">Contato</a>
                </nav>

                <nav className="footer-column">
                    <h4>Conteúdo</h4>
                    <a href="#solution">Soluções</a>
                    <a href="#testimonials">Depoimentos</a>
                </nav>

                <nav className="footer-column">
                    <h4>Explore</h4>
                    <a href="#pricing">Planos e preços</a>
                    <a href="#solution">Sobre o projeto</a>
                </nav>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} EquivalêncIA. Todos os direitos
                    reservados.
                </p>
            </div>
        </footer>
    );
}