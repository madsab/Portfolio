import { Icon } from "@iconify/react"
import * as Dropdown from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import Reveal from "../animation/Reveal"
import Link from "../atoms/Link"
import MenuLinks from "../utils/MenuLinks"

const MobileMenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden col-start-5">
      <Dropdown.Root open={isOpen} onOpenChange={toggleMenu}>
        <Dropdown.Trigger className="flex justify-evenly items-center">
          <Icon icon="carbon:menu" width="40" height="40" />
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content>
            <Reveal downwards slider={false}>
              <div className=" bg-black/70 w-screen h-screen flex flex-col items-center space-y-7 md:hidden">
                {MenuLinks.map((link, index) => {
                  return (
                    <div key={index} className="w-full flex flex-col items-center ">
                      <Link to={link.to} onClick={toggleMenu} className="text-2xl my-5">
                        {link.label}
                      </Link>
                      <hr className="opacity-50 w-1/2" />
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </div>
  )
}

export default MobileMenuContainer
