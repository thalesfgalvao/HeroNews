import { render, screen } from '@testing-library/react'

import InputPassword from '.'

describe('<InputPassword />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputPassword />)

    expect(screen.getByRole('heading', { name: /InputPassword/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
