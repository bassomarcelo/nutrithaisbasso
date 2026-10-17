import { Link } from "gatsby";
import React from "react";
import Article from "../../components/blog/Article";
import Layout from "../../components/common/Layout";
import Seo from "../../components/common/Seo";

export default function HabitosPossiveis() {
    return (
        <Layout>
            <Article
                category="Hábitos e rotina"
                title="Como criar hábitos que caibam na sua rotina"
                intro="Hábitos que duram não nascem de metas enormes nem de uma segunda-feira perfeita. Nascem de decisões pequenas, repetidas no meio de uma vida cheia de imprevistos."
                date="Outubro de 2026"
                readingTime="4 min de leitura"
            >
                <h2>Pequenos começos vencem grandes promessas</h2>
                <p>
                    Quando decidimos mudar, é comum querer mudar tudo de uma vez: alimentação, sono, academia, hidratação, organização. A empolgação inicial
                    ajuda por alguns dias, mas a rotina real cobra um preço. Uma semana difícil é suficiente para o plano inteiro desmoronar.
                </p>
                <p>
                    Um hábito possível começa menor do que a nossa ambição. Ele precisa ser simples o bastante para acontecer mesmo nos dias ruins — e repetido
                    o suficiente para se tornar parte do automático.
                </p>

                <h2>Os três ingredientes de um hábito possível</h2>
                <ul>
                    <li>
                        <strong>Clareza:</strong> saber exatamente o que fazer, quando e como. “Melhorar a alimentação” é vago; “incluir uma fruta no café da
                        manhã” é concreto.
                    </li>
                    <li>
                        <strong>Conveniência:</strong> reduzir a distância entre a intenção e a ação. Deixar a fruta visível, a garrafa por perto, a refeição
                        planejada.
                    </li>
                    <li>
                        <strong>Repetição:</strong> repetir no contexto certo, sem exigir motivação todos os dias. Consistência vale mais do que intensidade.
                    </li>
                </ul>

                <h2>Como aplicar na alimentação</h2>
                <ul>
                    <li>Escolha uma refeição para organizar primeiro, em vez de querer mudar todas de uma vez.</li>
                    <li>Defina duas ou três combinações possíveis para os dias corridos.</li>
                    <li>Facilite o que você quer repetir: deixe preparado, visível e acessível.</li>
                    <li>Planeje as exceções. Aniversários, viagens e eventos fazem parte — não são desvios que exigem punição.</li>
                </ul>

                <h2>Expectativa versus realidade</h2>
                <p>
                    Vai haver dias em que o plano não será seguido. Isso não apaga o processo. A diferença entre quem constrói um hábito e quem recomeça sempre
                    não é a ausência de falhas: é a forma de lidar com elas. Em vez de “estraguei tudo”, a pergunta é “o que faço no próximo passo?”.
                </p>
                <p>
                    No acompanhamento nutricional, esse processo é construído junto, com plano personalizado, cardápios ilustrados e retornos para ajustar o
                    caminho. Conheça o <Link to="/acompanhamento-nutricional">Acompanhamento Nutricional</Link> ou comece pelo{" "}
                    <Link to="/desafio-reset-21">Desafio Reset 21</Link>.
                </p>

                <div className="tb-note">
                    Consistência não significa perfeição. Significa voltar ao caminho quantas vezes forem necessárias, sem transformar um deslize em
                    desistência.
                </div>
            </Article>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/blog/habitos-possiveis"
        title="Como criar hábitos que caibam na sua rotina | Thaís Basso"
        description="Aprenda a construir hábitos possíveis na alimentação: clareza, conveniência e repetição, com expectativas reais para a sua rotina."
    />
);
