import { render, screen } from '@testing-library/react'

import RecoverPassword from '.'

describe('<RecoverPassword />', () => {
  it('should render the heading', () => {
    const { container } = render(<RecoverPassword />)

    expect(screen.getByRole('heading', { name: /RecoverPassword/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
