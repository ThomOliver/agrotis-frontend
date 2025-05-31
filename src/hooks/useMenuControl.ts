import { useState } from "react"

export function useMenuControl() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuIndex, setMenuIndex] = useState<number | null>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget)
    setMenuIndex(index)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setMenuIndex(null)
  }

  return { anchorEl, menuIndex, handleOpenMenu, handleCloseMenu }
}
