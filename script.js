function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang); // Adicione esta linha
    updateLanguage(lang);
}

const translations = {
    pt: {
        // Navegação
        navHome: "Início",
        navAbout: "Sobre",
        navSkills: "Habilidades",
        navProjects: "Projetos",
        navContact: "Contato",

        // Seção Inicial
        heroName: "Olá, eu sou a Isabelle Costa.",
        heroRole: "Desenvolvedora • Designer • Tradutora",
        heroButton: "Conheça o meu trabalho!",
        heroQuote: "Menos é mais.",

        // Seção Sobre
        aboutTitle: "Sobre mim",
        aboutText: "Acredito que a tecnologia e o design devem caminhar juntos para criar experiências que não apenas funcionam, mas encantam. Como desenvolvedora com olhar de designer e sensibilidade linguística, eu não apenas crio sites; eu crio experiências acessíveis e compreensíveis para diferentes culturas. Acredito que um bom código precisa de um design funcional e de uma comunicação clara. Sou apaixonada por criar experiências digitais que unem funcionalidade e beleza.",

        // Seção Formação
        courseMain: "Formação",
        courseTitle: "Análise e Desenvolvimento de Sistemas",
        courseP: "ETEC de Sapopemba — Conclusão em Junho 2026.",

        // Complementares
        courseSecond: "Cursos complementares",
        courseSecondTitle: "Inglês",
        courseSecondP: "Loyalty Idiomas — 2023-2024.",

        // Seção Skills
        skillT1: "Tecnologia",
        skillT2: "Design",
        skillT3: "Tradução",
        skillT4: "Soft",
        skillD1: "HTML5, CSS3, JS, React e Git.",
        skillD1: "Figma, Canva, Illustrator/Photoshop, UI/UX e Prototipagem.",
        skillD1: "Inglês fluente, comunicação assertiva e análise crítica.",
        skillD1: "Atenção aos detalhes, aprendizado contínuo e foco em resultado.",

        // Seção Projetos
        projTitle: "Projetos em destaque",
        ProjTitle2: "Meus projetos",
        proj1Title: "",
        proj1Desc: "",
        proj2Title: "",
        proj2Desc: "",
        
        btnView: "Ver projeto",
        btnServ: "Ver serviços",

        // Seção Serviços (Como posso te ajudar)
        servicesTitle: "Como posso te ajudar?",
        serviceDev: "Desenvolvimento Web",
        serviceDevDesc: "Criação de sites responsivos, modernos e otimizados.",
        serviceDesign: "UI/UX Design",
        serviceDesignDesc: "Interfaces intuitivas e protótipos de alta fidelidade que encantam o usuário.",
        serviceTrans: "Tradução",
        serviceTransDesc: "Localização de softwares e conteúdos técnicos para uma comunicação global autêntica.",

        // Seção Workflow
        workflowTitle: "Como eu trabalho",
        workflowDesc1: "Briefing & Estratégia",
        workflowP1: "Conversamos para entender seus objetivos, público-alvo e a essência da sua marca.",
        workflowDesc2: "Design & Prototipagem",
        workflowP2: "Criação do layout visual no Figma, focando em estética moderna e experiência do usuário.",
        workflowDesc3: "Desenvolvimento",
        workflowP3: "Transformação do design em código limpo, responsivo e otimizado para os navegadores.",

        contactGet: "Entre em contato",

        // Seção Contato
        contactTitle: "Vamos conversar!",
        contactAbout: "Gostou do meu trabalho? Adoraria ouvir sobre seus novos projetos ou apenas trocar experiências sobre o mercado. Se você busca uma profissional dedicada a cuidar de cada detalhe, sinta-se à vontade para me enviar uma mensagem. Responderei o mais breve possível!",
        contactSend: "Enviar Email",

        // Seção Dúvidas
        doubtTitle: "Dúvidas frequentes",
        doubtQ1: "Você trabalha como freelancer?",
        DoubtA1: "Sim! Estou aberta a projetos pontuais e colaborações.",
        DoubtQ2: "Qual seu prazo médio de entrega?",
        DoubtA2: "Depende do projeto, mas geralmente entre 2 a 4 semanas.",

        // Seção Final
        footerEnd: "Isabelle Costa, 2026."
    },

    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",

        // Initial Section
        heroName: "Hello, I'm Isabelle Costa",
        heroRole: "Developer • Designer • Translator",
        heroButton: "View my work!",
        heroQuote: "Less is more.",

        // About Section
        aboutTitle: "About me",
        aboutText: "I believe that technology and design should go hand in hand to create experiences that not only work, but also delight. As a developer with a designer's eye and linguistic sensitivity, I don't just create websites; I create accessible and understandable experiences for different cultures. I believe that good code needs functional design and clear communication. I am passionate about creating digital experiences that combine functionality and beauty.",

        // Grad Section
        courseMain: "Graduation",
        courseTitle: "Systems Analysis and Development",
        courseP: "ETEC de Sapopemba — Conclusion on June 2026.",

        // Complementary
        courseSecond: "Complementary Courses",
        courseSecondTitle: "English",
        courseSecondP: "Loyalty Idiomas — 2023-2024.",

        // Skills Section
        skillT1: "Technology",
        skillT2: "Design",
        skillT3: "Translation",
        skillT4: "Soft",
        skillD1: "HTML5, CSS3, JS, React and Git.",
        skillD1: "Figma, Canva, Illustrator/Photoshop, UI/UX and Prototyping.",
        skillD1: "Proficient english, assertive communication and critical analysis.",
        skillD1: "Attention to details, continuous learning and focus on result.",

        // Projects
        projTitle: "Featured projects",
        ProjTitle2: "My projects",
        proj1Title: "",
        proj1Desc: "",
        proj2Title: "",
        proj2Desc: "",
        
        btnView: "View project",
        btnServ: "View services",

        // Services Section
        servicesTitle: "How can I help you?",
        serviceDev: "Web Development",
        serviceDevDesc: "Creating responsive, modern and optimized sites.",
        serviceDesign: "UI/UX Design",
        serviceDesignDesc: "Intuitive interfaces and high fidelity prototypes to delight the user.",
        serviceTrans: "Translation",
        serviceTransDesc: "Software location and technical content for authentic global communication.",

        // Workflow Section
        workflowTitle: "How I work",
        workflowDesc1: "Briefing & Strategy",
        workflowP1: "We talk to understand your goals, target audience and essence of your brand.",
        workflowDesc2: "Design & Prototyping",
        workflowP2: "Creating the visual layout in Figma, for example, staying in modern aesthetics and user experience.",
        workflowDesc3: "Development",
        workflowP3: "Design transformation into clean, responsive and browser-optimized code.",

        contactGet: "Get in contact",

        // Contact Section
        contactTitle: "Let's talk!",
        contactAbout: "Liked my work? I'd love to hear about your new projects or just exchange experiences about the job market. If you're looking for a professional dedicated to taking care of every detail, feel free to send me a message. I'll reply as soon as possible!",
        contactSend: "Send Email",

        // Doubts Section
        doubtTitle: "FAQ",
        doubtQ1: "Do you work as a freelancer?",
        DoubtA1: "Yes! I'm open to one-off projects and collaborations.",
        DoubtQ2: "What's your average delivery time?",
        DoubtA2: "It depends on the project, but usually between 2 to 4 weeks.",

        // Last Section
        footerEnd: "Isabelle Costa, 2025. Feito com carinho."
    }
};

