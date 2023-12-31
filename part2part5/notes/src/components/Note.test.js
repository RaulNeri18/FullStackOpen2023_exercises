import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  /*
  render(<Note note={note} />)

  const element = screen.getByText('Component testing is done with react-testing-library')
  screen.debug(element)
  expect(element).toBeDefined()
  */

  /*
  const { container } = render(<Note note={note} />)
  screen.debug(container)
  const div = container.querySelector('.note')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
  */

  /*
  const element = screen.getByText('Does not work anymore :(', { exact: false })
  //const element = await screen.findByText('Does not work anymore :(')cop
  expect(element).toBeDefined()
  */

  /*
  const element = screen.queryByText('do not want this thing to be rendered')
  expect(element).toBeNull()
  */

  render(<Note note={note} />)
  //screen.debug()

})

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const mockHandler = jest.fn()

  render(
    <Note note={note} toggleImportance={mockHandler} />
  )

  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})