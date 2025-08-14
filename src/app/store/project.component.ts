import { Component } from "@angular/core";


@Component({
    selector: "project-component",
    templateUrl: "project.component.html",
    styleUrls: ["project.component.css"]
})
export class ProjectComponent {



    projects = [
  {
    title: 'Developer Portfolio Website',
    tech: 'Angular, TypeScript, Bootstrap, Express.js',
    description: 'Responsive personal portfolio with professional contact form, EmailJS/Express integration, and animated gradient backgrounds.',
    link: ''
  },
  {
    title: 'Full-Stack Chat Application',
    tech: 'MERN Stack, JWT, Socket.IO, Zustand',
    description: 'Real-time chat app with one-to-one messaging, authentication, and live online status tracking.',
    link: ''
  },
  {
    title: 'Premium Study Material Access Platform',
    tech: 'Node.js, Express.js, React.js, MongoDB, Tailwind CSS',
    description: 'Full-stack platform for exclusive educational resources with secure authentication and role-based content access.',
    link: ''
  },
  {
    title: 'NGO Official Website',
    tech: 'JavaScript, EmailJS, Razorpay',
    description: 'Official NGO website with Razorpay payment gateway, increasing daily transactions and engagement.',
    link: ''
  },
  {
    title: 'Web Audio Wave Analyzer',
    tech: 'Web Audio API, JavaScript',
    description: 'Interactive audio visualizer with optimized rendering for real-time performance.',
    link: ''
  },
  {
    title: 'Google Sheets Clone',
    tech: 'React.js, JavaScript',
    description: 'Spreadsheet-like application with formula support, formatting, and multiple sheets.',
    link: ''
  },
  {
    title: 'Wikipedia Fetcher API',
    tech: 'Node.js, Express.js',
    description: 'REST API for fetching and formatting Wikipedia data for user-friendly display.',
    link: ''
  }
];

}
