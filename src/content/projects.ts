import type { SvgComponent } from "astro/types";

import IconDiscord from "bootstrap-icons/icons/discord.svg";
import IconCalendarCheck from "bootstrap-icons/icons/calendar-check.svg";
import IconBook from "bootstrap-icons/icons/book.svg";
import IconGlobe from "bootstrap-icons/icons/globe2.svg";

export interface Project {
    title: string;
    Icon: SvgComponent
    description: string
    technologies: string[]
    links: {
        url: string;
        label: string;
    }[]
}

export const projects: Project[] = [
    {
        title: "Discord Bot",
        Icon: IconDiscord,
        description:
            "A project to learn and experiment with JavaScript and NodeJS, with Discord's interactivity. It features image manipulation and audio/voice playback. Also, perhaps more importantly, for fun and silly.",
        technologies: ["JavaScript", "NodeJS", "DiscordJS"],
        links: [
            {
                url: "https://github.com/chungkw/discord-bot",
                label: "GitHub Repo",
            }
        ]
    },
    {
        title: "Duty Planner",
        Icon: IconCalendarCheck,
        description:
            "Simple program to draw a planner for duty planning. Planner is drawn in Excel to visualize data. Data is read from a directory of the user's choice.",
        technologies: ["Python", "Tkinter", "XlxsWriter"],
        links: [
            {
                url: "https://github.com/chungkw/duty-planner-gui",
                label: "GitHub Repo",
            }
        ]
    },
    {
        title: "Sequelize ORM Tutorial",
        Icon: IconBook,
        description:
            "A tutorial on using Sequelize, an object-relational mapping tool in JavaScript, for NodeJS-powered backend. Written during my time in Polytechnic, shared with my classmates. Includes an example Express backend server to demonstrate concepts.",
        technologies: ["JavaScript", "NodeJS", "Sequelize", "Express"],
        links: [
            {
                url: "https://github.com/chungkw/sequelize_tutorial",
                label: "GitHub Repo",
            },
            {
                url: "https://chungkw.github.io/sequelize_tutorial/",
                label: "See Tutorial",
            }
        ]
    },
    {
        title: "This Website",
        Icon: IconGlobe,
        description:
            "A website to present myself and my projects. Uses GitHub Actions to automate deployment.",
        technologies: ["Astro", "JavaScript", "HTML", "CSS", "Bootstrap"],
        links: [
            {
                url: "https://github.com/chungkw/chungkw.github.io",
                label: "GitHub Repo",
            }
        ]
    }
];
