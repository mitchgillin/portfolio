"use client"
import { useState } from "react";
import { Menu, HoveredLink, MenuItem, DisabledLink } from "./navbar-menu"
const MenuWrapper = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={() => null} active={null} item="Home" href="/">
        Home
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/services/web-development">Web Development</HoveredLink>
          <DisabledLink disabled >Management Consulting</DisabledLink>
          <DisabledLink disabled >Coaching</DisabledLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="About">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/me">Me</HoveredLink>
          <DisabledLink className="disabled:pointer-events-none" >Portfolio</DisabledLink>
        </div>
      </MenuItem>
    </Menu>

  )
}

export default MenuWrapper;
