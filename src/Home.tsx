import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card";
import Contact from "./components/Contact";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";

import Comparison from "./assets/icons/comparison.svg";
import Organization from "./assets/icons/organization.svg";
import Efficiency from "./assets/icons/efficiency.svg";
import Check from "./assets/icons/check.svg";

import HeroRectangleOne from "./assets/images/rectangleOne.png";
import HeroRectangleTwo from "./assets/images/rectangleTwo.png";
import ProfileImageOne from "./assets/images/profileImageOne.png";
import ProfileImageTwo from "./assets/images/profileImageTwo.png";
import ProfileImageThree from "./assets/images/profileImageThree.png";
import ProfileImageFour from "./assets/images/profileImageFour.png";

import "./styles/hero.css";
import "./styles/solution.css";
import "./styles/testimonials.css";
import "./styles/pricing.css";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <section id="hero">
                    <span className="desktop-only">
                        <img
                            src={HeroRectangleTwo}
                            alt="Imagem decorativa da seção inicial"
                        />
                    </span>

                    <img
                        src={HeroRectangleOne}
                        alt="Imagem principal da seção inicial"
                    />

                    <div className="container content">
                        <p className="desktop-only">
                            Análise curricular inteligente
                        </p>

                        <h1>
                            Simplifique a análise de equivalências acadêmicas
                        </h1>

                        <p>
                            Compare disciplinas e conteúdos curriculares de forma organizada,
                            facilitando a análise de equivalências entre cursos e instituições
                            de ensino.
                        </p>

                        <div className="flex gap-1">
                            <span>
                                <Button text="Conheça a solução" href="#solution" />
                            </span>

                            <span className="desktop-only">
                                <Button text="Entre em contato" secondary href="#contact" />
                            </span>
                        </div>
                    </div>
                </section>

                <section className="container" id="solution">
                    <header>
                        <span>
                            <h2>Soluções</h2>

                            <span className="desktop-only">
                                <h2>Mais praticidade na análise curricular</h2>
                            </span>
                        </span>

                        <p>
                            O <strong>EquivalêncIA</strong> ajuda a organizar a comparação
                            de disciplinas e conteúdos curriculares, tornando a análise de
                            equivalências acadêmicas mais clara, prática e estruturada.
                        </p>
                    </header>

                    <section className="even-columns">
                        <Card
                            icon={Comparison}
                            iconAlt="Ícone de comparação curricular"
                            title="Comparação curricular"
                            description="Compare disciplinas e conteúdos de diferentes cursos e instituições de ensino."
                        />
                        <Card
                            icon={Organization}
                            iconAlt="Ícone de organização"
                            title="Análise organizada"
                            description="Organize informações curriculares para facilitar a análise de equivalências acadêmicas."
                        />
                        <Card
                            icon={Efficiency}
                            iconAlt="Ícone de praticidade"
                            title="Mais praticidade"
                            description="Simplifique o processo de análise e facilite a visualização das informações relevantes."
                        />
                    </section>
                </section>

                <section id="testimonials">
                    <header>
                        <span>
                            <p className="desktop-only">
                                Experiências acadêmicas
                            </p>
                            <h2>Uma nova forma de aprender!</h2>
                        </span>

                        <p>
                            O EquivalêncIA busca tornar a análise de equivalências
                            acadêmicas mais simples e organizada. Conheça alguns
                            exemplos de como a plataforma pode ajudar estudantes
                            e profissionais da área acadêmica.
                        </p>
                    </header>

                    <section className="carousel">
                        <div className="carousel-track">

                            {/* Primeiro grupo de depoimentos */}
                            <div className="carousel-content">
                                <TestimonialCard
                                    text="Estou transferindo minha graduação e a organização das disciplinas ajuda muito a entender quais conteúdos podem ser aproveitados na nova instituição."
                                    profileImage={ProfileImageOne}
                                    stars={4}
                                    name="Mariana Costa"
                                    role="Aluna em transferência"
                                />

                                <TestimonialCard
                                    text="Depois de mudar de curso, preciso entender quais disciplinas podem ser aproveitadas. A proposta do EquivalêncIA torna essa análise muito mais organizada."
                                    profileImage={ProfileImageTwo}
                                    stars={5}
                                    name="Gabriel Santos"
                                    role="Aluno que mudou de graduação"
                                />

                                <TestimonialCard
                                    text="Uma ferramenta que organiza as informações curriculares e auxilia na comparação dos conteúdos pode tornar o processo de análise mais ágil e estruturado."
                                    profileImage={ProfileImageThree}
                                    stars={4}
                                    name="Camila Rodrigues"
                                    role="Coordenadora acadêmica"
                                />

                                <TestimonialCard
                                    text="Como já tenho uma graduação, poder comparar as disciplinas cursadas com a nova matriz curricular é algo que pode facilitar bastante o processo."
                                    profileImage={ProfileImageFour}
                                    stars={5}
                                    name="Lucas Almeida"
                                    role="Aluno de segunda graduação"
                                />
                            </div>

                            {/* Grupo duplicado para criar a animação contínua */}
                            <div className="carousel-content" aria-hidden="true">
                                <TestimonialCard
                                    text="Estou transferindo minha graduação e a organização das disciplinas ajuda muito a entender quais conteúdos podem ser aproveitados na nova instituição."
                                    profileImage={ProfileImageOne}
                                    stars={5}
                                    name="Mariana Costa"
                                    role="Aluna em transferência"
                                />

                                <TestimonialCard
                                    text="Depois de mudar de curso, preciso entender quais disciplinas podem ser aproveitadas. A proposta do EquivalêncIA torna essa análise muito mais organizada."
                                    profileImage={ProfileImageTwo}
                                    stars={5}
                                    name="Gabriel Santos"
                                    role="Aluno que mudou de graduação"
                                />

                                <TestimonialCard
                                    text="Uma ferramenta que organiza as informações curriculares e auxilia na comparação dos conteúdos pode tornar o processo de análise mais ágil e estruturado."
                                    profileImage={ProfileImageThree}
                                    stars={5}
                                    name="Camila Rodrigues"
                                    role="Coordenadora acadêmica"
                                />

                                <TestimonialCard
                                    text="Como já tenho uma graduação, poder comparar as disciplinas cursadas com a nova matriz curricular é algo que pode facilitar bastante o processo."
                                    profileImage={ProfileImageFour}
                                    stars={5}
                                    name="Lucas Almeida"
                                    role="Aluno de segunda graduação"
                                />
                            </div>

                        </div>
                    </section>
                </section>

                <section id="pricing" className="container">
                    <header>
                        <p className="desktop-only">Planos e preços</p>
                        <h2>Nossos planos</h2>
                    </header>

                    <section className="even-columns gap-1.5">
                        {/* Plano Básico */}
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Básico</h3>
                                <p>Experimente a análise de equivalências acadêmicas.</p>
                            </span>

                            <h2>Grátis</h2>

                            <Button text="Começar agora" secondary />

                            <span className="hr" />

                            <span className="features">
                                <img src={Check} alt="Ícone check" width={24} height={24} />
                                <p>3 análises gratuitas</p>
                            </span>

                            <ul className="features">
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Comparação curricular básica</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Visualização dos resultados</p>
                                </li>
                            </ul>
                        </div>

                        {/* Plano Estudante */}
                        <div className="pricing-card premium">
                            <span className="bonus">
                                <p>IDEAL PARA ESTUDANTES</p>
                            </span>

                            <span className="plan">
                                <h3>Estudante</h3>
                                <p>Para quem precisa analisar disciplinas e aproveitar créditos acadêmicos.</p>
                            </span>

                            <span className="price">
                                <h2>R$ 9,90</h2>
                            </span>

                            <Button text="Adquirir pacote" />

                            <span className="hr" />

                            <span className="features">
                                <img src={Check} alt="Ícone check" width={24} height={24} />
                                <p>15 análises</p>
                            </span>

                            <ul className="features">
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Comparação detalhada de disciplinas</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Análise de carga horária</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Histórico de análises</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Relatórios</p>
                                </li>
                            </ul>
                        </div>

                        {/* Plano Avançado */}
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Avançado</h3>
                                <p>Para quem precisa realizar mais análises curriculares.</p>
                            </span>

                            <span className="price">
                                <h2>R$ 19,90</h2>
                            </span>

                            <Button text="Adquirir pacote" secondary />

                            <span className="hr" />

                            <span className="features">
                                <img src={Check} alt="Ícone check" width={24} height={24} />
                                <p>50 análises</p>
                            </span>

                            <ul className="features">
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Comparações avançadas</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Análise detalhada de conteúdos</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Histórico completo</p>
                                </li>
                                <li>
                                    <img src={Check} alt="Ícone check" width={24} height={24} />
                                    <p>Exportação de relatórios</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    );
}
