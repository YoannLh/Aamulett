import Board from '../../pages/Board'
import BottomBoard from './'
import { render, screen } from '@testing-library/react'

describe('Component BottomBoard', () => {
    it('Should render with a player name text', async () => {
        render(
            <Board>
                <BottomBoard />
            </Board>
        )
        expect(screen.getByText('Yvan le Péon - Mage - Level 13')).toBeTruthy()
    })
})
