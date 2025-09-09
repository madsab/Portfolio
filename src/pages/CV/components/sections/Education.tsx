import { EducationCard } from "../molecules/EducationCard"
import { Educations } from "../utils/CVdata"
export const Education = () => {
  return (
    <div className="flex flex-col gap-8">
      {Educations.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </div>
  )
}
