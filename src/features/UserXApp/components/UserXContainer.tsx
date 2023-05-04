import { Outlet } from 'react-router-dom'

import { Layout } from './Layout'

export const UserXContainer = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
