import { CardWithChildren } from "../../../../components/atoms/CardWithChildren"

export const AboutMe = () => {
  return (
    <CardWithChildren title="Om meg" className="text-justify">
      <p className="text-left">
        Masterstudent i Informatikk ved NTNU{" "}
        <span className="italic">(Norges teknisk-naturvitenskapelige universitet)</span> med lidenskap for teknologi og
        datavitenskap. Dedikert til å løse problemer gjennom programvareutvikling og forme morgendagens digitale verden.
      </p>
    </CardWithChildren>
  )
}
