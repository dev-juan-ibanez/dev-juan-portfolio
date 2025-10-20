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
      sobre: "👨‍💻 Sobre mim",
      experiencia: "💼 Experiência",
      educacao: "🎓 Educação",
      licencas: "🏅 Licenças e certificados",
      projetos: "🚀 Projetos",
      habilidades: "🔨 Habilidades",
      contatos: "📬 Contatos"
    },
    experiencia: {
      pesquisador: {
        title: "Pesquisador - INEOF (Instituto Nacional de Energias Oceânicas e Fluviais)",
        period: "UFMA – Universidade Federal do Maranhão | Jun. 2023 – Atual | São Luís, MA (Presencial)",
        details: [
          "Desenvolvimento de pesquisas aplicadas na área de <strong>Engenharia Elétrica e Ciência da Computação</strong>, com foco em <strong>engenharia de software, modelagem dirigida a modelos (MDE)</strong> e <strong>arquiteturas Data Lakehouse</strong> para energias renováveis.",
          "Participação em projetos de inovação tecnológica e integração de sistemas inteligentes para coleta e análise de dados de sensores ambientais (LIDAR, SODAR, ADCP).",
          "Atuação em ambiente <strong>Linux</strong>, utilizando linguagens como <strong>Go</strong>, <strong>Python</strong> e <strong>Java</strong>, com ênfase em automação, análise de dados e aplicações de machine learning.",
          "Colaboração com pesquisadores de universidades parceiras (UFRJ, UFSC, UNIFEI, UFPA) em projetos financiados por órgãos de fomento nacionais (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "Co-Fundador - D&R Técnica",
        period: "Out. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsável pela criação, gestão e operação da empresa, atuando nas áreas de administração, contabilidade, marketing e relacionamento com clientes.",
          "Concepção e registro da identidade visual e marca D&R Técnica, incluindo logotipo, comunicação institucional e posicionamento de mercado.",
          "Elaboração de propostas comerciais, gestão financeira, emissão de notas fiscais e acompanhamento contábil.",
          "Implementação de estratégias de crescimento que resultaram na expansão da base de clientes e fortalecimento da marca no setor local.",
          "Supervisão de projetos técnicos."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "Mestrado em Engenharia Elétrica – UFMA",
        period: "Início em ago. 2023 | Previsão de conclusão – jan. 2026",
        details: [
          "Área de Concentração: Ciência da Computação",
          "Linhas de Pesquisa: Engenharia de Software e Engenharia Dirigida a Modelos (MDE)",
          "Principais Competências: UML, Práticas de Engenharia de Software, Programação, Modelagem de Dados, Big Data"
        ]
      },
      pos: {
        title: "Pós-graduação Lato Sensu em Engenharia de Software – Estácio",
        period: "jan. 2023 – dez. 2023",
        details: [
          "Nota Final: <strong>9,60</strong>",
          "Disciplinas: Qualidade de Software, Projeto e Implementação OO, Gerenciamento de Software, SOA, Web Services, Otimização de BD, Segurança da Informação.",
          "Competências: HTML, CSS, Gestão de Projetos, Arquitetura de Software"
        ]
      },
      bacharelado: {
        title: "Bacharelado em Sistemas de Informação – UNDB",
        period: "fev. 2019 – dez. 2022",
        details: [
          "Ênfase em Tecnologia da Informação",
          "Competências: Python, Git, Habilidades Analíticas, Liderança, Gestão de Projetos e Desenvolvimento de Software"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "Programa Oracle Next Education F2 T7 - Back-End | Alura | dez. 2024",
        details: [
          "Programa de capacitação profissional em parceria com a Oracle.",
          "Foco em desenvolvimento <strong>Back-End</strong>, com ênfase em <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong> e <strong>boas práticas de programação</strong>.",
          "<strong>Código da credencial:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">Clique aqui para exibir o certificado!</a>'
        ]
      },
      google: {
        title: "Certificado Profissional de Análise de Dados do Google | Coursera | jan. 2023",
        details: [
          "Certificação internacional voltada à <strong>Análise de Dados</strong> e <strong>Business Intelligence</strong>.",
          "Conteúdos principais: limpeza e transformação de dados, uso de <strong>planilhas</strong>, <strong>SQL</strong> e visualização de dados.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">Clique aqui para exibir a credencial!</a>'
        ]
      }
    },
    projetos: {
      gofinance: {
        title: "Aplicação Go Finance",
        details: [
          "Sistema web full stack desenvolvido com foco em gestão financeira inteligente, permitindo o controle de receitas, despesas e relatórios personalizados.",
          "Implementado utilizando Golang (backend), PostgreSQL (banco de dados) e Next.js (frontend).",
          '<a href="https://github.com/Juan-Ibanezdf/gofinance" target="_blank">github.com/Juan-Ibanezdf/gofinance</a>'
        ]
      },
      linktree: {
        title: "Dev Juan Link Tree",
        details: [
          "Página centralizada que conecta projetos, portfólio e redes sociais como desenvolvedor, com design simples e estilizado.",
          "Implementado com HTML5, CSS3 e JavaScript, hospedado via GitHub Pages.",
          '<a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>'
        ]
      }
    },
    habilidades: {
      title: "🔨 Habilidades",
      details: [
        "Desenvolvimento <strong>Back End</strong> (Node.js, Golang, Python);",
        "Banco de dados (<strong>PostgreSQL</strong>, MySQL, SQLite);",
        "<strong>Front End</strong> (React.js, TypeScript, Vite);",
        "<strong>Machine Learning</strong> aplicado a dados e sistemas inteligentes;",
        "<strong>Metodologias Ágeis</strong> (Scrum);",
        "<strong>Design de Interfaces (UI)</strong> e <strong>Experiência do Usuário (UX);</strong>",
        "Ferramentas de produtividade (Excel, PowerPoint, Word);",
        "<strong>Sistemas Operacionais:</strong> Mac OS, Windows, Linux;",
        "<strong>Prototipagem</strong> e wireframes."
      ]
    },
    contatos: {
      intro: "Vamos criar algo incrível juntos! Fale comigo em:",
      email: "E-mail: dev.juan.ibanez@gmail.com",
      linkedin: "LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "Portfólio: github.com/dev-juan-ibanez",
      lattes: "Currículum Lattes",
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
      sobre: "👨‍💻 About Me",
      experiencia: "💼 Experience",
      educacao: "🎓 Education",
      licencas: "🏅 Licenses and Certifications",
      projetos: "🚀 Projects",
      habilidades: "🔨 Skills",
      contatos: "📬 Contact"
    },
    experiencia: {
      pesquisador: {
        title: "Researcher - INEOF (National Institute of Oceanic and Fluvial Energies)",
        period: "UFMA – Federal University of Maranhão | Jun. 2023 – Present | São Luís, MA (In-person)",
        details: [
          "Conducted applied research in <strong>Electrical Engineering and Computer Science</strong>, focusing on <strong>software engineering, model-driven engineering (MDE)</strong>, and <strong>Data Lakehouse architectures</strong> for renewable energies.",
          "Participated in technological innovation projects and integration of intelligent systems for collecting and analyzing environmental sensor data (LIDAR, SODAR, ADCP).",
          "Worked in a <strong>Linux</strong> environment, using languages such as <strong>Go</strong>, <strong>Python</strong>, and <strong>Java</strong>, with an emphasis on automation, data analysis, and machine learning applications.",
          "Collaborated with researchers from partner universities (UFRJ, UFSC, UNIFEI, UFPA) on projects funded by national agencies (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "Co-Founder - D&R Técnica",
        period: "Oct. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsible for the creation, management, and operation of the company, working in administration, accounting, marketing, and client relations.",
          "Designed and registered the visual identity and brand D&R Técnica, including logo, institutional communication, and market positioning.",
          "Prepared commercial proposals, managed finances, issued invoices, and oversaw accounting.",
          "Implemented growth strategies that led to an expanded client base and strengthened the brand in the local market.",
          "Supervised technical projects."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "Master’s in Electrical Engineering – UFMA",
        period: "Started in Aug. 2023 | Expected completion – Jan. 2026",
        details: [
          "Concentration Area: Computer Science",
          "Research Lines: Software Engineering and Model-Driven Engineering (MDE)",
          "Key Competencies: UML, Software Engineering Practices, Programming, Data Modeling, Big Data"
        ]
      },
      pos: {
        title: "Postgraduate Lato Sensu in Software Engineering – Estácio",
        period: "Jan. 2023 – Dec. 2023",
        details: [
          "Final Grade: <strong>9.60</strong>",
          "Courses: Software Quality, Object-Oriented Design and Implementation, Software Management, SOA, Web Services, Database Optimization, Information Security.",
          "Competencies: HTML, CSS, Project Management, Software Architecture"
        ]
      },
      bacharelado: {
        title: "Bachelor’s in Information Systems – UNDB",
        period: "Feb. 2019 – Dec. 2022",
        details: [
          "Emphasis on Information Technology",
          "Competencies: Python, Git, Analytical Skills, Leadership, Project Management, and Software Development"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "Oracle Next Education F2 T7 Program - Back-End | Alura | Dec. 2024",
        details: [
          "Professional training program in partnership with Oracle.",
          "Focus on <strong>Back-End</strong> development, emphasizing <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong>, and <strong>programming best practices</strong>.",
          "<strong>Credential Code:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">Click here to view the certificate!</a>'
        ]
      },
      google: {
        title: "Google Professional Data Analytics Certificate | Coursera | Jan. 2023",
        details: [
          "International certification focused on <strong>Data Analysis</strong> and <strong>Business Intelligence</strong>.",
          "Main Content: Data cleaning and transformation, use of <strong>spreadsheets</strong>, <strong>SQL</strong>, <strong>R</strong>, and data visualization.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">Click here to view the credential!</a>'
        ]
      }
    },
    projetos: {
      gofinance: {
        title: "Go Finance Application",
        details: [
          "Full-stack web system developed for intelligent financial management, enabling control of income, expenses, and customized reports.",
          "Implemented using Golang (backend), PostgreSQL (database), and Next.js (frontend).",
          '<a href="https://github.com/Juan-Ibanezdf/gofinance" target="_blank">github.com/Juan-Ibanezdf/gofinance</a>'
        ]
      },
      linktree: {
        title: "Dev Juan Link Tree",
        details: [
          "Centralized page connecting projects, portfolio, and social networks as a developer, with a simple and stylish design.",
          "Implemented with HTML5, CSS3, and JavaScript, hosted via GitHub Pages.",
          '<a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>'
        ]
      }
    },
    habilidades: {
      title: "🔨 Skills",
      details: [
        "<strong>Back-End</strong> Development (Node.js, Golang, Python);",
        "Databases (<strong>PostgreSQL</strong>, MySQL, SQLite);",
        "<strong>Front-End</strong> (React.js, TypeScript, Vite);",
        "<strong>Machine Learning</strong> applied to data and intelligent systems;",
        "<strong>Agile Methodologies</strong> (Scrum);",
        "<strong>Interface Design (UI)</strong> and <strong>User Experience (UX);</strong>",
        "Productivity tools (Excel, PowerPoint, Word);",
        "<strong>Operating Systems:</strong> Mac OS, Windows, Linux;",
        "<strong>Prototyping</strong> and wireframes."
      ]
    },
    contatos: {
      intro: "Let’s create something amazing together! Reach out to me at:",
      email: "Email: dev.juan.ibanez@gmail.com",
      linkedin: "LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "Portfolio: github.com/dev-juan-ibanez",
      lattes: "CV Lattes: https://lattes.cnpq.br/1029223661167123"
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
      gmail_logo: "Ícono de Gmail",
      linkedin_logo: "Ícono de LinkedIn",
      github_logo: "Ícono de GitHub",
      lattes_logo: "Ícono de Currículum Lattes""
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
      sobre: "👨‍💻 Sobre mí",
      experiencia: "💼 Experiencia",
      educacao: "🎓 Educación",
      licencas: "🏅 Licencias y certificaciones",
      projetos: "🚀 Proyectos",
      habilidades: "🔨 Habilidades",
      contatos: "📬 Contacto"
    },
    experiencia: {
      pesquisador: {
        title: "Investigador - INEOF (Instituto Nacional de Energías Oceánicas y Fluviales)",
        period: "UFMA – Universidad Federal de Maranhão | Jun. 2023 – Actual | São Luís, MA (Presencial)",
        details: [
          "Realicé investigaciones aplicadas en <strong>Ingeniería Eléctrica y Ciencias de la Computación</strong>, con enfoque en <strong>ingeniería de software, ingeniería dirigida por modelos (MDE)</strong> y <strong>arquitecturas Data Lakehouse</strong> para energías renovables.",
          "Participé en proyectos de innovación tecnológica e integración de sistemas inteligentes para la recolección y análisis de datos de sensores ambientales (LIDAR, SODAR, ADCP).",
          "Trabajé en un entorno <strong>Linux</strong>, utilizando lenguajes como <strong>Go</strong>, <strong>Python</strong> y <strong>Java</strong>, con énfasis en automatización, análisis de datos y aplicaciones de machine learning.",
          "Colaboré con investigadores de universidades asociadas (UFRJ, UFSC, UNIFEI, UFPA) en proyectos financiados por agencias nacionales (CNPq, CAPES, FAPEMA)."
        ]
      },
      cofundador: {
        title: "Co-Fundador - D&R Técnica",
        period: "Oct. 2018 – Jul. 2021 | São Luís, MA",
        details: [
          "Responsable de la creación, gestión y operación de la empresa, trabajando en administración, contabilidad, marketing y relaciones con clientes.",
          "Diseñé y registré la identidad visual y la marca D&R Técnica, incluyendo el logotipo, la comunicación institucional y el posicionamiento en el mercado.",
          "Elaboré propuestas comerciales, gestioné finanzas, emití facturas y supervisé la contabilidad.",
          "Implementé estrategias de crecimiento que resultaron en la expansión de la base de clientes y el fortalecimiento de la marca en el mercado local.",
          "Supervisado proyectos técnicos."
        ]
      }
    },
    educacao: {
      mestrado: {
        title: "Maestría en Ingeniería Eléctrica – UFMA",
        period: "Iniciada en ago. 2023 | Finalización prevista – ene. 2026",
        details: [
          "Área de Concentración: Ciencias de la Computación",
          "Líneas de Investigación: Ingeniería de Software e Ingeniería Dirigida por Modelos (MDE)",
          "Competencias Clave: UML, Prácticas de Ingeniería de Software, Programación, Modelado de Datos, Big Data"
        ]
      },
      pos: {
        title: "Posgrado Lato Sensu en Ingeniería de Software – Estácio",
        period: "Ene. 2023 – Dic. 2023",
        details: [
          "Nota Final: <strong>9,60</strong>",
          "Asignaturas: Calidad de Software, Diseño e Implementación Orientada a Objetos, Gestión de Software, SOA, Servicios Web, Optimización de BD, Seguridad de la Información.",
          "Competencias: HTML, CSS, Gestión de Proyectos, Arquitectura de Software"
        ]
      },
      bacharelado: {
        title: "Licenciatura en Sistemas de Información – UNDB",
        period: "Feb. 2019 – Dic. 2022",
        details: [
          "Énfasis en Tecnología de la Información",
          "Competencias: Python, Git, Habilidades Analíticas, Liderazgo, Gestión de Proyectos y Desarrollo de Software"
        ]
      }
    },
    licencas: {
      oracle: {
        title: "Programa Oracle Next Education F2 T7 - Back-End | Alura | Dic. 2024",
        details: [
          "Programa de capacitación profesional en colaboración con Oracle.",
          "Enfoque en desarrollo <strong>Back-End</strong>, con énfasis en <strong>Node.js</strong>, <strong>Java</strong>, <strong>SQL</strong> y <strong>buenas prácticas de programación</strong>.",
          "<strong>Código de credencial:</strong> bb45a51c-f048-433b-a946-1907d0a7af4f",
          '<a href="https://cursos.alura.com.br/program/certificate/bb45a51c-f048-433b-a946-1907d0a7af4f?lang" target="_blank">¡Haga clic aquí para ver el certificado!</a>'
        ]
      },
      google: {
        title: "Certificado Profesional de Análisis de Datos de Google | Coursera | Ene. 2023",
        details: [
          "Certificación internacional enfocada en <strong>Análisis de Datos</strong> e <strong>Inteligencia de Negocios</strong>.",
          "Contenidos principales: limpieza y transformación de datos, uso de <strong>hojas de cálculo</strong>, <strong>SQL</strong>, <strong>R</strong> y visualización de datos.",
          '<a href="https://www.credly.com/badges/a1dbe5ec-f045-4995-b4c6-a215d58d2748/linked_in_profile" target="_blank">¡Haga clic aquí para ver la credencial!</a>'
        ]
      }
    },
    projetos: {
      gofinance: {
        title: "Aplicación Go Finance",
        details: [
          "Sistema web full stack desarrollado para la gestión financiera inteligente, permite el control de ingresos, gastos e informes personalizados.",
          "Implementado utilizando Golang (backend), PostgreSQL (base de datos) y Next.js (frontend).",
          '<a href="https://github.com/Juan-Ibanezdf/gofinance" target="_blank">github.com/Juan-Ibanezdf/gofinance</a>'
        ]
      },
      linktree: {
        title: "Dev Juan Link Tree",
        details: [
          "Página centralizada que conecta proyectos, portafolio y redes sociales como desarrollador, con un diseño simple y elegante.",
          "Implementado con HTML5, CSS3 y JavaScript, alojado a través de GitHub Pages.",
          '<a href="https://dev-juan-ibanez.github.io/dev-juan-link-tree/" target="_blank">dev-juan-ibanez.github.io/dev-juan-link-tree</a>'
        ]
      }
    },
    habilidades: {
      title: "🔨 Habilidades",
      details: [
        "Desarrollo <strong>Back-End</strong> (Node.js, Golang, Python);",
        "Bases de datos (<strong>PostgreSQL</strong>, MySQL, SQLite);",
        "<strong>Front-End</strong> (React.js, TypeScript, Vite);",
        "<strong>Machine Learning</strong> aplicado a datos y sistemas inteligentes;",
        "<strong>Metodologías Ágiles</strong> (Scrum);",
        "<strong>Diseño de Interfaces (UI)</strong> y <strong>Experiencia del Usuario (UX);</strong>",
        "Herramientas de productividad (Excel, PowerPoint, Word);",
        "<strong>Sistemas Operativos:</strong> Mac OS, Windows, Linux;",
        "<strong>Prototipado</strong> y wireframes."
      ]
    },
    contatos: {
      intro: "¡Creemos algo increíble juntos! Contáctame en:",
      email: "Correo: dev.juan.ibanez@gmail.com",
      linkedin: "LinkedIn: www.linkedin.com/in/juan-ibanez-df/",
      github: "Portafolio: github.com/dev-juan-ibanez",
      lattes_logo: "Currículum Lattes: "https://lattes.cnpq.br/1029223661167123"
    },
    footer: "© 2025 — Todos los derechos reservados. 🚀",
    theme: "⚙️ Tema:",
    language: "🌐 Idioma:"
  }
};

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
  const ufmaLogo = document.querySelector(".education-item:nth-child(2) .education-logo");
  if (ufmaLogo) ufmaLogo.setAttribute("alt", t.images_alt.ufma_logo);
  const estacioLogo = document.querySelector(".education-item:nth-child(5) .education-logo");
  if (estacioLogo) estacioLogo.setAttribute("alt", t.images_alt.estacio_logo);
  const undbLogo = document.querySelector(".education-item:nth-child(8) .education-logo");
  if (undbLogo) undbLogo.setAttribute("alt", t.images_alt.undb_logo);
  const gmailLogo = document.querySelector(".contact-list li:nth-child(1) .contact-logo");
  if (gmailLogo) gmailLogo.setAttribute("alt", t.images_alt.gmail_logo);
  const linkedinLogo = document.querySelector(".contact-list li:nth-child(2) .contact-logo");
  if (linkedinLogo) linkedinLogo.setAttribute("alt", t.images_alt.linkedin_logo);
  const githubLogo = document.querySelector(".contact-list li:nth-child(3) .contact-logo");
  if (githubLogo) githubLogo.setAttribute("alt", t.images_alt.github_logo);
  const lattesLogo = document.querySelector(".contact-list li:nth-child(4) .contact-logo"); // Adicionado
  if (lattesLogo) lattesLogo.setAttribute("alt", t.images_alt.lattes_logo);

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
    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.experiencia;
    navLinks[2].textContent = t.nav.educacao;
    navLinks[3].textContent = t.nav.projetos;
    navLinks[4].textContent = t.nav.contatos;
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
  if (experienciaArticles.length >= 2) {
    const pesquisadorH3 = experienciaArticles[0].querySelector("h3");
    const pesquisadorP = experienciaArticles[0].querySelector("p");
    const pesquisadorLis = experienciaArticles[0].querySelectorAll("ul li");
    if (pesquisadorH3) pesquisadorH3.innerHTML = t.experiencia.pesquisador.title;
    if (pesquisadorP) pesquisadorP.innerHTML = t.experiencia.pesquisador.period;
    pesquisadorLis.forEach((li, i) => {
      if (i < t.experiencia.pesquisador.details.length) li.innerHTML = t.experiencia.pesquisador.details[i];
    });

    const cofundadorH3 = experienciaArticles[1].querySelector("h3");
    const cofundadorP = experienciaArticles[1].querySelector("p");
    const cofundadorLis = experienciaArticles[1].querySelectorAll("ul li");
    if (cofundadorH3) cofundadorH3.innerHTML = t.experiencia.cofundador.title;
    if (cofundadorP) cofundadorP.innerHTML = t.experiencia.cofundador.period;
    cofundadorLis.forEach((li, i) => {
      if (i < t.experiencia.cofundador.details.length) li.innerHTML = t.experiencia.cofundador.details[i];
    });
  }

  // Educação
  const educacaoH2 = document.querySelector("#educacao h2");
  if (educacaoH2) educacaoH2.textContent = t.sectionTitles.educacao;
  const educacaoArticles = document.querySelectorAll("#educacao article.education-item");
  if (educacaoArticles.length >= 3) {
    const mestradoH3 = educacaoArticles[0].querySelector("h3");
    const mestradoP = educacaoArticles[0].querySelector("p");
    const mestradoLis = educacaoArticles[0].querySelectorAll("ul li");
    if (mestradoH3) mestradoH3.innerHTML = t.educacao.mestrado.title;
    if (mestradoP) mestradoP.innerHTML = t.educacao.mestrado.period;
    mestradoLis.forEach((li, i) => {
      if (i < t.educacao.mestrado.details.length) li.innerHTML = t.educacao.mestrado.details[i];
    });

    const posH3 = educacaoArticles[1].querySelector("h3");
    const posP = educacaoArticles[1].querySelector("p");
    const posLis = educacaoArticles[1].querySelectorAll("ul li");
    if (posH3) posH3.innerHTML = t.educacao.pos.title;
    if (posP) posP.innerHTML = t.educacao.pos.period;
    posLis.forEach((li, i) => {
      if (i < t.educacao.pos.details.length) li.innerHTML = t.educacao.pos.details[i];
    });

    const bachareladoH3 = educacaoArticles[2].querySelector("h3");
    const bachareladoP = educacaoArticles[2].querySelector("p");
    const bachareladoLis = educacaoArticles[2].querySelectorAll("ul li");
    if (bachareladoH3) bachareladoH3.innerHTML = t.educacao.bacharelado.title;
    if (bachareladoP) bachareladoP.innerHTML = t.educacao.bacharelado.period;
    bachareladoLis.forEach((li, i) => {
      if (i < t.educacao.bacharelado.details.length) li.innerHTML = t.educacao.bacharelado.details[i];
    });
  }

  // Licenças
  const licencasH2 = document.querySelector("#licencas h2");
  if (licencasH2) licencasH2.textContent = t.sectionTitles.licencas;
  const licencasArticles = document.querySelectorAll("#licencas article");
  if (licencasArticles.length >= 2) {
    const oracleH3 = licencasArticles[0].querySelector("h3");
    const oracleLis = licencasArticles[0].querySelectorAll("ul li");
    if (oracleH3) oracleH3.innerHTML = t.licencas.oracle.title;
    oracleLis.forEach((li, i) => {
      if (i < t.licencas.oracle.details.length) li.innerHTML = t.licencas.oracle.details[i];
    });

    const googleH3 = licencasArticles[1].querySelector("h3");
    const googleLis = licencasArticles[1].querySelectorAll("ul li");
    if (googleH3) googleH3.innerHTML = t.licencas.google.title;
    googleLis.forEach((li, i) => {
      if (i < t.licencas.google.details.length) li.innerHTML = t.licencas.google.details[i];
    });
  }

  // Projetos
  const projetosH2 = document.querySelector("#projetos h2");
  if (projetosH2) projetosH2.textContent = t.sectionTitles.projetos;
  const projetosArticles = document.querySelectorAll("#projetos article");
  if (projetosArticles.length >= 2) {
    const gofinanceH3 = projetosArticles[0].querySelector("h3");
    const gofinanceLis = projetosArticles[0].querySelectorAll("ul li");
    if (gofinanceH3) gofinanceH3.innerHTML = t.projetos.gofinance.title;
    gofinanceLis.forEach((li, i) => {
      if (i < t.projetos.gofinance.details.length) li.innerHTML = t.projetos.gofinance.details[i];
    });

    const linktreeH3 = projetosArticles[1].querySelector("h3");
    const linktreeLis = projetosArticles[1].querySelectorAll("ul li");
    if (linktreeH3) linktreeH3.innerHTML = t.projetos.linktree.title;
    linktreeLis.forEach((li, i) => {
      if (i < t.projetos.linktree.details.length) li.innerHTML = t.projetos.linktree.details[i];
    });
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
  if (contactSpans.length >= 4) { // Alterado para 4 para incluir o Currículo Lattes
    contactSpans[0].textContent = t.contatos.email;
    contactSpans[1].textContent = t.contatos.linkedin;
    contactSpans[2].textContent = t.contatos.github;
    contactSpans[3].textContent = t.contatos.lattes; // Adicionado para atualizar o Currículo Lattes
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
