import Board from '../../pages/Board'
import GameBoard from './'
import { render, screen } from '@testing-library/react'

describe('Component GameBoard', () => {
    it("Should render with at least one case containing one room's bottom", async () => {
        render(
            <Board>
                <GameBoard />
            </Board>
        )
        expect(screen.getAllByText('_')).toBeTruthy()
        expect(screen.getAllByText('|')).toBeTruthy()
    })
})
