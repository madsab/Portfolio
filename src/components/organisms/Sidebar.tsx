import { Icon } from "@iconify/react"
import React, { useState } from "react"

interface SidebarProps {
  children: React.ReactNode
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking on the overlay
        ></div>
      )}
      <div className="sticky top-0 right-0 w-fit h-screen bg-red-800/10 flex justify-center">
        <button className="z-50 p-2 shadow-md" onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="24" height="24" />
        </button>
      </div>
      <aside
        className={`fixed top-0 right-0 w-full h-screen shadow-md box-border overflow-y-scroll transition-transform transform ${
          isOpen ? "translate-x-0 mr-10" : "translate-x-full"
        } w-4/5`}
      >
        {children}
      </aside>
    </div>
  )
}

export default Sidebar
