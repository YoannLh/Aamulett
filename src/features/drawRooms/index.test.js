import { render, screen } from '@testing-library/react'

import Board from '../../pages/Board'
import RealBoard from '../../components/RealBoard'
import { drawRooms } from './'

describe('Feature drawRooms', () => {
    it('Should draw all rooms', async () => {
        render(
            <Board>
                <RealBoard />
            </Board>
        )
        drawRooms()
        expect(screen.getAllByText('_')).toBeTruthy()
        expect(screen.getAllByText('|')).toBeTruthy()
    })
})
