import { Link } from "gatsby";
import React from "react";
import Article from "../../components/blog/Article";
import Layout from "../../components/common/Layout";
import Seo from "../../components/common/Seo";

export default function FomeEmocional() {
    return (
        <Layout>
            <Article
                category="Nutrição e emoções"
                title="Fome emocional não é falta de força de vontade"
                intro="A comida acompanha a vida: celebra, acolhe e conforta. Sentir vontade de comer em momentos difíceis é humano. O que mudamos não é o sentimento — é a relação com ele."
                date="Outubro de 2026"
                readingTime="5 min de leitura"
            >
                <h2>Fome física e fome emocional</h2>
                <p>
                    A fome física costuma aparecer de forma gradual, aceita diferentes tipos de comida e diminui quando estamos satisfeitos. Já a fome
                    emocional tende a surgir de repente, está ligada a um desconforto e costuma pedir um alimento específico, geralmente muito palatável.
                </p>
                <p>
                    Ela não é um defeito. É uma estratégia de regulação que aprendemos em algum momento. O problema aparece quando se torna a única forma de
                    lidar com o que sentimos — ou quando vem acompanhada de culpa e de um ciclo de restrição.
                </p>

                <h2>Não é sobre eliminar a emoção</h2>
                <p>
                    Um erro comum é tentar resolver a fome emocional com proibição. “Não posso sentir ansiedade e comer.” Só que sentir ansiedade continua sendo
                    inevitável. Sem outras ferramentas, a proibição aumenta a pressão e a chance de a comida virar o único alívio disponível.
                </p>
                <p>
                    O trabalho não é julgar o que você sente, mas ampliar as possibilidades de resposta. Em vez de “não coma”, a pergunta passa a ser: o que
                    está acontecendo, e o que mais pode ajudar neste momento?
                </p>

                <h2>Como criar outras ferramentas</h2>
                <ul>
                    <li>
                        <strong>Reconhecer o gatilho.</strong> Perceber o que acontece antes da vontade de comer: estresse, cansaço, solidão, tédio, conflito.
                    </li>
                    <li>
                        <strong>Criar pausas.</strong> Uma pausa curta antes de comer pode ajudar a diferenciar fome de impulso, sem transformar isso em regra.
                    </li>
                    <li>
                        <strong>Ampliar o repertório.</strong> Caminhar, respirar, ligar para alguém, escrever, se organizar. Não como substituição obrigatória,
                        mas como opção.
                    </li>
                    <li>
                        <strong>Comer com atenção.</strong> Sentar, perceber os sinais de fome e saciedade e reduzir o automático.
                    </li>
                </ul>

                <h2>Quando buscar ajuda</h2>
                <p>
                    Quando a comida se torna o principal recurso para lidar com emoções, quando há episódios de compulsão, culpa intensa ou sofrimento
                    significativo, vale buscar apoio. Nutrição e saúde mental caminham juntas, e um acompanhamento individual pode ajudar a construir
                    estratégias para o seu momento.
                </p>
                <p>
                    Conheça o <Link to="/acompanhamento-nutricional">Acompanhamento Nutricional</Link> ou entenda melhor a{" "}
                    <Link to="/consultoria-nutricional-online">Consultoria Online de 30 dias</Link>.
                </p>

                <div className="tb-note">
                    Este conteúdo é informativo e não substitui atendimento individual. Se o sofrimento emocional estiver intenso, procure também apoio
                    psicológico ou médico.
                </div>
            </Article>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/blog/fome-emocional"
        title="Fome emocional não é falta de força de vontade | Thaís Basso"
        description="Entenda a diferença entre fome física e fome emocional, por que proibir não funciona e como criar outras ferramentas para lidar com as emoções."
    />
);
