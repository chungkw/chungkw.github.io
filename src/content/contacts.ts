import type { SvgComponent } from "astro/types";

import IconGithub from "bootstrap-icons/icons/github.svg";
import IconEnvelop from "bootstrap-icons/icons/envelope-fill.svg";

export interface Contact {
    name: string;
    Icon: SvgComponent;
    link: string;
}

export const contacts: Contact[] = [
    {
        name: "GitHub",
        Icon: IconGithub,
        link: "https://github.com/chungkw"
    },
    {
        name: "Email",
        Icon: IconEnvelop,
        link: "mailto:chungkw28@gmail.com"
    }
];
