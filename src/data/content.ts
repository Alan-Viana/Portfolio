export const content = {
  social: {
    github: "https://github.com/Alan-Viana",
    linkedin: "https://www.linkedin.com/in/alan-viana7/",
  },
  hero: {
    name: "Alan Viana",
    role: "Desenvolvedor Front-End",
    tagline: "Alan Viana",
    intro: "",
    image: "/profile.jpg", 
    buttons: {
      projects: "Ver Projetos",
      cv: "Download CV"
    },
  },
  about: {
    windowTitle: "Sobre.txt - Bloco de Notas",
    shortBio: {
      intro: "Desenvolvedor Front-End & Estudante de TI (UNIVESP).  Construindo interfaces modernas com foco em performance, acessibilidade e código limpo. Dedicado ao desenvolvimento de aplicações web eficientes, busco aplicar o pensamento analítico para transformar desafios reais em experiências digitais centradas no usuário.",
      stackTitle: "Stacks:",
      stack: [
        "- React",
        "- TypeScript",
        "- Node.js",
      ]
    },
    fullBio: {
      title: "",
      backgroundTitle: "Sobre:",
      background: [
        "Meu fascínio pela tecnologia nasceu da curiosidade em entender como ela molda a conexão humana. Aos 13 anos, meu primeiro computador foi o laboratório onde tudo começou: entre personalizar temas em HTML para o Tumblr e configurar protocolos via Hamachi, descobri que a tecnologia é, antes de tudo, uma ferramenta de viabilização.",
        "Minha trajetória profissional anterior consolidou uma maturidade que hoje aplico diretamente no desenvolvimento de software.",
        "Esse histórico me moldou na resolução de problemas complexos e na compreensão de necessidades reais, permitindo-me unir a lógica da programação a uma visão crítica e humanizada sobre a experiência do usuário",
      ],
      educationTitle: "Formação, cursos e capacitações:",
      education: [
        "Bacharelado em Tecnologia da Informação — UNIVESP (4ºSemestre)",
        "Oracle Next Education (ONE) — Desenvolvimento Front-End: Especialização em JavaScript e React (Alura)",
        "Meta Developer — Curso introdutório a programação e desenvolvimento (Meta)",
      ],
      skillsTitle: "Habilidades Técnicas",
      skills: [
        { label: "Frontend", items: "React, TypeScript, Tailwind CSS" },
        { label: "Backend", items: "Node.js" },
        { label: "Ferramentas", items: "Git, Figma" },
        { label: "Metodologias", items: "Scrum" }
      ],
    },
  },
  projects: {
    sectionTitle: "Projetos:",
    path: "~/src/projetos",
    openButton: "Abrir",
    list: [
      {
        title: "PopInfo",
        description: "Plataforma de cadastro e consulta de serviços socioassistenciais e doações em São Paulo.",
        tags: ["React", "Tailwind", "TypeScript"],
        githubUrl: "https://github.com/Alan-Viana/popinfo",
        deployUrl: "https://popinfo.vercel.app/",
        image: "https://placehold.co/600x400/1e293b/33ff33?text=PopInfo",
    
      },
      {
        title: "Desafio Decodificador de Texto",
        description: "Decodificador de texto com algoritmos de substituição e manipulação de strings em tempo real.",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Alan-Viana/Challenge-Decodificador-de-Texto?tab=readme-ov-file",
        deployUrl: "https://alan-viana.github.io/Challenge-Decodificador-de-Texto/",
        image: "https://placehold.co/600x400/1e293b/33ff33?text=Decodificador",
      
      },
      {
        title: "Sistema de Criação de Personagem",
        description: "Sistema interativo para criação e gerenciamento de atributos de personagens de RPG.",
        tags: ["JavaScript", "Node.js"],
        githubUrl: "https://github.com/Alan-Viana/RPG-Projeto-Netuno",
        image: "/rpg-system.png",
       
      },
      {
        title: "Desafio Portfólio",
        description: "Landing page para prática de semântica HTML e fundamentos de estilização responsiva.",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Alan-Viana/Challenge_Portfolio_Alura",
        deployUrl: "https://alan-viana.github.io/Challenge_Portfolio_Alura/",
        image: "https://placehold.co/600x400/1e293b/33ff33?text=Portfolio+Alura",
      
      }
    ]
  },
  contact: {
    title: "Contato :",
    subtitle: "Para colaborações, dúvidas ou sugestões, sinta-se à vontade para me escrever.",
    form: {
      name: "Nome Completo",
      namePlaceholder: "Nome Completo",
      email: "E-mail",
      emailPlaceholder: "exemplo@email.com",
      phone: "Telefone",
      phonePlaceholder: "+55 (11) 99999-9999",
      subject: "Assunto",
      subjectPlaceholder: "Assunto",
      message: "Mensagem",
      messagePlaceholder: "Sinta-se à vontade para descrever sua ideia...",
      submit: "Enviar Mensagem"
    },
    footer: "© Alan Viana 2026 ."
  }
};
