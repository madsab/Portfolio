import { ReactNode } from "react"

export type DefaultJob = {

}

export type Job = {
    id: number
    title: string | ReactNode
    organization: string
    location: string
    startDate: string
    endDate: string | null
    description: string | ReactNode
    technologies?: string[]
    responsibilities?: string[]
}
export type VolunteerJob = Job



export type Education =  {
    id: number
    title: string | ReactNode
    institution: string
    location: string
    startDate: string
    endDate: string | null
}