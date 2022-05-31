import Error from './'
import { render, screen } from '@testing-library/react'

describe('Page Error', () => {
    it('Should render with an error message', async () => {
        render(<Error />)
        expect(screen.getByText("Cette page n'existe pas :/")).toBeTruthy()
    })
})
