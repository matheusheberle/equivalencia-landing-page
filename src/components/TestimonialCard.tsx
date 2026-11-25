
import Star from "../assets/icons/star.svg";
import StarOuter from "../assets/icons/starOuter.svg";

interface TestimonialCardProps {
    text: string;
    profileImage: string;
    stars: number;
    name: string;
    role: string;
}

export default function TestimonialCard({
    text,
    profileImage,
    stars,
    name,
    role,
}: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={profileImage} alt="Imagem perfil cliente" />

            <span className="testimony">
                <p>{text}</p>
            </span>

            <span className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <img
                        key={index}
                        src={index < stars ? Star : StarOuter}
                        alt={index < stars ? "Estrela" : "Estrela sem preenchimento"}
                        width={22}
                        height={20}
                    />
                ))}
            </span>

            <span className="names">
                <p className="bold">{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}
