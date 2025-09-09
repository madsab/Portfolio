import { CardWithChildren } from "../../../../components/atoms/CardWithChildren"
import { JobCard } from "../molecules/JobCard"
import { VolunteerJobs } from "../utils/CVdata"

export const Volunteer = () => {
  return (
    <CardWithChildren title="Frivillig arbeid" className="flex flex-col gap-8">
      {VolunteerJobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </CardWithChildren>
  )
}
