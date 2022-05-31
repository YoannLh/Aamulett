import Board from '../../pages/Board'
import RealBoard from './'
import { render, screen } from '@testing-library/react'

describe('Component TopBoard', () => {
    it("Should render with at least one case containing one room's bottom", async () => {
        render(
            <Board>
                <RealBoard />
            </Board>
        )
        expect(screen.getAllByText('_')).toBeTruthy()
    })
})
