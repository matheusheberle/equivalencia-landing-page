
import { useState, type FormEvent } from "react";
import "../styles/contact.css";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);
        setFeedback("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.error ?? "Não foi possível enviar sua mensagem.");
            }

            setFeedback("Mensagem enviada com sucesso! Obrigado pelo contato.");
            setEmail("");
            setMessage("");
        } catch (error) {
            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Ocorreu um erro ao enviar sua mensagem."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="container">
            <header>
                <p className="desktop-only">Envie sua dúvida</p>
                <h2>Entre em contato</h2>
                <p>
                    Ficou com alguma dúvida sobre o EquivalêncIA?
                    Envie sua mensagem. Estamos à disposição para ajudar!
                </p>
            </header>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Escreva sua mensagem..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={3}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar"}
                </button>

                {feedback && (
                    <p className="contact-feedback" role="status" aria-live="polite">
                        {feedback}
                    </p>
                )}
            </form>
        </section>
    );
}
