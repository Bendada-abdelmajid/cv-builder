import { CVState } from "./types";

export const initialState: CVState = {
  title:"",
  profileImage: {
    url: "",
    uuid:""
  },
  personalDetails: {
    name: "Personal Details",
    "job title": "",
    "full name": "",
    email: "",
    phone: "",
    country: "",
    summary: "",
  },
  links:[{
    label:"LinkedIn",
    url:""
  }],
  experience: {
    name: "Career Experience",
    list: [],
  },
  education: {
    name: "Education",
    list: [],
  },
  skills: {
    name: "Skills",
    list: [
      
    ],
  },
  languages: {
    name: "Languages",
    list: [

    ],
  },
};
