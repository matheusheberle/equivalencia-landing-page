import "../styles/buttons.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    href?: string;
}

export default function Button({ text, secondary, href }: IButtonProps) {
    const className = secondary ? "btn-secondary" : "btn-primary";

    if (href) {
        return (
            <a href={href} className={className}>
                {text}
            </a>
        );
    }

    return (
        <button type="button" className={className}>
            {text}
        </button>
    );
}