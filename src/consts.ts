import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'adrian romero',
  EMAIL: 'adrf.dev@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'home',
  DESCRIPTION: 'Welcome to my personal portfolio!',
};

export const BLOG: Metadata = {
  TITLE: 'blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  TITLE: 'work',
  DESCRIPTION: 'Where I have worked and what I have done.',
};

export const PROJECTS: Metadata = {
  TITLE: 'projects',
  DESCRIPTION: 'A collection of my projects, with links to repositories and demos.',
};

export const SKILLS: Metadata = {
  TITLE: 'skills',
  DESCRIPTION: 'A list of technologies I am familiar with.',
};

export const SOCIALS: Socials = [
  { 
    NAME: 'github',
    HREF: 'https://github.com/adrrf'
  },
  { 
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/adrrf//',
  }
];
