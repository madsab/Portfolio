import { FC } from "react"
import { Job } from "../../../../types"

export const JobCard: FC<Job> = (props) => {
  return (
    <div>
      <h4 className="font-semibold">
        {props.title}, {props.organization}, {props.location}
      </h4>
      <p className="text-sm italic mb-2 text-gray-300">
        {props.startDate} - {props.endDate ? props.endDate : "Nå"}
      </p>
      <p>{props.description}</p>
      {props.technologies && <p className="text-sm text-gray-400">Teknologier: {props.technologies.join(", ")}</p>}
    </div>
  )
}
