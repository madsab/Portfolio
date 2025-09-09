import { CardWithChildren } from "../../../../components/atoms/CardWithChildren"
import { JobCard } from "../molecules/JobCard"
import { Jobs } from "../utils/CVdata"

export const Experience = () => {
  return (
    <CardWithChildren title="Erfaring" className="flex flex-col gap-8">
      {Jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </CardWithChildren>
  )
}
