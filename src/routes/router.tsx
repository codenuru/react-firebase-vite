import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { UserDetailPage } from '@/features/UserDetail'
import { ListPage } from '@/features/UserList'
import { UserXContainer } from '@/features/UserXApp/'
import { AboutPage, NoMatch, TOSPage } from '@/features/staticPages'
import { HomePage } from '@/features/staticPages/'

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<UserXContainer />}>
      <Route index element={<HomePage />} />
      <Route path="/app" element={<ListPage />} />
      <Route path="/app/user/:userId" element={<UserDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tos" element={<TOSPage />} />
      <Route path="*" element={<NoMatch />} />
    </Route>,
  ),
)
