import { BookOpen, FlaskConical, GaugeCircle, Timer } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/types/academy";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardDescription>{course.level}</CardDescription>
        <CardTitle className="text-xl">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4" />
            <span>{course.labs} labs</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeCircle className="h-4 w-4" />
            <span>{course.progress ?? 0}% done</span>
          </div>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-primary" style={{ width: `${course.progress ?? 0}%` }} />
        </div>
      </CardContent>
    </Card>
  );
}
