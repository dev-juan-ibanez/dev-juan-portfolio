// =======================
// Gestão de Idiomas
// =======================
const translations = {
  pt: {
    title: "Juan Daniel Ferreira Ibanez",
    meta_description: "Portfólio de Juan Daniel Ferreira Ibanez, desenvolvedor e pesquisador multidisciplinar.",
    meta_author: "Juan Daniel Ferreira Ibanez",
    images_alt: {
      perfil: "Foto de perfil de Juan Ibanez",
      background: "Imagem de fundo",
      apresentacao: "Foto de Juan Ibanez em apresentação de artigo no SBSE 2025",
      ufma_logo: "UFMA Logo",
      estacio_logo: "Estácio Logo",
      undb_logo: "UNDB Logo",
      taskday_logo: "TaskDayPomodoro Logo",
      linktree_logo: "LinkTree Logo",
      gmail_logo: "Gmail Logo",
      linkedin_logo: "LinkedIn Logo",
      github_logo: "GitHub Logo",
      lattes_logo: "Currículum Lattes",
    },
    menu_toggle_aria: "Abrir menu",
    language_select_title: "Selecionar idioma",
    theme_label: "⚙️ Tema",
    nav: {
      home: "Home",
      experiencia: "Experiência",
      educacao: "Educação",
      projetos: "Projetos",
      contatos: "Contato"
    },
    intro: {
      name: "Juan Daniel Ferreira Ibanez",
      bio: "Olá, sou Juan Ibanez! Um programador multidisciplinar que mora em São Luís - MA. Com mais de 5 anos de carreira, encontrei meu propósito em criar soluções inteligentes que unem tecnologia, eficiência e inovação. Tenho experiência em backend, frontend e integração de sistemas, focando em desempenho, segurança e usabilidade. Minha paixão é transformar ideias complexas em aplicações funcionais e escaláveis que impactam positivamente.",
      sobre: "Sou um pensador criativo, solucionador de problemas e eterno aprendiz, sempre explorando novas tecnologias e aprimorando minhas habilidades em programação e engenharia de software. Quando não estou escrevendo código, você pode me encontrar experimentando novas ideias, estudando sobre inteligência artificial ou explorando projetos que unem inovação e impacto real."
    },
    sectionTitles: {
      sobre: "Sobre mim",
      experiencia: "Experiência",
      educacao: "Educação",
      licencas: "Licenças e certificados",
      projetos: "Projetos",
      outros: "Outros destaques",
      habilidades: "Habilidades",
      contatos: "Contatos"
    },
    experiencia: {
      pesquisador: {
        title: "💼 Pesquisador - INEOF (Instituto Nacional de Energias Oceânicas e Fluviais)",
        period: "UFMA – Universidade Federal do Maranhão | Jun. 2023 – Atual | São Luís, MA (Presencial)",
        details: [
          "Desenvolvimento de pesquisas aplicadas na área de <strong>Engenharia Elétrica e Ciência da Computação</strong>, com foco em <strong>engenharia de software, modelagem dirigida a modelos (MDE)</strong> e <strong>arquiteturas Data Lakehouse</strong> para energias renováveis.",
          "Participação em projetos de inovação tecnológica e integração de sistemas inteligentes para coleta e análise de dados de sensores ambientais (LIDAR, SODAR, ADCP).",
          "Atuação em ambiente <strong>Linux</strong>, utilizando linguagens como <strong>Go</strong>, <strong>Python</strong> e <strong>Java</strong>, com ênfase em automação, análise de dados e aplicações de machine learning.",
          "Colaboração com pesquisadores de universidades parceiras (UFRJ, UFSC, UNIFEI, UFPA) em projetos financiados por órgãos de fomento nacionais (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "💼 Co-Fundador - D&R Técnica",
        period: "Out. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsável pela criação, gestão e operação da empresa, atuando nas áreas de administração, contabilidade, marketing e relacionamento com clientes.",
          "Concepção e registro da identidade visual e marca D&R Técnica, incluindo logotipo, comunicação institucional e posicionamento de mercado.",
          "Elaboração de propostas comerciais, gestão financeira, emissão de notas fiscais e acompanhamento contábil.",
          "Implementação de estratégias de crescimento que resultaram na expansão da base de clientes e fortalecimento da marca no setor local.",
          "Supervisão de projetos técnicos."
        ]
      },
      representante: {
        title: "💼 Representante dos alunos de mestrado - UFMA",
        period: "Colegiado de Pós-Graduação em Engenharia Elétrica da UFMA | 09 abr. 2024 – 16 jan. 2026",
        details: [
          "Atuei por quase dois anos representando os alunos de mestrado no colegiado da UFMA.",
          "Contribuí em debates sobre currículo, processos avaliativos, apoio psicossocial e financeiro, infraestrutura de pesquisa e planejamento de longo prazo.",
          "Levei diariamente as vozes, demandas e sugestões dos colegas, equilibrando necessidades individuais e o bem coletivo do programa.",
          "Aprendi na prática escuta ativa, colaboração genuína, negociação construtiva e tomada de decisão coletiva em um ambiente acadêmico plural.",
          "Transformei ideias informais em deliberações oficiais que geraram melhorias concretas e mais acolhimento para os discentes."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "🎓 Mestrado em Engenharia Elétrica – UFMA",
        period: "Ago. 2023 – Jan. 2026",
        dissertation: "“UM FRAMEWORK BASEADO EM DATA LAKEHOUSE PARA ARMAZENAMENTO, ANÁLISE E INTEGRAÇÃO DE DADOS EM SISTEMAS ENERGÉTICOS RENOVÁVEIS”",
        defense: "Defesa em 30 de janeiro de 2026 sob orientação do Prof. Dr. Denivaldo Cícero Pavão Lopes",
        dissertation_label: "Título:",
        summary_label: "Resumo:",
        summary: [
          "Esta dissertação apresenta um framework Data Lakehouse para armazenar, integrar e analisar dados eólicos e maremotrizes no Maranhão.",
          "A arquitetura Bronze → Prata → Ouro preserva a semântica temporal enquanto conecta ingestão, curadoria e produtos analíticos para apoiar decisões energéticas.",
          "TimescaleDB e PostGIS garantem desempenho, georreferenciamento e governança, e validações com campanhas reais evidenciam a aplicabilidade regional."
        ],
        showInList: false,
        keywords_label: "Palavras-chave",
        keywords: [
          "Data Lakehouse",
          "Fontes Renováveis",
          "Séries Temporais",
          "Perfiladores",
          "Transição Energética",
          "Armazenamento de Dados",
          "Integração de Dados Heterogêneos",
          "Governança de Dados"
        ],
        details: [
          "Área de Concentração: Ciência da Computação",
          "Linhas de Pesquisa: Engenharia de Software e Engenharia Dirigida a Modelos (MDE)",
          "Principais Competências: UML, Práticas de Engenharia de Software, Programação, Modelagem de Dados, Big Data"
        ]
      },
      pos: {
        title: "🎓 Pós-graduação Lato Sensu em Engenharia de Software – Estácio",
        period: "jan. 2023 – dez. 2023",
        details: [
          "Nota Final: <strong>9,60</strong>",
          "Disciplinas: Qualidade de Software, Projeto e Implementação OO, Gerenciamento de Software, SOA, Web Services, Otimização de BD, Segurança da Informação.",
          "Competências: HTML, CSS, Gestão de Projetos, Arquitetura de Software"
        ]
      },
      bacharelado: {
        title: "🎓 Bacharelado em Sistemas de Informação – UNDB",
        period: "Fev. 2019 – Dez. 2022",
        dissertation: "“USO DE PESQUISA PARA ANÁLISE DE DADOS COM INTUITO DE EVIDENCIAR QUAIS FATORES ACARRETAM UM AUMENTO NA EVASÃO DE ALUNOS NOS CURSOS DE TECNOLOGIA”",
        dissertation_label: "Título:",
        summary_label: "Resumo:",
        summary: [
          "O objetivo deste trabalho é expor o cenário atual do mercado de trabalho para o setor de TI, a evasão de alunos em cursos de tecnologia no Brasil, além dos principais conceitos de análise e ciência de dados.",
          "Investiga como uma pesquisa apoiada no tratamento de dados e na metodologia SMART pode auxiliar decisões que diminuam a evasão nos cursos de tecnologia das instituições de ensino superior."
        ],
        showInList: false,
        keywords_label: "Palavras-chave",
        keywords: [
          "Análise de Dados",
          "Ciência de Dados",
          "Evasão de Alunos",
          "Mercado de Trabalho",
          "Metodologia SMART"
        ],
        details: [
          "Ênfase em Tecnologia da Informação",
          "Competências: Python, Git, Habilidades Analíticas, Liderança, Gestão de Projetos e Desenvolvimento de Software"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "🏅 Programa Oracle Next Education F2 T7 - Back-End | Alura | dez. 2024",
        details: [
          "Programa de capacitação profissional em parceria com a Oracle.",
          "Foco em desenvolvimento <strong>Back-End</strong>, com ênfase em <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong> e <strong>boas práticas de programação</strong>.",
          "<strong>Código da credencial:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">Clique aqui para exibir o certificado!</a>'
        ]
      },
      google: {
        title: "🏅 Certificado Profissional de Análise de Dados do Google | Coursera | jan. 2023",
        details: [
          "Certificação internacional voltada à <strong>Análise de Dados</strong> e <strong>Business Intelligence</strong>.",
          "Conteúdos principais: limpeza e transformação de dados, uso de <strong>planilhas</strong>, <strong>SQL</strong> e visualização de dados.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">Clique aqui para exibir a credencial!</a>'
        ]
      }
    },
    projetos: {
      taskday: {
        title: "🚀 TaskDayPomodoro - Gerenciador de Tarefas",
        details: [
          "Aplicação web para gerenciar tempo e aumentar produtividade usando a técnica Pomodoro.",
          "Recursos: múltiplos idiomas, temas claro/escuro, estatísticas detalhadas, exportação PNG.",
          "Tecnologias: HTML5, CSS3, JavaScript, Canvas API, localStorage.",
          '<strong>Acessar:</strong> <a href="https://dev-juan-ibanez.github.io/task-day-pomodoro/" target="_blank">dev-juan-ibanez.github.io/task-day-pomodoro</a>',
          '<strong>Repositório:</strong> <a href="https://github.com/dev-juan-ibanez/task-day-pomodoro" target="_blank">github.com/dev-juan-ibanez/task-day-pomodoro</a>'
        ]
      },
      linktree: {
        title: "🚀 Dev Juan Link Tree",
        details: [
          "Página centralizada que conecta projetos, portfólio e redes sociais como desenvolvedor, com design simples e estilizado.",
          "Implementado com HTML5, CSS3 e JavaScript, hospedado via GitHub Pages.",
          '<strong>Acessar:</strong> <a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>',
          '<strong>Repositório:</strong> <a href="https://github.com/dev-juan-ibanez/dev-juan-link-tree" target="_blank">github.com/dev-juan-ibanez/dev-juan-link-tree</a>'
        ]
      }
    },
    outros: {
      sectionTitle: "Outros destaques",
      book: {
        title: "📖 Crônicas de Yundraw: A Guerra dos Deuses — Ato I",
        tagline: "Em Yundraw, o mundo não é governado apenas por reis, impérios ou exércitos — ele é moldado por escolhas antigas, silêncios convenientes e sistemas que aprendem a se alimentar daquilo que as pessoas preferem esquecer.",
        summary: [
          "Quando forças que deveriam proteger passam a moldar vidas como recursos descartáveis, quatro figuras improváveis — Alice, marcada por cicatrizes físicas e mágicas que não permitem esquecimento; Bjor, cuja força carrega mais luto do que glória; Lucius, o mago que tenta impor ética à lógica de um mundo injusto; e Stefan, cuja ironia esconde perdas irreparáveis — são arrastadas para o centro de um conflito anterior à própria existência.",
          "Atravessar florestas que julgam, cidades que mentem e pântanos que observam se transforma em confrontação direta com cultos que pregam paz enquanto drenam essência, nobres que mascaram crueldade com civilidade e sábios que tratam vidas como variáveis aceitáveis.",
          "Cada escolha cobra um preço real: não há vitórias limpas, o passado insiste e o futuro exige pagamentos antecipados. Crônicas de Yundraw: A Guerra dos Deuses — Ato I é sobre quem resiste sem se tornar parte da engrenagem e sobre o custo de ver sem desviar o olhar; no fim, Yundraw não pergunta quem merece sobreviver, mas quem paga para continuar enxergando."
        ],
        cta_label: "Comprar na Amazon Brasil",
        cta_url: "https://www.amazon.com.br/dp/B0GFG1T37Y"
      }
    },
    habilidades: {
      title: "Habilidades",
      details: [
        "🎯 Desenvolvimento Back End (Node.js, Golang, Python);",
        "🎯 Banco de dados (PostgreSQL, MySQL, SQLite);",
        "🎯 Front End (React.js, TypeScript, Vite);",
        "🎯 Machine Learning aplicado a dados e sistemas inteligentes;",
        "🎯 Metodologias Ágeis (Scrum);",
        "🎯 Design de Interfaces (UI) e Experiência do Usuário (UX);",
        "🎯 Ferramentas de produtividade (Excel, PowerPoint, Word);",
        "🎯 Sistemas Operacionais: Mac OS, Windows, Linux;",
        "🎯 Prototipagem e wireframes."
      ]
    },
    contatos: {
      intro: "Vamos criar algo incrível juntos! Fale comigo em:",
      email: "📬 E-mail: dev.juan.ibanez@gmail.com",
      linkedin: "🔗 LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "🔗 Portfólio: github.com/dev-juan-ibanez",
      lattes: "🔗 Currículo Lattes: https://lattes.cnpq.br/1029223661167123",
      orcid: "🔗 ORCID: https://orcid.org/0009-0001-9387-0704"
    },
    footer: "© 2025 — Todos os direitos reservados. 🚀",
    theme: "⚙️ Tema:",
    language: "🌐 Idioma:"
  },
  en: {
    title: "Juan Daniel Ferreira Ibanez",
    meta_description: "Portfolio of Juan Daniel Ferreira Ibanez, a multidisciplinary developer and researcher.",
    meta_author: "Juan Daniel Ferreira Ibanez",
    images_alt: {
      perfil: "Profile picture of Juan Ibanez",
      background: "Background image",
      apresentacao: "Photo of Juan Ibanez presenting a paper at SBSE 2025",
      ufma_logo: "UFMA Logo",
      estacio_logo: "Estácio Logo",
      undb_logo: "UNDB Logo",
      taskday_logo: "TaskDayPomodoro Logo",
      linktree_logo: "LinkTree Logo",
      gmail_logo: "Gmail Logo",
      linkedin_logo: "LinkedIn Logo",
      github_logo: "GitHub Logo",
      lattes_logo: "CV Lattes logo",
    },
    menu_toggle_aria: "Open menu",
    language_select_title: "Select language",
    theme_label: "⚙️ Theme",
    nav: {
      home: "Home",
      experiencia: "Experience",
      educacao: "Education",
      projetos: "Projects",
      contatos: "Contact"
    },
    intro: {
      name: "Juan Daniel Ferreira Ibanez",
      bio: "Hello, I'm Juan Ibanez! A multidisciplinary programmer based in São Luís - MA. With over 5 years of experience, I found my purpose in creating intelligent solutions that combine technology, efficiency, and innovation. I have expertise in backend, frontend, and system integration, focusing on performance, security, and usability. My passion is transforming complex ideas into functional and scalable applications that make a positive impact.",
      sobre: "I am a creative thinker, problem solver, and lifelong learner, always exploring new technologies and enhancing my skills in programming and software engineering. When I'm not coding, you can find me experimenting with new ideas, studying artificial intelligence, or exploring projects that blend innovation with real-world impact."
    },
    sectionTitles: {
      sobre: "About Me",
      experiencia: "Experience",
      educacao: "Education",
      licencas: "Licenses and Certifications",
      projetos: "Projects",
      outros: "Other highlights",
      habilidades: "Skills",
      contatos: "Contact"
    },
    experiencia: {
      pesquisador: {
        title: "💼 Researcher - INEOF (National Institute of Oceanic and Fluvial Energies)",
        period: "UFMA – Federal University of Maranhão | Jun. 2023 – Present | São Luís, MA (In-person)",
        details: [
          "Conducted applied research in <strong>Electrical Engineering and Computer Science</strong>, focusing on <strong>software engineering, model-driven engineering (MDE)</strong>, and <strong>Data Lakehouse architectures</strong> for renewable energies.",
          "Participated in technological innovation projects and integration of intelligent systems for collecting and analyzing environmental sensor data (LIDAR, SODAR, ADCP).",
          "Worked in a <strong>Linux</strong> environment, using languages such as <strong>Go</strong>, <strong>Python</strong>, and <strong>Java</strong>, with an emphasis on automation, data analysis, and machine learning applications.",
          "Collaborated with researchers from partner universities (UFRJ, UFSC, UNIFEI, UFPA) on projects funded by national agencies (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "💼 Co-Founder - D&R Técnica",
        period: "Oct. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsible for the creation, management, and operation of the company, working in administration, accounting, marketing, and client relations.",
          "Designed and registered the visual identity and brand D&R Técnica, including logo, institutional communication, and market positioning.",
          "Prepared commercial proposals, managed finances, issued invoices, and oversaw accounting.",
          "Implemented growth strategies that led to an expanded client base and strengthened the brand in the local market.",
          "Supervised technical projects."
        ]
      },
      representante: {
        title: "💼 Master's Student Representative - UFMA",
        period: "UFMA Graduate Committee for Electrical Engineering | Apr. 9, 2024 – Jan. 16, 2026 | São Luís, MA (In-person)",
        details: [
          "Served nearly two years as the master's student representative on UFMA's graduate committee.",
          "Engaged in strategic discussions about curriculum, evaluation processes, psychosocial and financial student support, research infrastructure, and long-term planning.",
          "Carried peers' voices, demands, and suggestions to the committee daily, balancing individual needs with the program's collective good.",
          "Practiced active listening, genuine collaboration, constructive negotiation, and collective decision-making within a plural academic environment.",
          "Helped turn informal ideas into official deliberations that delivered concrete improvements and better support for students."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "🎓 Master's in Electrical Engineering – UFMA",
        period: "Aug. 2023 – Jan. 2026",
        dissertation: "“UM FRAMEWORK BASEADO EM DATA LAKEHOUSE PARA ARMAZENAMENTO, ANÁLISE E INTEGRAÇÃO DE DADOS EM SISTEMAS ENERGÉTICOS RENOVÁVEIS”",
        defense: "Defended on January 30, 2026 under advisor Prof. Dr. Denivaldo Cícero Pavão Lopes",
        dissertation_label: "Title:",
        summary_label: "Summary:",
        summary: [
          "Proposes the FIDLER framework to store, integrate, and analyze wind and tidal energy data from Maranhão within a Data Lakehouse.",
          "Bronze → Silver → Gold layers preserve temporal semantics while linking ingestion, curation, analytics, governance, and AI (autoencoders) for energy planning.",
          "TimescaleDB and PostGIS optimize queries and georeferencing; validations with real campaigns support time-series analytics and regional energy-transition decisions."
        ],
        showInList: false,
        keywords_label: "Keywords",
        keywords: [
          "Data Lakehouse",
          "Renewable Sources",
          "Time Series",
          "Profilers",
          "Energy Transition",
          "Data Storage",
          "Heterogeneous Data Integration",
          "Data Governance"
        ],
        details: [
          "Concentration Area: Computer Science",
          "Research Lines: Software Engineering and Model-Driven Engineering (MDE)",
          "Key Competencies: UML, Software Engineering Practices, Programming, Data Modeling, Big Data"
        ]
      },
      pos: {
        title: "🎓 Postgraduate Lato Sensu in Software Engineering – Estácio",
        period: "Jan. 2023 – Dec. 2023",
        details: [
          "Final Grade: <strong>9.60</strong>",
          "Courses: Software Quality, Object-Oriented Design and Implementation, Software Management, SOA, Web Services, Database Optimization, Information Security.",
          "Competencies: HTML, CSS, Project Management, Software Architecture"
        ]
      },
      bacharelado: {
        title: "🎓 Bachelor's in Information Systems – UNDB",
        period: "Feb. 2019 – Dec. 2022",
        dissertation: "“USO DE PESQUISA PARA ANÁLISE DE DADOS COM INTUITO DE EVIDENCIAR QUAIS FATORES ACARRETAM UM AUMENTO NA EVASÃO DE ALUNOS NOS CURSOS DE TECNOLOGIA”",
        dissertation_label: "Title:",
        summary_label: "Summary:",
        summary: [
          "This work outlines the current landscape of the IT job market, dropout in technology courses in Brazil, and the core concepts of both data analysis and data science.",
          "It explores how research that combines data treatment practices with the SMART methodology can inform decisions aimed at reducing dropout in higher-education technology programs."
        ],
        showInList: false,
        keywords_label: "Keywords",
        keywords: [
          "Data Analysis",
          "Data Science",
          "Student Dropout",
          "Job Market",
          "SMART Methodology"
        ],
        details: [
          "Emphasis on Information Technology",
          "Competencies: Python, Git, Analytical Skills, Leadership, Project Management, and Software Development"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "🏅 Oracle Next Education F2 T7 Program - Back-End | Alura | Dec. 2024",
        details: [
          "Professional training program in partnership with Oracle.",
          "Focus on <strong>Back-End</strong> development, emphasizing <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong>, and <strong>programming best practices</strong>.",
          "<strong>Credential Code:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">Click here to view the certificate!</a>'
        ]
      },
      google: {
        title: "🏅 Google Professional Data Analytics Certificate | Coursera | Jan. 2023",
        details: [
          "International certification focused on <strong>Data Analysis</strong> and <strong>Business Intelligence</strong>.",
          "Main Content: Data cleaning and transformation, use of <strong>spreadsheets</strong>, <strong>SQL</strong>, <strong>R</strong>, and data visualization.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">Click here to view the credential!</a>'
        ]
      }
    },
    projetos: {
      taskday: {
        title: "🚀 TaskDayPomodoro - Task Manager",
        details: [
          "Web application to manage time and increase productivity using the Pomodoro technique.",
          "Features: multiple languages, light/dark themes, detailed statistics, PNG export.",
          "Technologies: HTML5, CSS3, JavaScript, Canvas API, localStorage.",
          '<strong>Access:</strong> <a href="https://dev-juan-ibanez.github.io/task-day-pomodoro/" target="_blank">dev-juan-ibanez.github.io/task-day-pomodoro</a>',
          '<strong>Repository:</strong> <a href="https://github.com/dev-juan-ibanez/task-day-pomodoro" target="_blank">github.com/dev-juan-ibanez/task-day-pomodoro</a>'
        ]
      },
      linktree: {
        title: "🚀 Dev Juan Link Tree",
        details: [
          "Centralized page connecting projects, portfolio, and social networks as a developer, with a simple and stylish design.",
          "Implemented with HTML5, CSS3, and JavaScript, hosted via GitHub Pages.",
          '<strong>Access:</strong> <a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>',
          '<strong>Repository:</strong> <a href="https://github.com/dev-juan-ibanez/dev-juan-link-tree" target="_blank">github.com/dev-juan-ibanez/dev-juan-link-tree</a>'
        ]
      }
    },
    outros: {
      sectionTitle: "Other highlights",
      book: {
        title: "📖 Crônicas de Yundraw: The War of the Gods — Act I",
        tagline: "In Yundraw, the world is not governed solely by kings, empires, or armies — it is shaped by ancient choices, convenient silences, and systems that learn to feed on what people prefer to forget.",
        summary: [
          "When forces meant to protect begin shaping lives as disposable resources, four unlikely figures—Alice with scars that forbid forgetting, Bjor whose strength carries more grief than glory, Lucius the mage trying to impose ethics on an unjust logic, and Stefan whose irony hides irreparable losses—are dragged into a conflict that predates themselves.",
          "Their passage through forests that judge, cities that lie, and swamps that watch becomes a direct confrontation with cults preaching peace while draining essence, nobles masking cruelty with civility, and sages who treat lives as acceptable variables.",
          "Every choice exacts a real price: there are no clean victories, the past refuses to stay buried, and the future demands payment up front. Crônicas de Yundraw: The War of the Gods — Act I explores who resists without joining the machine and who has the courage to pay to see without looking away. In the end, Yundraw does not ask who deserves to survive — it only asks who is willing to pay the cost of seeing."
        ],
        cta_label: "Buy on Amazon Brazil",
        cta_url: "https://www.amazon.com.br/dp/B0GFG1T37Y"
      }
    },
    habilidades: {
      title: "Skills",
      details: [
        "🎯 Back-End Development (Node.js, Golang, Python);",
        "🎯 Databases (PostgreSQL, MySQL, SQLite);",
        "🎯 Front-End (React.js, TypeScript, Vite);",
        "🎯 Machine Learning applied to data and intelligent systems;",
        "🎯 Agile Methodologies (Scrum);",
        "🎯 Interface Design (UI) and User Experience (UX);",
        "🎯 Productivity tools (Excel, PowerPoint, Word);",
        "🎯 Operating Systems: Mac OS, Windows, Linux;",
        "🎯 Prototyping and wireframes."
      ]
    },
    contatos: {
      intro: "Let's create something amazing together! Reach out to me at:",
      email: "📬 Email: dev.juan.ibanez@gmail.com",
      linkedin: "🔗 LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "🔗 Portfolio: github.com/dev-juan-ibanez",
      lattes: "🔗 CV Lattes: https://lattes.cnpq.br/1029223661167123",
      orcid: "🔗 ORCID: https://orcid.org/0009-0001-9387-0704"
    },
    footer: "© 2025 — All rights reserved. 🚀",
    theme: "⚙️ Theme:",
    language: "🌐 Language:"
  },
  es: {
    title: "Juan Daniel Ferreira Ibanez",
    meta_description: "Portafolio de Juan Daniel Ferreira Ibanez, desarrollador e investigador multidisciplinario.",
    meta_author: "Juan Daniel Ferreira Ibanez",
    images_alt: {
      perfil: "Foto de perfil de Juan Ibanez",
      background: "Imagen de fondo",
      apresentacao: "Foto de Juan Ibanez presentando un artículo en SBSE 2025",
      ufma_logo: "Ícono de UFMA",
      estacio_logo: "Ícono de Estácio",
      undb_logo: "Ícono de UNDB",
      taskday_logo: "TaskDayPomodoro Logo",
      linktree_logo: "LinkTree Logo",
      gmail_logo: "Ícono de Gmail",
      linkedin_logo: "Ícono de LinkedIn",
      github_logo: "Ícono de GitHub",
      lattes_logo: "Ícono de Currículum Lattes"
    },
    menu_toggle_aria: "Abrir menú",
    language_select_title: "Seleccionar idioma",
    theme_label: "⚙️ Tema",
    nav: {
      home: "Inicio",
      experiencia: "Experiencia",
      educacao: "Educación",
      projetos: "Proyectos",
      contatos: "Contacto"
    },
    intro: {
      name: "Juan Daniel Ferreira Ibanez",
      bio: "¡Hola, soy Juan Ibanez! Un programador multidisciplinario que vive en São Luís - MA. Con más de 5 años de experiencia, encontré mi propósito en crear soluciones inteligentes que combinan tecnología, eficiencia e innovación. Tengo experiencia en backend, frontend e integración de sistemas, enfocándome en rendimiento, seguridad y usabilidad. Mi pasión es transformar ideas complejas en aplicaciones funcionales y escalables que generen un impacto positivo.",
      sobre: "Soy un pensador creativo, solucionador de problemas y aprendiz eterno, siempre explorando nuevas tecnologías y mejorando mis habilidades en programación e ingeniería de software. Cuando no estoy programando, puedes encontrarme experimentando con nuevas ideas, estudiando inteligencia artificial o explorando proyectos que combinan innovación con impacto real."
    },
    sectionTitles: {
      sobre: "Sobre mí",
      experiencia: "Experiencia",
      educacao: "Educación",
      licencas: "Licencias y certificaciones",
      projetos: "Proyectos",
      outros: "Otros destacados",
      habilidades: "Habilidades",
      contatos: "Contacto"
    },
    experiencia: {
      pesquisador: {
        title: "💼 Investigador - INEOF (Instituto Nacional de Energías Oceánicas y Fluviales)",
        period: "UFMA – Universidad Federal de Maranhão | Jun. 2023 – Actual | São Luís, MA (Presencial)",
        details: [
          "Realicé investigaciones aplicadas en <strong>Ingeniería Eléctrica y Ciencias de la Computación</strong>, con enfoque en <strong>ingeniería de software, ingeniería dirigida por modelos (MDE)</strong> y <strong>arquitecturas Data Lakehouse</strong> para energías renovables.",
          "Participé en proyectos de innovación tecnológica e integración de sistemas inteligentes para la recolección y análisis de datos de sensores ambientales (LIDAR, SODAR, ADCP).",
          "Trabajé en un entorno <strong>Linux</strong>, utilizando lenguajes como <strong>Go</strong>, <strong>Python</strong> y <strong>Java</strong>, con énfasis en automatización, análisis de datos y aplicaciones de machine learning.",
          "Colaboré con investigadores de universidades asociadas (UFRJ, UFSC, UNIFEI, UFPA) en proyectos financiados por agencias nacionales (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "💼 Co-Fundador - D&R Técnica",
        period: "Oct. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsable de la creación, gestión y operación de la empresa, trabajando en administración, contabilidad, marketing y relaciones con clientes.",
          "Diseñé y registré la identidad visual y la marca D&R Técnica, incluyendo el logotipo, la comunicación institucional y el posicionamiento en el mercado.",
          "Elaboré propuestas comerciales, gestioné finanzas, emití facturas y supervisé la contabilidad.",
          "Implementé estrategias de crecimiento que resultaron en la expansión de la base de clientes y el fortalecimiento de la marca en el mercado local.",
          "Supervisado proyectos técnicos."
        ]
      },
      representante: {
        title: "💼 Representante de los estudiantes de maestría - UFMA",
        period: "Colegio de Posgrado en Ingeniería Eléctrica de la UFMA | 09 abr. 2024 – 16 ene. 2026",
        details: [
          "Serví casi dos años como representante de los alumnos de maestría en el colegiado de la UFMA.",
          "Participé en discusiones estratégicas sobre currículo, procesos evaluativos, apoyo psicosocial y financiero, infraestructura de investigación y planificación a largo plazo.",
          "Llevé diariamente las voces, demandas y sugerencias de los compañeros al colegiado, equilibrando necesidades individuales con el bien colectivo.",
          "Viví la escucha activa, colaboración genuina, negociación constructiva y toma de decisiones colectivas en un entorno académico plural.",
          "Contribuí a convertir ideas informales en deliberaciones oficiales que generaron mejoras concretas y mayor acompañamiento para los estudiantes."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "🎓 Maestría en Ingeniería Eléctrica – UFMA",
        period: "Ago. 2023 – Ene. 2026",
        dissertation: "“UM FRAMEWORK BASEADO EM DATA LAKEHOUSE PARA ARMAZENAMENTO, ANÁLISE E INTEGRAÇÃO DE DADOS EM SISTEMAS ENERGÉTICOS RENOVÁVEIS”",
        defense: "Defensa el 30 de enero de 2026 con asesoría del Prof. Dr. Denivaldo Cícero Pavão Lopes",
        dissertation_label: "Título:",
        summary_label: "Resumen:",
        summary: [
          "Presenta el marco FIDLER para almacenar, integrar y analizar los datos eólicos y maremotrices de Maranhão a través de un Data Lakehouse.",
          "Las capas Bronze → Prata → Ouro preservan la semántica temporal al conectar ingestión, curaduría, analítica, gobernanza e IA (autoencoders) para la planificación energética.",
          "TimescaleDB y PostGIS optimizan consultas y georreferenciamiento; las validaciones con campañas reales respaldan análisis de series temporales y decisiones de transición energética regional."
        ],
        showInList: false,
        keywords_label: "Palabras clave",
        keywords: [
          "Data Lakehouse",
          "Fuentes Renovables",
          "Series Temporales",
          "Perfiladores",
          "Transición Energética",
          "Almacenamiento de Datos",
          "Integración de Datos Heterogéneos",
          "Gobernanza de Datos"
        ],
        details: [
          "Área de Concentración: Ciencias de la Computación",
          "Líneas de Investigación: Ingeniería de Software e Ingeniería Dirigida por Modelos (MDE)",
          "Competencias Clave: UML, Prácticas de Ingeniería de Software, Programación, Modelado de Datos, Big Data"
        ]
      },
      pos: {
        title: "🎓 Posgrado Lato Sensu en Ingeniería de Software – Estácio",
        period: "Ene. 2023 – Dic. 2023",
        details: [
          "Nota Final: <strong>9,60</strong>",
          "Asignaturas: Calidad de Software, Diseño e Implementación Orientada a Objetos, Gestión de Software, SOA, Servicios Web, Optimización de BD, Seguridad de la Información.",
          "Competencias: HTML, CSS, Gestión de Proyectos, Arquitectura de Software"
        ]
      },
      bacharelado: {
        title: "🎓 Licenciatura en Sistemas de Información – UNDB",
        period: "Feb. 2019 – Dic. 2022",
        dissertation: "“USO DE PESQUISA PARA ANÁLISE DE DADOS COM INTUITO DE EVIDENCIAR QUAIS FATORES ACARRETAM UM AUMENTO NA EVASÃO DE ALUNOS NOS CURSOS DE TECNOLOGIA”",
        dissertation_label: "Título:",
        summary_label: "Resumen:",
        summary: [
          "El objetivo de este trabajo es exponer el panorama actual del mercado laboral para el sector TI, la deserción en cursos de tecnología en Brasil y los conceptos clave de análisis y ciencia de datos.",
          "Examinar cómo una investigación que aprovecha el tratamiento de datos junto con la metodología SMART puede respaldar decisiones orientadas a reducir la deserción en programas tecnológicos de educación superior."
        ],
        showInList: false,
        keywords_label: "Palabras clave",
        keywords: [
          "Análisis de Datos",
          "Ciencia de Datos",
          "Deserción de Estudiantes",
          "Mercado Laboral",
          "Metodología SMART"
        ],
        details: [
          "Énfasis en Tecnología de la Información",
          "Competencias: Python, Git, Habilidades Analíticas, Liderazgo, Gestión de Proyectos y Desarrollo de Software"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "🏅 Programa Oracle Next Education F2 T7 - Back-End | Alura | Dic. 2024",
        details: [
          "Programa de capacitación profesional en colaboración con Oracle.",
          "Enfoque en desarrollo <strong>Back-End</strong>, con énfasis en <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong> y <strong>buenas prácticas de programación</strong>.",
          "<strong>Código de credencial:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">¡Haga clic aquí para ver el certificado!</a>'
        ]
      },
      google: {
        title: "🏅 Certificado Profesional de Análisis de Datos de Google | Coursera | Ene. 2023",
        details: [
          "Certificación internacional enfocada en <strong>Análisis de Datos</strong> e <strong>Inteligencia de Negocios</strong>.",
          "Contenidos principales: limpieza y transformación de datos, uso de <strong>hojas de cálculo</strong>, <strong>SQL</strong>, <strong>R</strong> y visualización de datos.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">¡Haga clic aquí para ver la credencial!</a>'
        ]
      }
    },
    projetos: {
      taskday: {
        title: "🚀 TaskDayPomodoro - Gestor de Tareas",
        details: [
          "Aplicación web para gestionar el tiempo y aumentar la productividad usando la técnica Pomodoro.",
          "Características: múltiples idiomas, temas claro/oscuro, estadísticas detalladas, exportación PNG.",
          "Tecnologías: HTML5, CSS3, JavaScript, Canvas API, localStorage.",
          '<strong>Acceder:</strong> <a href="https://dev-juan-ibanez.github.io/task-day-pomodoro/" target="_blank">dev-juan-ibanez.github.io/task-day-pomodoro</a>',
          '<strong>Repositorio:</strong> <a href="https://github.com/dev-juan-ibanez/task-day-pomodoro" target="_blank">github.com/dev-juan-ibanez/task-day-pomodoro</a>'
        ]
      },
      linktree: {
        title: "🚀 Dev Juan Link Tree",
        details: [
          "Página centralizada que conecta proyectos, portafolio y redes sociales como desarrollador, con un diseño simple y elegante.",
          "Implementado con HTML5, CSS3 y JavaScript, alojado a través de GitHub Pages.",
          '<strong>Acceder:</strong> <a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>',
          '<strong>Repositorio:</strong> <a href="https://github.com/dev-juan-ibanez/dev-juan-link-tree" target="_blank">github.com/dev-juan-ibanez/dev-juan-link-tree</a>'
        ]
      }
    },
    outros: {
      sectionTitle: "Otros destacados",
      book: {
        title: "📖 Crónicas de Yundraw: La Guerra de los Dioses — Acto I",
        tagline: "En Yundraw, el mundo no está gobernado solo por reyes, imperios o ejércitos — se moldea con decisiones antiguas, silencios convenientes y sistemas que aprenden a alimentarse de lo que la gente prefiere olvidar.",
        summary: [
          "Cuando las fuerzas que deberían proteger empiezan a tratar vidas como recursos desechables, cuatro figuras improbables — Alice con cicatrices que impiden el olvido, Bjor cuya fuerza arrastra más luto que gloria, Lucius el mago que intenta imponer ética a una lógica injusta, y Stefan cuya ironía esconde pérdidas irreparables — son arrastradas a un conflicto que precede su propia existencia.",
          "Su travesía por bosques que juzgan, ciudades que mienten y pantanos que observan se transforma en confrontación directa con cultos que predican paz mientras drenan esencia, nobles que ocultan crueldad con civilidad y sabios que tratan vidas como variables aceptables.",
          "Cada elección cobra un precio real: no hay victorias limpias, el pasado insiste y el futuro exige pagos anticipados. Crónicas de Yundraw: La Guerra de los Dioses — Acto I habla de quién resiste sin convertirse en engranaje y de quién está dispuesto a pagar el costo de ver sin apartar la mirada. Al final, Yundraw no pregunta quién merece sobrevivir; solo pregunta quién está dispuesto a pagar para realmente ver."
        ],
        cta_label: "Comprar en Amazon Brasil",
        cta_url: "https://www.amazon.com.br/dp/B0GFG1T37Y"
      }
    },
    habilidades: {
      title: "Habilidades",
      details: [
        "🎯 Desarrollo Back-End (Node.js, Golang, Python);",
        "🎯 Bases de datos (PostgreSQL, MySQL, SQLite);",
        "🎯 Front-End</strong> (React.js, TypeScript, Vite);",
        "🎯 Machine Learning aplicado a datos y sistemas inteligentes;",
        "🎯 Metodologías Ágiles (Scrum);",
        "🎯 Diseño de Interfaces (UI) y Experiencia del Usuario (UX);",
        "🎯 Herramientas de productividad (Excel, PowerPoint, Word);",
        "🎯 Sistemas Operativos: Mac OS, Windows, Linux;",
        "🎯 Prototipado y wireframes."
      ]
    },
    contatos: {
      intro: "¡Creemos algo increíble juntos! Contáctame en:",
      email: "📬 Correo: dev.juan.ibanez@gmail.com",
      linkedin: "🔗 LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "🔗 Portafolio: github.com/dev-juan-ibanez",
      lattes: "🔗 Currículum Lattes: https://lattes.cnpq.br/1029223661167123",
      orcid: "🔗 ORCID: https://orcid.org/0009-0001-9387-0704"
    },
    footer: "© 2025 — Todos los derechos reservados. 🚀",
    theme: "⚙️ Tema:",
    language: "🌐 Idioma:"
  }
};

/**
 * Normaliza a pontuação dos itens de lista.
 * Remove ponto ou ponto e vírgula final e adiciona
 * ";" nos itens intermediários e "." no último.
 */
function formatListItem(text, isLast) {
  if (!text) return "";
  const trimmedRight = text.replace(/\s+$/, "");
  const base = trimmedRight.replace(/[.;]$/, "");
  const suffix = isLast ? "." : ";";
  return `${base}${suffix}`;
}

// =======================
// Gestão de Idiomas
// =======================
function getBrowserLang() {
  const lang = navigator.language.slice(0, 2);
  return ["pt", "en", "es"].includes(lang) ? lang : "pt";
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang + (lang === "pt" ? "-br" : "");
  const t = translations[lang];

  // Atualiza metadados
  document.title = t.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", t.meta_description);
  const metaAuthor = document.querySelector('meta[name="author"]');
  if (metaAuthor) metaAuthor.setAttribute("content", t.meta_author);

  // Atualiza atributos alt das imagens
  const avatar = document.querySelector(".avatar");
  if (avatar) avatar.setAttribute("alt", t.images_alt.perfil);
  const introAvatar = document.querySelector(".intro-avatar");
  if (introAvatar) introAvatar.setAttribute("alt", t.images_alt.perfil);
  const backgroundImg = document.querySelector(".background-img");
  if (backgroundImg) backgroundImg.setAttribute("alt", t.images_alt.background);
  const introPhotoImg = document.querySelector(".intro-photo img");
  if (introPhotoImg) introPhotoImg.setAttribute("alt", t.images_alt.apresentacao);
  const ufmaLogo = document.querySelector(".education-item:nth-child(1) .education-logo");
  if (ufmaLogo) ufmaLogo.setAttribute("alt", t.images_alt.ufma_logo);
  const estacioLogo = document.querySelector(".education-item:nth-child(2) .education-logo");
  if (estacioLogo) estacioLogo.setAttribute("alt", t.images_alt.estacio_logo);
  const undbLogo = document.querySelector(".education-item:nth-child(3) .education-logo");
  if (undbLogo) undbLogo.setAttribute("alt", t.images_alt.undb_logo);
  const taskdayLogo = document.querySelector("#projetos article:nth-child(1) .project-logo");
  if (taskdayLogo) taskdayLogo.setAttribute("alt", t.images_alt.taskday_logo);
  const linktreeLogo = document.querySelector("#projetos article:nth-child(2) .project-logo");
  if (linktreeLogo) linktreeLogo.setAttribute("alt", t.images_alt.linktree_logo);
  const gmailLogo = document.querySelector(".contact-list li:nth-child(1) .contact-logo");
  if (gmailLogo) gmailLogo.setAttribute("alt", t.images_alt.gmail_logo);
  const linkedinLogo = document.querySelector(".contact-list li:nth-child(2) .contact-logo");
  if (linkedinLogo) linkedinLogo.setAttribute("alt", t.images_alt.linkedin_logo);
  const githubLogo = document.querySelector(".contact-list li:nth-child(3) .contact-logo");
  if (githubLogo) githubLogo.setAttribute("alt", t.images_alt.github_logo);
  const lattesLogo = document.querySelector(".contact-list li:nth-child(4) .contact-logo");
  if (lattesLogo) lattesLogo.setAttribute("alt", t.images_alt.lattes_logo);
  const orcidLogo = document.querySelector(".contact-list li:nth-child(5) .contact-logo");
  if (orcidLogo) orcidLogo.setAttribute("alt", "ORCID Logo");

  // Atualiza aria-label do botão de menu
  const menuToggle = document.querySelector("#menuToggle");
  if (menuToggle) menuToggle.setAttribute("aria-label", t.menu_toggle_aria);

  // Atualiza textos do cabeçalho
  const avatarText = document.querySelector(".avatar-text");
  if (avatarText) avatarText.textContent = t.title;
  const introName = document.querySelector(".intro-name");
  if (introName) introName.textContent = t.intro.name;

  // Atualiza rótulos de tema e idioma
  const themeLabel = document.querySelector(".theme-label");
  if (themeLabel) themeLabel.textContent = t.theme_label;
  const themeSwitch = document.querySelector(".theme-switch");
  if (themeSwitch) themeSwitch.setAttribute("title", t.theme);
  const languageSwitchLabel = document.querySelector(".language-switch label");
  if (languageSwitchLabel) languageSwitchLabel.textContent = t.language;
  const languageSelect = document.querySelector("#languageSelect");
  if (languageSelect) languageSelect.setAttribute("title", t.language_select_title);

  // Atualiza navegação
  const navLinks = document.querySelectorAll(".navbar a");
  if (navLinks.length >= 5) {
    navLinks[0].setAttribute("href", "#intro");
    navLinks[0].innerHTML = `<img src="assets/home.png" alt="${t.nav.home} Icon" class="nav-icon" /><span>${t.nav.home}</span>`;
    navLinks[1].setAttribute("href", "#experiencia");
    navLinks[1].innerHTML = `<img src="assets/experiencia.png" alt="${t.nav.experiencia} Icon" class="nav-icon" /><span>${t.nav.experiencia}</span>`;
    navLinks[2].setAttribute("href", "#educacao");
    navLinks[2].innerHTML = `<img src="assets/educacao.png" alt="${t.nav.educacao} Icon" class="nav-icon" /><span>${t.nav.educacao}</span>`;
    navLinks[3].setAttribute("href", "#projetos");
    navLinks[3].innerHTML = `<img src="assets/projetos.png" alt="${t.nav.projetos} Icon" class="nav-icon" /><span>${t.nav.projetos}</span>`;
    navLinks[4].setAttribute("href", "#contatos");
    navLinks[4].innerHTML = `<img src="assets/contatos.png" alt="${t.nav.contatos} Icon" class="nav-icon" /><span>${t.nav.contatos}</span>`;
  }

  // Atualiza seções
  const sobreH2 = document.querySelector("#sobre h2");
  if (sobreH2) sobreH2.textContent = t.sectionTitles.sobre;
  const sobreP = document.querySelector("#sobre p");
  if (sobreP) sobreP.textContent = t.intro.sobre;

  const introBioP = document.querySelector("#bio .intro-bio p");
  if (introBioP) introBioP.innerHTML = t.intro.bio;

  // Experiência
  const experienciaH2 = document.querySelector("#experiencia h2");
  if (experienciaH2) experienciaH2.textContent = t.sectionTitles.experiencia;
  const experienciaArticles = document.querySelectorAll("#experiencia article");
  const experienciaData = [
    t.experiencia.pesquisador,
    t.experiencia.representante,
    t.experiencia.cofundador
  ];
  experienciaArticles.forEach((article, index) => {
    const role = experienciaData[index];
    if (!role) return;
    const roleH3 = article.querySelector("h3");
    const roleP = article.querySelector("p");
    const roleLis = article.querySelectorAll("ul li");
    if (roleH3) roleH3.innerHTML = role.title;
    if (roleP) roleP.innerHTML = role.period;
    const roleDetailsLength = role.details.length;
    roleLis.forEach((li, i) => {
      if (i < roleDetailsLength) {
        li.innerHTML = formatListItem(role.details[i], i === roleDetailsLength - 1);
      }
    });
  });

  // Educação
  const educacaoH2 = document.querySelector("#educacao h2");
  if (educacaoH2) educacaoH2.textContent = t.sectionTitles.educacao;
  const educacaoArticles = document.querySelectorAll("#educacao article.education-item");
  if (educacaoArticles.length >= 3) {
    const mestradoH3 = educacaoArticles[0].querySelector("h3");
    const mestradoP = educacaoArticles[0].querySelector("p");
    const mestradoLis = educacaoArticles[0].querySelectorAll("ul li");
    const mestradoList = educacaoArticles[0].querySelector("ul");
    if (mestradoH3) mestradoH3.innerHTML = t.educacao.mestrado.title;
    if (mestradoP) mestradoP.innerHTML = t.educacao.mestrado.period;
    const mestradoDetails = t.educacao.mestrado.details;
    if (t.educacao.mestrado.showInList) {
      mestradoLis.forEach((li, i) => {
        if (i < mestradoDetails.length) {
          li.innerHTML = formatListItem(mestradoDetails[i], i === mestradoDetails.length - 1);
        }
      });
      if (mestradoList) mestradoList.style.display = "";
    } else {
      mestradoLis.forEach((li) => (li.innerHTML = ""));
      if (mestradoList) mestradoList.style.display = "none";
    }
    const extra = educacaoArticles[0].querySelector(".education-extra");
    if (extra) {
      const dissertationTitle = extra.querySelector(".education-dissertation-title");
      const defense = extra.querySelector(".education-defense");
      const summaryContainer = extra.querySelector(".education-summary");
      const keywords = extra.querySelector(".education-keywords");
      if (dissertationTitle) {
        dissertationTitle.innerHTML = `<strong>${t.educacao.mestrado.dissertation_label}</strong> ${t.educacao.mestrado.dissertation}`;
      }
      if (defense) defense.innerHTML = t.educacao.mestrado.defense;
      if (summaryContainer) {
        summaryContainer.innerHTML = "";
        const summaryLabel = document.createElement("p");
        summaryLabel.className = "education-summary-label";
        summaryLabel.textContent = t.educacao.mestrado.summary_label;
        summaryContainer.appendChild(summaryLabel);
        t.educacao.mestrado.summary.forEach((text) => {
          const p = document.createElement("p");
          p.textContent = text;
          summaryContainer.appendChild(p);
        });
      }
      if (keywords) {
        keywords.textContent = `${t.educacao.mestrado.keywords_label}: ${t.educacao.mestrado.keywords.join(", ")}`;
      }
      let detailsContainer = extra.querySelector(".education-details");
      if (!detailsContainer) {
        detailsContainer = document.createElement("div");
        detailsContainer.className = "education-details";
        extra.appendChild(detailsContainer);
      }
      if (detailsContainer) {
        detailsContainer.innerHTML = "";
        const detailsList = document.createElement("ul");
        detailsList.className = "education-details-list";
        const mestradoDetailsList = t.educacao.mestrado.details;
        mestradoDetailsList.forEach((detail, index) => {
          const li = document.createElement("li");
          li.textContent = formatListItem(detail, index === mestradoDetailsList.length - 1);
          detailsList.appendChild(li);
        });
        detailsContainer.appendChild(detailsList);
      }
    }

    const bacharelExtra = educacaoArticles[2].querySelector(".education-extra");
    if (bacharelExtra) {
      const dissertationTitle = bacharelExtra.querySelector(".education-dissertation-title");
      const defense = bacharelExtra.querySelector(".education-defense");
      const summaryContainer = bacharelExtra.querySelector(".education-summary");
      const keywords = bacharelExtra.querySelector(".education-keywords");
      if (dissertationTitle) {
        dissertationTitle.innerHTML = `<strong>${t.educacao.bacharelado.dissertation_label}</strong> ${t.educacao.bacharelado.dissertation}`;
      }
      if (defense && t.educacao.bacharelado.defense) {
        defense.innerHTML = t.educacao.bacharelado.defense;
      }
      if (summaryContainer) {
        summaryContainer.innerHTML = "";
        const summaryLabel = document.createElement("p");
        summaryLabel.className = "education-summary-label";
        summaryLabel.textContent = t.educacao.bacharelado.summary_label;
        summaryContainer.appendChild(summaryLabel);
        t.educacao.bacharelado.summary.forEach((text) => {
          const p = document.createElement("p");
          p.textContent = text;
          summaryContainer.appendChild(p);
        });
      }
      if (keywords) {
        keywords.textContent = `${t.educacao.bacharelado.keywords_label}: ${t.educacao.bacharelado.keywords.join(", ")}`;
      }
      let detailsContainer = bacharelExtra.querySelector(".education-details");
      if (!detailsContainer) {
        detailsContainer = document.createElement("div");
        detailsContainer.className = "education-details";
        bacharelExtra.appendChild(detailsContainer);
      }
      if (detailsContainer) {
        detailsContainer.innerHTML = "";
        const detailsList = document.createElement("ul");
        detailsList.className = "education-details-list";
        const bachareladoDetailsList = t.educacao.bacharelado.details;
        bachareladoDetailsList.forEach((detail, index) => {
          const li = document.createElement("li");
          li.textContent = formatListItem(detail, index === bachareladoDetailsList.length - 1);
          detailsList.appendChild(li);
        });
        detailsContainer.appendChild(detailsList);
      }
    }

    const posH3 = educacaoArticles[1].querySelector("h3");
    const posP = educacaoArticles[1].querySelector("p");
    const posLis = educacaoArticles[1].querySelectorAll("ul li");
    if (posH3) posH3.innerHTML = t.educacao.pos.title;
    if (posP) posP.innerHTML = t.educacao.pos.period;
    const posDetails = t.educacao.pos.details;
    posLis.forEach((li, i) => {
      if (i < posDetails.length) {
        li.innerHTML = formatListItem(posDetails[i], i === posDetails.length - 1);
      }
    });

    const bachareladoH3 = educacaoArticles[2].querySelector("h3");
    const bachareladoP = educacaoArticles[2].querySelector("p");
    const bachareladoList = educacaoArticles[2].querySelector("ul");
    const bachareladoLis = bachareladoList ? bachareladoList.querySelectorAll("li") : [];
    if (bachareladoH3) bachareladoH3.innerHTML = t.educacao.bacharelado.title;
    if (bachareladoP) bachareladoP.innerHTML = t.educacao.bacharelado.period;
    if (t.educacao.bacharelado.showInList) {
      const bachareladoDetails = t.educacao.bacharelado.details;
      bachareladoLis.forEach((li, i) => {
        if (i < bachareladoDetails.length) {
          li.innerHTML = formatListItem(bachareladoDetails[i], i === bachareladoDetails.length - 1);
        }
      });
      if (bachareladoList) bachareladoList.style.display = "";
    } else {
      bachareladoLis.forEach((li) => (li.innerHTML = ""));
      if (bachareladoList) bachareladoList.style.display = "none";
    }
  }

  // Licenças
  const licencasH2 = document.querySelector("#licencas h2");
  if (licencasH2) licencasH2.textContent = t.sectionTitles.licencas;
  const licencasArticles = document.querySelectorAll("#licencas article");
  if (licencasArticles.length >= 2) {
    licencasArticles.forEach((article, index) => {
      if (index === 0) {
        const oracleH3 = article.querySelector("h3");
        const oracleLis = article.querySelectorAll("ul li");
        if (oracleH3) oracleH3.innerHTML = t.licencas.oracle.title;
        const oracleDetails = t.licencas.oracle.details;
        oracleLis.forEach((li, i) => {
          if (i < oracleDetails.length) {
            li.innerHTML = formatListItem(oracleDetails[i], i === oracleDetails.length - 1);
          }
        });
      } else if (index === 1) {
        const googleH3 = article.querySelector("h3");
        const googleLis = article.querySelectorAll("ul li");
        if (googleH3) googleH3.innerHTML = t.licencas.google.title;
        const googleDetails = t.licencas.google.details;
        googleLis.forEach((li, i) => {
          if (i < googleDetails.length) {
            li.innerHTML = formatListItem(googleDetails[i], i === googleDetails.length - 1);
          }
        });
      }
    });
  }

  // Projetos - ATUALIZADO para usar TaskDayPomodoro
  const projetosH2 = document.querySelector("#projetos h2");
  if (projetosH2) projetosH2.textContent = t.sectionTitles.projetos;
  const projetosArticles = document.querySelectorAll("#projetos article");
  if (projetosArticles.length >= 2) {
    const taskdayH3 = projetosArticles[0].querySelector("h3");
    const taskdayLis = projetosArticles[0].querySelectorAll("ul li");
    if (taskdayH3) taskdayH3.innerHTML = t.projetos.taskday.title;
    const taskdayDetails = t.projetos.taskday.details;
    taskdayLis.forEach((li, i) => {
      if (i < taskdayDetails.length) {
        li.innerHTML = formatListItem(taskdayDetails[i], i === taskdayDetails.length - 1);
      }
    });

    const linktreeH3 = projetosArticles[1].querySelector("h3");
    const linktreeLis = projetosArticles[1].querySelectorAll("ul li");
    if (linktreeH3) linktreeH3.innerHTML = t.projetos.linktree.title;
    const linktreeDetails = t.projetos.linktree.details;
    linktreeLis.forEach((li, i) => {
      if (i < linktreeDetails.length) {
        li.innerHTML = formatListItem(linktreeDetails[i], i === linktreeDetails.length - 1);
      }
    });
  }

  const outrosSection = document.querySelector("#outros");
  if (outrosSection) {
    const outrosH2 = outrosSection.querySelector("h2");
    if (outrosH2) outrosH2.textContent = t.sectionTitles.outros;
    const bookTitle = outrosSection.querySelector(".book-title");
    if (bookTitle) bookTitle.textContent = t.outros.book.title;
    const taglineP = outrosSection.querySelector(".book-tagline");
    if (taglineP) taglineP.textContent = t.outros.book.tagline;
    const summaryEls = [
      outrosSection.querySelector(".book-summary-1"),
      outrosSection.querySelector(".book-summary-2"),
      outrosSection.querySelector(".book-summary-3")
    ];
    summaryEls.forEach((el, idx) => {
      if (el && idx < t.outros.book.summary.length) el.textContent = t.outros.book.summary[idx];
    });
    const bookCta = outrosSection.querySelector(".book-cta");
    if (bookCta) {
      bookCta.textContent = t.outros.book.cta_label;
      bookCta.setAttribute("href", t.outros.book.cta_url);
    }
  }

  // Habilidades
  const habilidadesH2 = document.querySelector("#habilidades h2");
  if (habilidadesH2) habilidadesH2.textContent = t.sectionTitles.habilidades;
  const habilidadesLis = document.querySelectorAll("#habilidades ul li");
  habilidadesLis.forEach((li, i) => {
    if (i < t.habilidades.details.length) li.innerHTML = t.habilidades.details[i];
  });

  // Contatos
  const contatosH2 = document.querySelector("#contatos h2");
  if (contatosH2) contatosH2.textContent = t.sectionTitles.contatos;
  const contatosP = document.querySelector("#contatos p");
  if (contatosP) contatosP.textContent = t.contatos.intro;
  const contactSpans = document.querySelectorAll("#contatos .contact-list li a span");
  if (contactSpans.length >= 5) {
    contactSpans[0].textContent = t.contatos.email;
    contactSpans[1].textContent = t.contatos.linkedin;
    contactSpans[2].textContent = t.contatos.github;
    contactSpans[3].textContent = t.contatos.lattes;
    contactSpans[4].textContent = t.contatos.orcid;
  }

  const footerP = document.querySelector("footer p");
  if (footerP) footerP.textContent = t.footer;
}

// =======================
// Alternância de Tema (Dark/Light)
// =======================
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", currentTheme);
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.checked = currentTheme === "dark";

  // Flag to track if the user has manually set a theme
  const hasManualTheme = savedTheme !== null;
  localStorage.setItem("hasManualTheme", hasManualTheme ? "true" : "false");
}

// Função para aplicar o tema
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.checked = theme === "dark";
  document.body.style.transition = "background-color 0.4s ease, color 0.4s ease";
}

function toggleTheme() {
  const checkbox = document.getElementById("themeToggle");
  if (checkbox) {
    const newTheme = checkbox.checked ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("hasManualTheme", "true"); // Marca que o tema foi alterado manualmente
  }
}

// Listener para mudanças no prefers-color-scheme
function handleSystemThemeChange(e) {
  const hasManualTheme = localStorage.getItem("hasManualTheme") === "true";
  if (!hasManualTheme) {
    const newTheme = e.matches ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
}

// =======================
// Menu Responsivo (Hambúrguer)
// =======================
function toggleMenu() {
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotNav = document.getElementById("themeSlotNav");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");
  const languageWrapper = document.getElementById("languageToggleWrapperHeader");

  if (!nav || !toggleBtn || !themeSlotNav || !themeSlotHeader) return;

  const isOpening = !nav.classList.contains("active");

  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");

  // Move o switch de tema e o seletor de idioma para dentro do menu ao abrir, e de volta ao header ao fechar
  if (isOpening) {
    if (themeWrapper && themeSlotNav) {
      themeSlotNav.appendChild(themeWrapper);
      themeWrapper.style.marginBottom = "1rem";
    }
    if (languageWrapper && themeSlotNav) {
      themeSlotNav.appendChild(languageWrapper);
      languageWrapper.style.marginBottom = "1rem";
    }
  } else {
    if (themeWrapper && themeSlotHeader) {
      themeSlotHeader.appendChild(themeWrapper);
      themeWrapper.style.marginBottom = "";
    }
    if (languageWrapper && themeSlotHeader) {
      themeSlotHeader.appendChild(languageWrapper);
      languageWrapper.style.marginBottom = "";
    }
  }
}

// =======================
// Fechar o menu ao clicar em um link
// =======================
function closeMenuOnLinkClick() {
  const links = document.querySelectorAll(".navbar a");
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");
  const languageWrapper = document.getElementById("languageToggleWrapperHeader");

  if (!nav || !toggleBtn || !themeSlotHeader) return;

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggleBtn.classList.remove("active");

      // Retorna o botão de tema e o seletor de idioma para o header
      if (themeWrapper && themeSlotHeader && !themeSlotHeader.contains(themeWrapper)) {
        themeSlotHeader.appendChild(themeWrapper);
        themeWrapper.style.marginBottom = "";
      }
      if (languageWrapper && themeSlotHeader && !themeSlotHeader.contains(languageWrapper)) {
        themeSlotHeader.appendChild(languageWrapper);
        languageWrapper.style.marginBottom = "";
      }
    });
  });
}

// =======================
// Garantir o comportamento correto no resize
// =======================
function handleResize() {
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");
  const languageWrapper = document.getElementById("languageToggleWrapperHeader");

  if (window.innerWidth > 768 && nav && toggleBtn && themeSlotHeader) {
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");

    // Garante que o switch e o seletor de idioma voltem ao header no modo desktop
    if (themeWrapper && !themeSlotHeader.contains(themeWrapper)) {
      themeSlotHeader.appendChild(themeWrapper);
      themeWrapper.style.marginBottom = "";
    }
    if (languageWrapper && !themeSlotHeader.contains(languageWrapper)) {
      themeSlotHeader.appendChild(languageWrapper);
      languageWrapper.style.marginBottom = "";
    }
  }
}

// =======================
// Inicialização
// =======================
document.addEventListener("DOMContentLoaded", () => {
  setInitialTheme();

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) themeToggle.addEventListener("change", toggleTheme);

  // Adiciona listener para mudanças no prefers-color-scheme
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addEventListener("change", handleSystemThemeChange);

  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) menuToggle.addEventListener("click", toggleMenu);

  const savedLang = localStorage.getItem("language") || getBrowserLang();
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = savedLang;
    setLanguage(savedLang);
    languageSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  closeMenuOnLinkClick();
  window.addEventListener("resize", handleResize);
});
