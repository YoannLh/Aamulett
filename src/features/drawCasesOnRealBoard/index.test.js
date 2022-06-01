import { render, screen } from '@testing-library/react'

import Board from '../../pages/Board'
import RealBoard from '../../components/RealBoard'
import { drawCasesOnRealBoard } from './'

describe('Feature drawCasesOnRealBoard', () => {
    it('Should create all cases in RealBoard', async () => {
        render(
            <Board>
                <RealBoard />
            </Board>
        )
        drawCasesOnRealBoard()
        expect(screen.getAllByTestId(2549)).toBeTruthy()
    })
})
