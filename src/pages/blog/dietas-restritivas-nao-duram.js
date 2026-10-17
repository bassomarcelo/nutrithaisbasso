import { Link } from "gatsby";
import React from "react";
import Article from "../../components/blog/Article";
import Layout from "../../components/common/Layout";
import Seo from "../../components/common/Seo";

export default function DietasRestritivasNaoDuram() {
    return (
        <Layout>
            <Article
                category="Comportamento alimentar"
                title="Por que dietas restritivas não duram"
                intro="Se você já começou uma dieta com toda a determinação do mundo e desistiu semanas depois, a conclusão mais comum é: falta de força de vontade. Mas a explicação é bem diferente."
                date="Outubro de 2026"
                readingTime="5 min de leitura"
            >
                <h2>O que a restrição faz com o corpo e com a cabeça</h2>
                <p>
                    Dietas muito restritivas criam um cenário difícil de sustentar. Quando a quantidade de comida ou a variedade de alimentos cai de forma
                    brusca, o corpo entende que precisa economizar e aumenta os sinais de fome. Ao mesmo tempo, a mente passa a pensar em comida com mais
                    frequência.
                </p>
                <p>
                    O resultado costuma ser previsível: uma refeição fora do plano vira “falha”, a falha gera culpa, a culpa leva a mais restrição, e a
                    restrição termina em uma compulsão. Depois, o ciclo recomeça na segunda-feira seguinte.
                </p>
                <p>
                    Isso não é fraqueza. É fisiologia e comportamento se encontrando. Quanto mais proibimos um alimento, mais ele ganha poder. Quanto mais
                    apertamos as regras, mais frágil fica a rotina.
                </p>

                <h2>Por que a força de vontade não é o problema</h2>
                <p>
                    A força de vontade é uma ferramenta útil, mas limitada. Ela não deveria ser o único sustento de um plano alimentar. Se a sua alimentação
                    depende de você resistir o dia inteiro a tudo o que gosta, alguma hora o cansaço vence.
                </p>
                <p>
                    O ambiente também importa: a geladeira, o trabalho, os horários, a família, as comemorações. Um plano que ignora esses fatores não está
                    sendo rigoroso; está sendo irreal.
                </p>

                <h2>O que funciona no lugar da dieta</h2>
                <ul>
                    <li>
                        <strong>Flexibilidade com estrutura.</strong> Ter referências de refeições e combinações, sem transformar cada escolha em uma regra
                        absoluta.
                    </li>
                    <li>
                        <strong>Aprender trocas.</strong> Entender como substituir alimentos por equivalentes possíveis é mais sustentável do que decorar um
                        cardápio fixo.
                    </li>
                    <li>
                        <strong>Olhar para o comportamento.</strong> Identificar gatilhos, fomes e momentos de maior vulnerabilidade permite criar estratégias
                        reais.
                    </li>
                    <li>
                        <strong>Resultado construído, não arrancado.</strong> Mudanças graduais e consistentes tendem a durar mais do que perdas rápidas
                        seguidas de recuperação.
                    </li>
                </ul>

                <h2>Um caminho possível</h2>
                <p>
                    Comer bem não precisa ser sinônimo de comer pouco nem de abrir mão de tudo. O objetivo é construir uma relação mais tranquila com a comida,
                    com escolhas que você consiga repetir na vida real.
                </p>
                <p>
                    Se você quer entender como esse processo funciona na prática, conheça o{" "}
                    <Link to="/acompanhamento-nutricional">Acompanhamento Nutricional</Link> e o{" "}
                    <Link to="/metodo-seja-real-nao-perfeito">Método Seja Real, Não Perfeito</Link>.
                </p>

                <div className="tb-note">
                    Este conteúdo é informativo e não substitui uma avaliação nutricional individual. Cada pessoa tem uma história, uma rotina e necessidades
                    próprias.
                </div>
            </Article>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/blog/dietas-restritivas-nao-duram"
        title="Por que dietas restritivas não duram | Thaís Basso"
        description="Entenda por que dietas restritivas costumam falhar e o que funciona no lugar da restrição: flexibilidade, autonomia e mudança de comportamento."
    />
);
