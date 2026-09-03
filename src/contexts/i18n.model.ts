import { ITranslation, LANG_EN, LANG_PT } from "./i18n.interface";

export const translations: ITranslation[] = [
	{
		key: LANG_EN,
		label: "English",
		iconPath: `flags/${LANG_EN}.svg`,
		common: {
			close: "Close",
			search: "Search",
		},
		nav: {
			home: "Home",
			experiences: "Professional Experiences",
			projects: "Projects",
			personal: "Personal",
			search: "Search (Ctrl+K)",
			profile: "Profile",
		},
		settings: {
			aria: "Settings",
			darkTheme: "Dark Theme",
			language: "Language",
			toggleTheme: "Toggle theme",
		},
		footer: {
			about: "About",
			aboutDescription: "Born december 2001, I'm a passionate Software Engineer with a strong focus on backend development. I enjoy creating efficient and scalable solutions that make a difference in people's lives.",
			explore: "Explore",
			services: "Services",
			contact: "Contact",
		},
		home: {
			description: "Backend Engineer with professional experience since 2019 and a BSc in Computer Science (UNIP, 2022). Specializes in designing and delivering secure, highly available, and scalable backend systems and microservices - mainly using Node.js and Go. With strong experience in event-driven architectures, observability, and cloud-native patterns on AWS, proven track record owning end-to-end backend features, improving performance and reliability, leading cross-functional deliveries, and mentoring engineers to raise code quality and operational practices. I stand out for being organized, committed to my goals, and for taking leadership in the deliverables I oversee.",
			projectsBtn: "Look up Projects",
			experiencesBtn: "Check Professional Experiences",
		},
	},
	{
		key: LANG_PT,
		label: "Português",
		iconPath: `flags/${LANG_PT}.svg`,
		common: {
			close: "Fechar",
			search: "Buscar",
		},
		nav: {
			home: "Início",
			experiences: "Experiências Profissionais",
			projects: "Projetos",
			personal: "Pessoal",
			search: "Buscar (Ctrl+K)",
			profile: "Perfil",
		},
		settings: {
			aria: "Configurações",
			darkTheme: "Tema escuro",
			language: "Idioma",
			toggleTheme: "Alternar tema",
		},
		footer: {
			about: "Sobre",
			aboutDescription: "Nascido em dezembro de 2001, atuo como Engenheiro de Software desde 2019, apaixonado na profissão e com foco em desenvolvimento backend. Aprecio criar soluções eficientes e escaláveis que façam a diferença na vida das pessoas.",
			explore: "Explorar",
			services: "Serviços",
			contact: "Contato",
		},
		home: {
			description: "Engenheiro de Software Backend com experiência profissional desde 2019 e Bacharel em Ciência da Computação (UNIP, 2022). Especializa-se em projetar e entregar sistemas backend seguros, altamente disponíveis e escaláveis e microserviços - especialmente usando Node.js e Go. Com forte experiência em arquiteturas orientadas a eventos, observabilidade e padrões cloud-native na AWS, histórico comprovado de propriedade de recursos end-to-end, melhoria de desempenho e confiabilidade, liderança em entregas cross-funcionais e mentoria de engenheiros para elevar a qualidade do código e práticas operacionais. Destaco-me por ser organizado, comprometido com meus objetivos e por assumir liderança nos entregáveis que supervisiono.",
			projectsBtn: "Ver Projetos",
			experiencesBtn: "Experiências Profissionais",
		}
	},
]
