export type EducationInfo = {[key: string]: Education};

export type Education = {
	school: string;
	degree: string;
	abbreviation: string;
	major: string;
	start_year: string;
	end_year: string;
	concentrations: Concentration[];
	semesters: Semester[];
};

export type Concentration = {
	name: string;
	url: string;
};

export type Semester = {
	id: string;
	year: string;
	term: string;
	courses: Course[];
};

export type Course = {
	course: string;
	name: string;
	url: string;
};