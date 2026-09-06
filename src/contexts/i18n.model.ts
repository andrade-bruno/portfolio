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
			experiences: "Journey",
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
		experiences: {
			title: "Professional Background",
			viewMore: "View more",
			viewLess: "View less",
			jobs: [
				{
					role: "Mid Backend Software Engineer",
					period: "April, 2025 - Present",
					company: "AI/R Company | Invillia",
					summary: [
						"AI/R consultancy provides experiences within itens below",
						"• Key responsibilities included monitoring events, alerts, and logs between applications.",
						"• Development and integration between SaaS.",
						"• Integration and creation of functionalities in monolithic and microservices systems using Go and Node.js as primary technologies.",
						"• Customer: Wellhub - formerly Gympass - a SaaS platform for health and wellness benefits, providing a comprehensive solution for managing employee well-being and engagement.",
					],
					images: [
						{
							path: "companies/wellhub.jpeg"
						}
					],
				},
				{
					role: "Senior Fullstack Software Engineer",
					period: "October 2024 - January 2025",
					company: "Fitcomm Group",
					summary: [
						"At Fitcomm I've reinforced my knowledge with:",
						"• Mobile and web CRUD development for Gym call centers",
						"• Mobile development at Safe Team project, for roster, schedule and teams managements",
						"• Enviroment maintenance, test and release"
					],
					images: [
						{
							path: "companies/fitcomm-safe-team.jpeg"
						}
					],
				},
				{
					role: "Mid Backend Software Engineer",
					period: "October 2022 - September 2024",
					company: "Mosten",
					summary: [
						"With customer Nutrien contract squad as a service, I've done:",
						"• Development of groups and user permissions features",
						"• CRM national pre registration",
						"• Federal services",
						"• ESG compliances and ERP integrations in agronomy e-commerce"
					],
					images: [
						{
							path: "companies/mosten.jpeg"
						}
					],
				},
				{
					role: "Mid-level VB.NET/Fullstack Developer",
					period: "October 2021 - October 2022",
					company: "GoCare Group",
					summary: [
						"• Homecare CRM environment maintenance",
						"• Admin & analysis for patients, customers and bills",
						"• Creation and maintenance for domiciliar services, medicines, materials, invoices and access profiles"
					],
					images: [
						{
							path: "companies/gocare-group.jpeg"
						}
					],
				},
				{
					role: "Hardware Maintenance Analyst",
					period: "June 2020 - February 2021",
					company: "Promo Santos",
					summary: [
						"• Maintenance and installation of third-party software",
						"• Maintenance of I/O devices",
						"• Management of SOs and firmware"
					],
					images: [],
				},
				{
					role: "Jr. Software Engineer",
					period: "May 2019 - November 2019",
					company: "GBS Softwares",
					summary: [
						"• Web landing pages development.",
						"• Mobile development with React.js and Angular 8.",
						"• Sales and project management for the healthcare, dentistry and marketing sectors.",
						"• API development with Node.js and vendor integrations.",
					],
					images: [],
				},
				{
					role: "Customer Service Booking Analyst",
					period: "December 2017 - March 2019",
					company: "Hapag Lloyd",
					summary: [
						"• Customs clearance.",
						"• Monitoring the transport of specialized goods, such as hazardous materials (dangerous goods), refrigerated cargo (reefers), and oversized loads, among others.",
						"• Services for carriers, cargo owners, and customs brokers.",
					],
					images: [
						{
							path: "companies/hapag-lloyd.jpeg"
						}
					],
				}
			],
			techGraph: "Technologies Graph",
		}
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
			experiences: "Minha Jornada",
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
		},
		experiences: {
			title: "Experiências Profissionais",
			viewMore: "Ver mais",
			viewLess: "Ver menos",
			jobs: [
				{
					role: "Engenheiro de Software Backend Pleno",
					period: "Abril 2025 - Atualmente",
					company: "AI/R Company | Invillia",
					summary: [
						"A consultoria AI/R me proporciona experiências com os itens abaixo:",
						"• Dentre as principais responsabilidades, frizo o monitoramento de eventos, alertas e logs entre aplicações.",
						"• Desenvolvimento e integrações entre SaaS.",
						"• Integração e criação de funcionalidades em sistemas monolíticos e microserviços usando Go e Node.js como principais tecnologias.",
						"• Cliente: Wellhub - anteriormente Gympass - uma plataforma SaaS de benefícios de saúde e bem-estar que oferece uma solução abrangente para a gestão do bem-estar e do engajamento dos colaboradores.",
					],
					images: [
						{
							path: "companies/wellhub.jpeg"
						}
					],
				},
				{
					role: "Engenheiro de Software Fullstack Sênior",
					period: "Outubro 2024 - Janeiro 2025",
					company: "Fitcomm Group",
					summary: [
						"Na Fitcomm enfatizei meu conhecimento em:",
						"• Desenvolvimento CRUD mobile e web para call centers de academias.",
						"• Gerenciamento de soluções UCaaS e SaaS para organizações de estilo de vida ativo e esportes para jovens.",
						"• Desenvolvimento mobile no projeto Safe Team para gerenciamento de escalas, cronogramas e equipes.",
						"• Manutenção de ambiente, teste e lançamento.",
					],
					images: [
						{
							path: "companies/fitcomm-safe-team.jpeg"
						}
					],
				},
				{
					role: "Engenheiro de Software Node.js Pleno",
					period: "Outubro 2022 - Setembro 2024",
					company: "Mosten",
					summary: [
						"No contrato de Squad as a Service, com o cliente Nutrien, atuei com:",
						"• Criação e gerenciamento de recursos, permissões de grupos e usuários.",
						"• Pré-cadastro nacional de CRM.",
						"• Integração com serviços federais.",
						"• Integração para conformidades ESG.",
						"• Manuseio de ERP/e-commerce de agronomia."
					],
					images: [
						{
							path: "companies/mosten.jpeg"
						}
					],
				},
				{
					role: "Desenvolvedor VB.NET/Fullstack Pleno",
					period: "Outubro 2021 - Outubro 2022",
					company: "Grupo GoCare",
					summary: [
						"• Criação e manutenção de serviços domiciliares, medicamentos, materiais, faturas e perfis de acesso",
						"• Administração e análise para pacientes, clientes e contas",
						"• Manutenção do ambiente CRM de Homecare",
					],
					images: [
						{
							path: "companies/gocare-group.jpeg"
						}
					],
				},
				{
					role: "Analista de Manutenção de Hardware",
					period: "Junho 2020 - Fevereiro 2021",
					company: "Promo Santos",
					summary: [
						"• Manutenção e instalação de software de terceiros.",
						"• Manutenção em dispositivos I/O.",
						"• Gerenciamento de SOs e firmwares.",
					],
					images: [],
				},
				{
					role: "Desenvolvedor Fullstack Jr.",
					period: "Maio 2019 - Novembro 2019",
					company: "GBS Softwares",
					summary: [
						"• Desenvolviemnto web de landing pages.",
						"• Desenvolvimento mobile com React.js e Angular 8.",
						"• Vendas e gerenciamento de projetos para o ramo de saúde, odontologia e marketing.",
						"• Autoria em APIs com Node.js e integrações com vendors."
					],
					images: [],
				},
				{
					role: "Analista Customer Service Booking",
					period: "Dezembro 2017 - Março 2019",
					company: "Hapag Lloyd",
					summary: [
						"• Despacho aduaneiro.",
						"• Monitoraramento de transporte de mercadorias especiais, como cargas perigosas (Dangerous Goods), refrigeradas (reefers), com excesso de dimensão, entre outras.",
						"• Atendimento para transportadores, proprietários de carga e despachantes."
					],
					images: [
						{
							path: "companies/hapag-lloyd.jpeg"
						}
					],
				}
			],
			techGraph: "Gráfico de Tecnologias",
		}
	},
]
