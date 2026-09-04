export interface Experience {
	role: string;
	period: string;
	company: string;
	summary: string[] | string;
	images: ExperienceImage[];
}

export interface ExperienceImage {
	path: string;
	externalLink?: string;
}
