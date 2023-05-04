import { TRenderProps } from '@/types/commonPropTypes'

import './Container.css'

export const Container = ({ children }: TRenderProps) => {
  return <div className="container">{children}</div>
}
