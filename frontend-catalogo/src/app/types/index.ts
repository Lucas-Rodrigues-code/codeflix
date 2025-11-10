export interface Course {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  level: string;
}

export interface CourseRowProps {
  title: string;
  courses: Course[];
}