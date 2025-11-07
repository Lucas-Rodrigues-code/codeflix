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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />

      <div className="space-y-12 pb-20">
        <CourseRow title="Em Alta Agora" courses={trendingCourses} />
      </div>
    </div>
  );
}
