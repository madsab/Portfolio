import { FC } from "react"
import { Education } from "../../../../types"

export const EducationCard: FC<Education> = (props) => {
  return (
    <div>
      <span className=" italic mb-2 text-gray-300">
        {props.startDate} - {props.endDate ? props.endDate : "Nå"}
      </span>
      <p className="font-semibold">{props.title}</p>
      <p>
        {props.institution}, {props.location}
      </p>
    </div>
  )
}
