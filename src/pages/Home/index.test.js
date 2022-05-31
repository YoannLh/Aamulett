import Home from './'
import { fireEvent, getByText, render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>
}

describe('Page Home', () => {
    it('Should render with the text Home', async () => {
        render(<Home />, { wrapper: Wrapper })
        expect(screen.getByText('Home')).toBeTruthy()
    })
})
