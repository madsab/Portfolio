import { Divider } from "../../../components/atoms/Divider"
import { Experience, Goal, Volunteer } from "./sections"

export const Main = () => {
  return (
    <article className="w-2/3 flex flex-col gap-8 px-8 py-16">
      <section className="space-y-2">
        <h1 className="text-4xl">
          <span className=" font-bold">Mads André</span> <span>Bårnes</span>
        </h1>
        <h3 className="font-semibold">INFORMATIKK STUDENT</h3>
      </section>
      <Divider />
      <Goal />
      <Divider />
      <Experience />
      <Divider />
      <Volunteer />
      <Divider />
    </article>
  )
}
