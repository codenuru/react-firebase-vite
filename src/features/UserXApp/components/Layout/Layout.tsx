import { Header } from '@/features/UserXApp/'
import { TRenderProps } from '@/types/commonPropTypes'

import './Layout.css'

export const Layout = ({ children }: TRenderProps) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
    </>
  )
}
