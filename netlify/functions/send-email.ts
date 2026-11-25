import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
    email: string;
    message: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

const corsHeaders = (origin: string) => ({
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
});

// Escapa caracteres para evitar inserção de HTML indevido no e-mail
const escapeHtml = (text: string) =>
    text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

const handler: Handler = async (event: HandlerEvent) => {
    const origin = event.headers["origin"] ?? "";

    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 204,
            headers: corsHeaders(origin),
            body: "",
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Método não permitido." }),
        };
    }

    let payload: ContactPayload;

    try {
        payload = JSON.parse(event.body ?? "{}");
    } catch {
        return {
            statusCode: 400,
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Body inválido." }),
        };
    }

    const { email, message } = payload;

    if (!email?.trim() || !message?.trim()) {
        return {
            statusCode: 422,
            headers: corsHeaders(origin),
            body: JSON.stringify({
                error: "Campos obrigatórios: email, message.",
            }),
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            statusCode: 422,
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "E-mail inválido." }),
        };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

        const receivedAt = new Date().toLocaleString("pt-BR", {
            dateStyle: "long",
            timeStyle: "short",
        });

        await transporter.sendMail({
            from: `EquivalêncIA <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_EMAIL,
            subject: "[EquivalêncIA] Nova mensagem de contato",

            text: `
Nova mensagem recebida pelo EquivalêncIA

E-mail do remetente: ${email}

Mensagem:
${message}

Recebida em: ${receivedAt}

Mensagem enviada através do formulário de contato do EquivalêncIA.
            `,

            html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0; padding:0; background-color:#F7F5EF; font-family:Arial, Helvetica, sans-serif;">

    <div style="padding:30px 15px;">

        <div style="max-width:600px; margin:0 auto; background-color:#FFFFFF; border-radius:12px; overflow:hidden;">

            <div style="background-color:#254D3A; padding:25px 30px;">
                <h1 style="margin:0; color:#FFFFFF; font-size:24px;">
                    EquivalêncIA
                </h1>

                <p style="margin:8px 0 0; color:#E9F0E5; font-size:14px;">
                    Análise curricular inteligente
                </p>
            </div>

            <div style="padding:30px;">

                <h2 style="margin:0 0 20px; color:#254D3A; font-size:22px;">
                    Nova mensagem de contato
                </h2>

                <p style="margin:0 0 25px; color:#555555; font-size:15px; line-height:1.6;">
                    Você recebeu uma nova mensagem através do formulário de contato do EquivalêncIA.
                </p>

                <div style="background-color:#F7F5EF; padding:20px; border-radius:8px; margin-bottom:20px;">

                    <p style="margin:0 0 8px; color:#254D3A; font-size:14px; font-weight:bold;">
                        E-mail do remetente
                    </p>

                    <p style="margin:0; font-size:15px;">
                        <a href="mailto:${safeEmail}" style="color:#6B9B76; text-decoration:none;">
                            ${safeEmail}
                        </a>
                    </p>

                </div>

                <div style="background-color:#F7F5EF; padding:20px; border-radius:8px;">

                    <p style="margin:0 0 12px; color:#254D3A; font-size:14px; font-weight:bold;">
                        Mensagem
                    </p>

                    <p style="margin:0; color:#444444; font-size:15px; line-height:1.7;">
                        ${safeMessage}
                    </p>

                </div>

                <p style="margin:25px 0 0; color:#777777; font-size:13px;">
                    <strong>Recebida em:</strong> ${receivedAt}
                </p>

            </div>

            <div style="background-color:#E9F0E5; padding:20px 30px; text-align:center;">

                <p style="margin:0; color:#254D3A; font-size:13px;">
                    Mensagem enviada através do formulário de contato do EquivalêncIA.
                </p>

            </div>

        </div>

    </div>

</body>
</html>
            `,
        });

        return {
            statusCode: 200,
            headers: corsHeaders(origin),
            body: JSON.stringify({
                message: "E-mail enviado com sucesso.",
            }),
        };
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);

        return {
            statusCode: 500,
            headers: corsHeaders(origin),
            body: JSON.stringify({
                error: "Falha ao enviar o e-mail. Tente novamente mais tarde.",
            }),
        };
    }
};

export { handler };