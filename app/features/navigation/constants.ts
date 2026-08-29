import { faUserAlt, faBarChart } from "@fortawesome/free-regular-svg-icons";

export const ROUTES = {
  HOME: "/",
  SKILLS: "/skills",
};

export const MAIN_NAVIGATION = [
  { route: ROUTES.HOME, label: "Me", icon: faUserAlt },
  { route: ROUTES.SKILLS, label: "Skills", icon: faBarChart },
];
