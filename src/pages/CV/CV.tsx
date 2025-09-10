import Sidebar from "../../components/organisms/Sidebar"
import { Main } from "./components/Main"
import { Side } from "./components/Side"

const CV = () => {
  return (
    <article className="md:m-auto flex max-w-5xl">
      <Main />
      <Sidebar className="md:hidden">
        <Side />
      </Sidebar>
      <Side className="max-md:hidden" />
    </article>
  )
}

export default CV
