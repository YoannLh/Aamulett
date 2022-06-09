import { render, screen } from '@testing-library/react'

import Board from '../../pages/Board'
import GameBoard from '../../components/GameBoard'
import { drawCasesOnGameBoard } from '.'

describe('Feature drawCasesOnGameBoard', () => {
    it('Should create all cases in GameBoard', async () => {
        render(
            <Board>
                <GameBoard />
            </Board>
        )
        drawCasesOnGameBoard()
        expect(screen.getAllByTestId(2549)).toBeTruthy()
    })
})
