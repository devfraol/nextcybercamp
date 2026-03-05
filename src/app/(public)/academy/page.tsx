import { CourseCard } from "@/components/cards/course-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredCourses, learningPaths } from "@/features/academy/data";

export default function AcademyPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-gradient-to-r from-primary/20 via-background to-accent/20 p-8">
        <p className="text-sm font-semibold uppercase text-primary">Next Cyber Camp</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Build Real-World Cybersecurity Skills</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Progress through guided learning paths, hands-on interactive labs, and ranked challenges designed for aspiring and professional defenders.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Learning Paths</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {learningPaths.map((path) => (
            <Card key={path.id}>
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{path.courseIds.length} courses included</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
