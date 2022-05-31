import Board from '../../pages/Board'
import TopBoard from './'
import { render, screen } from '@testing-library/react'

describe('Component TopBoard', () => {
    it('Should render with a text', async () => {
        render(
            <Board>
                <TopBoard />
            </Board>
        )
        expect(screen.getByText("You're entering the dungeon...")).toBeTruthy()
    })
})
