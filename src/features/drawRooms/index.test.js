import { render, screen } from '@testing-library/react'

import Board from '../../pages/Board'
import RealBoard from '../../components/RealBoard'
import { drawRooms } from './'

describe('Feature drawRooms', () => {
    it('Should draw all rooms with their walls and floor', async () => {
        render(
            <Board>
                <RealBoard />
            </Board>
        )
        drawRooms()
        expect(screen.getAllByText('_')).toBeTruthy()
        expect(screen.getAllByText('|')).toBeTruthy()
        expect(screen.getAllByText('.')).toBeTruthy()
    })
})
