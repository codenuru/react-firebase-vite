import { render, screen } from '@testing-library/react'

import { ListPage } from './ListPage'

describe('ListPage', () => {
  test('should return the correct text', () => {
    render(<ListPage />)

    expect(screen.getByText('User')).toBeInTheDocument()
  })
})
