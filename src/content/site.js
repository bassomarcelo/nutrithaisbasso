// Conteúdo central do site.
// Altere aqui textos, links e valores para atualizar todas as páginas.

export const WHATSAPP_NUMBER = "5554997119446";
export const PHONE_DISPLAY = "(54) 99711-9446";
export const EMAIL = "nutricionistathaisb@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/nutrithaisbasso";
export const ADDRESS = {
    street: "Rua Humberto Accorsi, n° 230 - Sala 02",
    building: "Edifício Rádio Estação, bairro Aurora",
    city: "CEP 95185-000 - Carlos Barbosa/RS",
    maps: "https://www.google.com/maps/place/Tha%C3%ADs+Basso+Nutricionista+Funcional+e+comportamental/@-29.2939876,-51.4989672,17z/data=!4m8!3m7!1s0x951c195e1b1bb64f:0x5e8468a758137428!8m2!3d-29.2939923!4d-51.4963869!9m1!1b1!16s%2Fg%2F11p0_77cs2?hl=pt-BR&entry=ttu",
};

export const whatsappLink = (message = "Olá, Thaís! Quero saber mais sobre o acompanhamento nutricional.") =>
    `https://api.whatsapp.com/send?1=pt_BR&phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

export const SOCIAL_LINKS = [
    { icon: "fa-instagram", href: INSTAGRAM, label: "Instagram" },
    { icon: "fa-facebook", href: "https://www.facebook.com/nutricionistathaisb", label: "Facebook" },
    { icon: "fa-whatsapp", href: whatsappLink(), label: "WhatsApp" },
    { icon: "fa-youtube", href: "https://www.youtube.com/channel/UCACMTraiEAeIf0pZ552PNZg", label: "YouTube" },
];

export const NAV_LINKS = [
    { name: "Início", to: "/" },
    { name: "Acompanhamento", to: "/acompanhamento-nutricional" },
    { name: "Método", to: "/metodo-seja-real-nao-perfeito" },
    { name: "Consultoria", to: "/consultoria-nutricional-online" },
    { name: "Reset 21", to: "/desafio-reset-21" },
    { name: "Sobre", to: "/sobre" },
    { name: "Blog", to: "/blog" },
    { name: "Contato", to: "/contato" },
];

export const PRICES = {
    acompanhamento: {
        first: "R$ 350,00",
        firstLabel: "Primeira consulta + retorno",
        return: "R$ 200,00",
        returnLabel: "Retorno avulso",
    },
    consultoria: "R$ 197,00",
    reset: "R$ 97,00",
};

export const PRODUCTS = {
    acompanhamento: {
        name: "Acompanhamento Nutricional",
        label: "Produto principal",
        description:
            "Um processo individual e contínuo para mudar a relação com a comida, criar hábitos possíveis e sustentar os resultados com saúde.",
        price: "Primeira consulta + retorno por " + PRICES.acompanhamento.first,
        href: "/acompanhamento-nutricional",
        cta: "Quero iniciar meu acompanhamento",
        message: "Olá, Thaís! Quero iniciar meu acompanhamento nutricional.",
        includes: [
            "Anamnese completa e avaliação física",
            "Plano alimentar personalizado para a sua rotina",
            "Cardápios ilustrados e trocas inteligentes",
            "Retornos para ajustar o caminho",
            "Suporte por WhatsApp entre as consultas",
        ],
    },
    consultoria: {
        name: "Consultoria Online – 30 dias",
        label: "Outra forma de começar",
        description:
            "Um primeiro direcionamento online para organizar a alimentação, tirar dúvidas e dar o primeiro passo com segurança.",
        price: PRICES.consultoria,
        href: "/consultoria-nutricional-online",
        cta: "Conhecer a consultoria",
        message: "Olá, Thaís! Quero saber mais sobre a Consultoria Online de 30 dias.",
    },
    reset: {
        name: "Desafio Reset 21",
        label: "Produto de entrada",
        description:
            "21 dias para sair do automático, reorganizar a rotina e sentir o que é possível sem dieta restritiva.",
        price: PRICES.reset,
        href: "/desafio-reset-21",
        cta: "Conhecer o Reset 21",
        message: "Olá, Thaís! Quero entrar no Desafio Reset 21.",
    },
};

export const METHOD_PHASES = [
    {
        number: "01",
        title: "Realidade, não perfeição",
        text: "O primeiro passo é olhar para a sua rotina como ela é: horários, trabalho, família, cansaço e preferências. Sem julgamento e sem um plano impossível de seguir.",
        icon: "fa-hand-holding-heart",
    },
    {
        number: "02",
        title: "Entender o porquê",
        text: "Comida também é emoção, cultura e companhia. Vamos identificar gatilhos, fomes e crenças para que a mudança não dependa apenas de força de vontade.",
        icon: "fa-brain",
    },
    {
        number: "03",
        title: "Construir o possível",
        text: "Com um plano personalizado e cardápios ilustrados, você aprende combinações e trocas reais para comer bem em casa, no trabalho ou na vida social.",
        icon: "fa-seedling",
    },
    {
        number: "04",
        title: "Sustentar a autonomia",
        text: "Nos retornos, ajustamos o caminho e fortalecemos hábitos que continuam depois da consulta. O objetivo é autonomia, não dependência de dieta.",
        icon: "fa-compass",
    },
];

export const TESTIMONIALS = [
    {
        name: "Andressa Morari Canal",
        text: "Aprendi a fazer trocas inteligentes de alimentos que muitas vezes escolhia por costume. Com um plano adaptado às minhas necessidades, entendi que comer bem não é difícil: precisa de dedicação e organização.",
        link: "https://g.co/kgs/gpcbHb",
        avatar: "andressa-morari-canal.png",
    },
    {
        name: "Vitória Tesser Henkes",
        text: "Atendimento profissional, cuidadoso e humano! A Thaís mantém excelentes acompanhamentos com os pacientes e tem visões amplas sobre saúde e alimentação, proporcionando muita qualidade de vida.",
        link: "https://g.co/kgs/AFdNLb",
        avatar: "vitoria-tesser-henkes.png",
    },
    {
        name: "Taís Macena de Oliveira",
        text: "Me fez ver a comida de outra forma. Percebi o impacto da alimentação de uma forma completa. Diferente de outras experiências que tive, que só mostravam déficit calórico e nada mais.",
        link: "https://g.co/kgs/PkKpVj",
        avatar: null,
    },
    {
        name: "Priscila Merzoni",
        text: "Ela sabe ouvir e entender nossas dificuldades e conseguiu fazer um plano alimentar que eu também conseguisse seguir sem restrições. Nunca havia conseguido seguir uma dieta por mais de 15 dias; já estamos a um mês e sigo no caminho.",
        link: "https://g.co/kgs/RQHyF6",
        avatar: null,
    },
    {
        name: "Lisiane Delai",
        text: "O que mais me deixa satisfeita é saber que nada é restringido: eu escolho o que quero comer. A perda de peso aconteceu sem que eu percebesse. Essa liberdade é importante para que o processo se torne um hábito.",
        link: "https://g.co/kgs/9zVbu4",
        avatar: null,
    },
];

export const HOME_FAQ = [
    {
        question: "Preciso seguir uma dieta restritiva?",
        answer:
            "Não. O trabalho é construído com comida de verdade, respeitando a sua rotina, as suas preferências e a sua cultura alimentar. O plano é flexível e ensina trocas para que você tenha autonomia.",
    },
    {
        question: "O acompanhamento pode ser online?",
        answer:
            "Sim. O acompanhamento presencial acontece em Carlos Barbosa/RS e o online atende pessoas de qualquer lugar, com a mesma profundidade de avaliação e acompanhamento.",
    },
    {
        question: "Quanto tempo dura o processo?",
        answer:
            "Cada pessoa tem um tempo. A primeira consulta e o retorno inicial já organizam o caminho. A partir daí, a frequência dos retornos é definida em conjunto, de acordo com o seu objetivo e a sua rotina.",
    },
    {
        question: "Como funcionam os valores e o pagamento?",
        answer:
            "Os valores são sempre visíveis aqui no site. O pagamento pode ser feito via PIX, débito, crédito ou link de pagamento. Entre em contato para verificar as condições de parcelamento.",
    },
];

export const FAQ = {
    acompanhamento: [
        ...HOME_FAQ,
        {
            question: "Qual é a diferença entre acompanhamento e consultoria?",
            answer:
                "O acompanhamento é um processo contínuo, com retornos e ajustes ao longo do tempo. A consultoria de 30 dias é um direcionamento pontual, indicado para quem precisa de um primeiro apoio e prefere começar de forma mais leve.",
        },
    ],
    consultoria: [
        {
            question: "Como funciona a consultoria online?",
            answer:
                "Você preenche um questionário antes do encontro, conversamos por videochamada e recebe um plano alimentar personalizado, com orientações e cardápios ilustrados para os 30 dias.",
        },
        {
            question: "A consultoria substitui o acompanhamento?",
            answer:
                "Não. Ela é uma forma de começar. Se, durante o processo, você sentir que precisa de ajustes mais próximos e de um acompanhamento contínuo, podemos evoluir para o Acompanhamento Nutricional.",
        },
        {
            question: "Preciso ter exames recentes?",
            answer:
                "Não é obrigatório, mas se você tiver exames recentes, eles ajudam a individualizar as orientações. Também posso solicitar exames quando fizer sentido para o seu caso.",
        },
    ],
    reset: [
        {
            question: "O Reset 21 é uma dieta?",
            answer:
                "Não. São 21 dias de reorganização de rotina, com orientações práticas, desafios e conteúdo sobre alimentação, sono, movimento e comportamento. A proposta é criar clareza e consistência, não restrição.",
        },
        {
            question: "Preciso de acompanhamento individual para participar?",
            answer:
                "Não. O Desafio foi pensado como porta de entrada e pode ser feito de forma independente. Se você quiser um plano individual depois, ele é um ótimo primeiro passo para o acompanhamento.",
        },
        {
            question: "Como recebo o conteúdo?",
            answer:
                "O conteúdo é entregue em um grupo fechado, com materiais, desafios e encontros de apoio durante os 21 dias.",
        },
    ],
};
