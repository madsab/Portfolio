import { Link } from "react-router-dom"
import { CardWithChildren } from "../../../../components/atoms/CardWithChildren"

export const Contact = () => {
  return (
    <CardWithChildren title="Kontakt" className="flex flex-col">
      <Link to="mailto:mads.barnes@hotmail.com" className="text-blue-500">
        mads.barnes@hotmail.com
      </Link>
      <p>(+47) 954 89 711</p>
      <Link to="https://madsbarnes.com" className="text-blue-500">
        madsbarnes.com
      </Link>
      <p>Trondheim, Norway</p>
    </CardWithChildren>
  )
}
