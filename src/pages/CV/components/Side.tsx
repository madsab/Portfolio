import CVImage from "../../../assets/images/Sommerstudenter2025.jpg"
import { Divider } from "../../../components/atoms/Divider"
import { AboutMe, Contact, KeyQualifications } from "./sections"
import { Education } from "./sections/Education"

export const Side = ({ className }: { className?: string }) => {
  return (
    <section className={`relative w-1/3 max-sm:w-full px-4 py-8 flex flex-col gap-4 bg-red-800/10 ${className}`}>
      <img src={CVImage} alt="CV" className="w-2/3 self-center h-auto rounded-full border-red-600/50 border" />
      <Contact />
      <Divider />
      <AboutMe />
      <Divider />
      <Education />
      <Divider />
      <KeyQualifications />
      <Divider />
    </section>
  )
}
