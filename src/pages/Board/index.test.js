import Board from '../../pages/Board'
import TopBoard from '../../components/TopBoard'
import RealBoard from '../../components/RealBoard'
import BottomBoard from '../../components/BottomBoard'

import { render, screen } from '@testing-library/react'

describe('Page Board', () => {
    it('Should render with TopBoard, RealBoard and BottomBoard', async () => {
        render(
            <Board>
                <TopBoard />
                <RealBoard />
                <BottomBoard />
            </Board>
        )
        expect(screen.getByText("You're entering the dungeon...")).toBeTruthy()
        expect(screen.getAllByText('_')).toBeTruthy()
        expect(screen.getByText('5 ème Sous-Sol')).toBeTruthy()
    })
})