let currentLang = 'pt'; // Define o padrão

function updateLanguage(lang) {
    // Pega todos os elementos com o atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    const buttons = document.querySelectorAll('.lang-btn');
    
    buttons.forEach(btn => {
        // Remove a classe 'active' de todos
        btn.classList.remove('active');
        
        // Adiciona 'active' apenas ao botão que corresponde à língua selecionada
        // Verifica se o atributo onclick do botão contém a sigla da língua (ex: 'pt' ou 'en')
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Verifica se a tradução existe para evitar erros
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Atualiza o atributo lang do HTML (Importante para SEO e leitores de tela!)
    document.documentElement.lang = lang;
}

// Ao carregar a página, verifica se já tem uma preferência salva
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    }
});

// 1. Modo Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Mudar o ícone do botão
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀︎';
    } else {
        themeToggle.textContent = '☽';
    }
});

// 2. Animação de Fade In ao rolar (Intersection Observer)
const observerOptions = {
    threshold: 0.2 // A animação ativa quando 20% do elemento estiver visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Selecionar todos os elementos com a classe .fade-in
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    // Faz a bolinha inclinar levemente baseada na velocidade/direção do scroll
    let rotation = window.scrollY * 0.05; 
    whatsappBtn.style.transform = `rotate(${rotation % 20}deg)`;
});

window.addEventListener('scroll', () => {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressBar = document.querySelector(".progress-bar");
    
    if (progressBar) {
        const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight);
        
        if (isBottom) {
            progressBar.style.width = "100%";
        } else {
            progressBar.style.width = scrolled + "%";
        }
    }
});

// Seleciona todos os elementos <details>
const faqs = document.querySelectorAll("details");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        // Se este FAQ for aberto, fecha todos os outros
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                otherFaq.removeAttribute("open");
            }
        });
    });
});