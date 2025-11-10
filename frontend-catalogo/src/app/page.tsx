import { CourseRow } from "./componentes/course-row";
import { Header } from "./componentes/header";
import { HeroBanner } from "./componentes/hero-banner";

export default function Home() {
  const trendingCourses = [
    {
      id: 1,
      title: "React Avançado",
      thumbnail: "/react-advanced-course.jpg",
      duration: "12h 30min",
      level: "Avançado",
    },
    {
      id: 2,
      title: "Node.js do Zero",
      thumbnail: "/nodejs-backend-development.jpg",
      duration: "8h 45min",
      level: "Iniciante",
    },
    {
      id: 3,
      title: "TypeScript Completo",
      thumbnail: "/typescript-programming.png",
      duration: "10h 15min",
      level: "Intermediário",
    },
    {
      id: 4,
      title: "Next.js 15",
      thumbnail: "/nextjs-framework.jpg",
      duration: "15h 20min",
      level: "Avançado",
    },
    {
      id: 5,
      title: "Python para Data Science",
      thumbnail: "/python-data-science.png",
      duration: "20h 10min",
      level: "Intermediário",
    },
    {
      id: 6,
      title: "Docker & Kubernetes",
      thumbnail: "/docker-kubernetes-devops.jpg",
      duration: "14h 30min",
      level: "Avançado",
    },
  ];

  const webDevCourses = [
    {
      id: 7,
      title: "HTML & CSS Moderno",
      thumbnail: "/html-css-modern-web.jpg",
      duration: "6h 20min",
      level: "Iniciante",
    },
    {
      id: 8,
      title: "JavaScript ES2024",
      thumbnail: "/javascript-es2024.jpg",
      duration: "18h 45min",
      level: "Intermediário",
    },
    {
      id: 9,
      title: "Vue.js 3 Completo",
      thumbnail: "/vuejs-framework.jpg",
      duration: "12h 00min",
      level: "Intermediário",
    },
    {
      id: 10,
      title: "Tailwind CSS",
      thumbnail: "/tailwind-css-design.png",
      duration: "5h 30min",
      level: "Iniciante",
    },
    {
      id: 11,
      title: "GraphQL & Apollo",
      thumbnail: "/graphql-apollo-api.jpg",
      duration: "9h 15min",
      level: "Avançado",
    },
    {
      id: 12,
      title: "Svelte & SvelteKit",
      thumbnail: "/svelte-sveltekit.jpg",
      duration: "11h 40min",
      level: "Intermediário",
    },
  ];

  const backendCourses = [
    {
      id: 13,
      title: "PostgreSQL Avançado",
      thumbnail: "/postgresql-database.jpg",
      duration: "13h 25min",
      level: "Avançado",
    },
    {
      id: 14,
      title: "MongoDB & Mongoose",
      thumbnail: "/mongodb-database.jpg",
      duration: "8h 50min",
      level: "Intermediário",
    },
    {
      id: 15,
      title: "REST API Design",
      thumbnail: "/rest-api-design.jpg",
      duration: "7h 30min",
      level: "Intermediário",
    },
    {
      id: 16,
      title: "Microservices",
      thumbnail: "/placeholder.svg?height=400&width=300",
      duration: "16h 45min",
      level: "Avançado",
    },
    {
      id: 17,
      title: "Redis & Caching",
      thumbnail: "/placeholder.svg?height=400&width=300",
      duration: "6h 15min",
      level: "Intermediário",
    },
    {
      id: 18,
      title: "AWS para Devs",
      thumbnail: "/placeholder.svg?height=400&width=300",
      duration: "22h 30min",
      level: "Avançado",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />

      <div className="space-y-12 pb-20">
        <CourseRow title="Em Alta Agora" courses={trendingCourses} />
        <CourseRow title="Desenvolvimento Web" courses={webDevCourses} />
        <CourseRow title="Backend & Infraestrutura" courses={backendCourses} />
      </div>
    </div>
  );
}
