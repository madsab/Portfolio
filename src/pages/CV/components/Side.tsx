import { AboutMe, Contact, KeyQualifications } from "./sections"

export const Side = () => {
  return (
    <section className="w-1/3">
      <Contact />
      <AboutMe />
      <KeyQualifications />
    </section>
  )
}
