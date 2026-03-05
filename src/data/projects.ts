// Centralized project data - Easy to add new projects

import image1 from '../images/8bcbpa76.png';
import image2 from '../images/cinema.png';
import image3 from '../images/laravel-featured.avif';
import image4 from '../images/nesr.png';
import image5 from '../images/download.jpg';

export interface Project {
  id: string;
  title: string;
  titleKey?: string; // For i18n
  description: string;
  descriptionKey?: string;
  image: string;
  technologies: string[];
  featured?: boolean;
  category: 'backend' | 'fullstack' | 'api' | 'mobile';
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

// Easy to add new projects - just add to this array
export const projects: Project[] = [
  {
    id: 'delivery-app',
    title: 'Delivery Application',
    titleKey: 'projects.delivery.title',
    description: 'An app that displays products and manages delivery operations with real-time tracking and order management.',
    descriptionKey: 'projects.delivery.description',
    image: image1,
    technologies: ['Laravel', 'API', 'Flutter', 'MySQL'],
    featured: true,
    category: 'fullstack',
    githubUrl: 'https://github.com/fadi9p9/Delivery_man0.1',
    date: '2024-01',
  },
  {
    id: 'cinema-reservation',
    title: 'Cinema Reservation System',
    titleKey: 'projects.cinema.title',
    description: 'A desktop application for managing cinema seat reservations with an intuitive GUI interface.',
    descriptionKey: 'projects.cinema.description',
    image: image2,
    technologies: ['Java', 'GUI', 'OOP'],
    featured: false,
    category: 'fullstack',
    githubUrl: 'https://github.com/fadi9p9/Cinema_Reservations_Management_usingJava',
    date: '2023-06',
  },
  {
    id: 'job-opportunity',
    title: 'Job Opportunity Platform',
    titleKey: 'projects.job.title',
    description: 'An application for job opportunities that connects employers with job seekers.',
    descriptionKey: 'projects.job.description',
    image: image3,
    technologies: ['Laravel', 'API', 'MySQL'],
    featured: false,
    category: 'backend',
    githubUrl: 'https://github.com/Obada7174/job-opportunity',
    date: '2023-09',
  },
  {
    id: 'readhub',
    title: 'ReadHub',
    titleKey: 'projects.readhub.title',
    description: 'A back-end system for an electronic library website that enables users to purchase and read books with subscription plans, supporting both Arabic and English languages with real-time notifications.',
    descriptionKey: 'projects.readhub.description',
    image: image4,
    technologies: ['NestJS', 'TypeORM', 'REST API', 'MySQL', 'WebSocket', 'Real-time'],
    featured: true,
    category: 'backend',
    githubUrl: 'https://github.com/fadi9p9/ReadHub',
    date: '2024-03',
  },
  {
    id: 'football-app',
    title: 'FootBall App',
    titleKey: 'projects.football.title',
    description: 'A back-end system for a website that brings together football players and fans. Connect with teams that need players or find players for your team, with quick chat functionality.',
    descriptionKey: 'projects.football.description',
    image: image5,
    technologies: ['NestJS', 'TypeORM', 'REST API', 'MySQL', 'WebSocket', 'Real-time'],
    featured: true,
    category: 'backend',
    githubUrl: 'https://github.com/fadi9p9/football-app',
    date: '2024-02',
  },
];

// Filter utilities
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category);
export const getSortedProjects = () => [...projects].sort((a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()
);
