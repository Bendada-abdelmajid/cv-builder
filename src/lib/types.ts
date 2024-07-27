export type ProfileImage = {
  url: string;
  uuid: string;
};
export type PersonalDetails = {
  name: string;
  "job title": string;
  "full name": string;
  email: string;
  phone: string;
  country: string;
  summary: string;
};

export type ExperienceItem = {
  "job title": string;
  employer: string;
  startdate: string;
  enddate: string;
  city: string;
  description: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  startdate: string;
  enddate: string;
  city: string;
};
export type skillsLevels =
  | "expert"
  | "advanced"
  | "intermediate"
  | "beginner"
  | "basic";
export type SkillItem = {
  skill: string;
  level: skillsLevels;
};
export type languageLevels =
  | "native"
  | "fluent"
  | "proficient"
  | "intermediate"
  | "basic";
export type LanguageItem = {
  language: string;
  level: languageLevels;
};

export type ExperienceType = {
  name: string;
  list: ExperienceItem[];
};

export type Education = {
  name: string;
  list: EducationItem[];
};

export type Skills = {
  name: string;
  list: SkillItem[];
};
export type LinkItem = {
  label: string;
  url: string;
};


export type Languages = {
  name: string;
  list: LanguageItem[];
};
export type CVContextType = {
  state: CVState;
  languageLevels: string[];
  skillsLevels: string[];
  dispatch: React.Dispatch<any>;
};
export type CVState = {
  title: string;
  profileImage: ProfileImage;
  personalDetails: PersonalDetails;
  links:LinkItem[],
  experience: ExperienceType;
  education: Education;
  skills: Skills;
  languages: Languages;
};
