import { CourseCard } from "@/components/cards/course-card";
import { featuredCourses } from "@/features/academy/data";

export default function DashboardCoursesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {featuredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
