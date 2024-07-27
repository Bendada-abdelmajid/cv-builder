import { initialState } from "./initialState";
import {
  CVState,
  ExperienceItem,
  EducationItem,
  SkillItem,
  LanguageItem,
  ProfileImage,
} from "./types";

type ActionType =
  | {
      type: "SET_STATE";
      value: CVState;
    }
  | {
      type: "UPDATE_TITLE";
      value: string;
    }
  | {
      type: "UPDATE_ProfileImage";
      value: ProfileImage;
    }
  | {
      type: "UPDATE_NAME";
      field: keyof CVState;
      value: string;
    }
  | {
      type: "UPDATE_PERSONAL_DETAILS";
      field: string;
      value: string;
    }
  | {
      type: "UPDATE_LINK";
      index: number;
      field: keyof ExperienceItem;
      value: string;
    }
  | {
      type: "DELETE_LINK";
      index: number;
    }
  | { type: "ADD_LINK" }
  | {
      type: "UPDATE_EXPERIENCE";
      index: number;
      field: keyof ExperienceItem;
      value: string;
    }
  | {
      type: "DELETE_EXPERIENCE";
      index: number;
    }
  | { type: "ADD_EXPERIENCE" }
  | {
      type: "UPDATE_EDUCATION";
      index: number;
      field: keyof EducationItem;
      value: string;
    }
  | {
      type: "DELETE_EDUCATION";
      index: number;
    }
  | { type: "ADD_EDUCATION" }
  | {
      type: "UPDATE_SKILL";
      index: number;
      field: keyof SkillItem;
      value: string;
    }
  | {
      type: "DELETE_SKILL";
      index: number;
    }
  | { type: "ADD_SKILL" }
  | {
      type: "UPDATE_LANGUAGE";
      index: number;
      field: keyof LanguageItem;
      value: string;
    }
  | { type: "ADD_LANGUAGE" }
  | { type: "DELETE_LANGUAGE"; index: number }
  | { type: "RESET_FORM" };

export const reducer = (state: CVState, action: ActionType): CVState => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...action.value
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "UPDATE_ProfileImage":
      return {
        ...state,
        profileImage: action.value,
      };
    case "UPDATE_NAME":
      return {
        ...state,
        [action.field]: {
          ...(state[action.field] as object),
          name: action.value,
        },
      };
    case "UPDATE_PERSONAL_DETAILS":
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          [action.field]: action.value,
        },
      };
    case "ADD_LINK":
      return {
        ...state,
        links: [
          ...state.links,
          {
            label: "",
            url: "",
          },
        ],
      };
    case "UPDATE_LINK":
      return {
        ...state,
        links: state.links.map((item, index) =>
          index === action.index
            ? { ...item, [action.field]: action.value }
            : item
        ),
      };
    case "DELETE_LINK":
      return {
        ...state,
        links: state.links.filter((item, index) => index !== action.index),
      };
    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        experience: {
          ...state.experience,
          list: state.experience.list.map((item, index) =>
            index === action.index
              ? { ...item, [action.field]: action.value }
              : item
          ),
        },
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: {
          ...state.experience,
          list: [
            ...state.experience.list,
            {
              "job title": "",
              employer: "",
              startdate: "",
              enddate: "",
              city: "",
              description: "",
            },
          ],
        },
      };
    case "DELETE_EXPERIENCE":
      return {
        ...state,
        experience: {
          ...state.experience,
          list: state.experience.list.filter(
            (item, index) => index !== action.index
          ),
        },
      };
    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: {
          ...state.education,
          list: state.education.list.map((item, index) =>
            index === action.index
              ? { ...item, [action.field]: action.value }
              : item
          ),
        },
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        education: {
          ...state.education,
          list: [
            ...state.education.list,
            {
              school: "",
              degree: "",
              startdate: "",
              enddate: "",
              city: "",
            },
          ],
        },
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: {
          ...state.education,
          list: state.education.list.filter(
            (item, index) => index !== action.index
          ),
        },
      };
    case "UPDATE_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          list: state.skills.list.map((item, index) =>
            index === action.index
              ? { ...item, [action.field]: action.value }
              : item
          ),
        },
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          list: [
            ...state.skills.list,
            {
              level: "expert",
              skill: "",
            },
          ],
        },
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          list: state.skills.list.filter(
            (item, index) => index !== action.index
          ),
        },
      };
    case "UPDATE_LANGUAGE":
      return {
        ...state,
        languages: {
          ...state.languages,
          list: state.languages.list.map((item, index) =>
            index === action.index
              ? { ...item, [action.field]: action.value }
              : item
          ),
        },
      };
    case "ADD_LANGUAGE":
      return {
        ...state,
        languages: {
          ...state.languages,
          list: [
            ...state.languages.list,
            {
              language: "",
              level: "native",
            },
          ],
        },
      };
    case "DELETE_LANGUAGE":
      return {
        ...state,
        languages: {
          ...state.languages,
          list: state.languages.list.filter(
            (item, index) => index !== action.index
          ),
        },
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};
