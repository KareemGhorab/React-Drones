import React from 'react'

import useWindow from '~/hooks/useWindow'
import MobileNav from './mobile/navbar'
import DesktopNav from './desktop/navbar'

export default function Navbar() {
  const { width } = useWindow()

  return <>{width < 1024 ? <MobileNav /> : <DesktopNav />}</>
}
