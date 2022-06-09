import { render, screen } from '@testing-library/react'

import Board from '../../pages/Board'
import GameBoard from '../../components/GameBoard'
import { drawRooms } from './'

describe('Feature drawRooms', () => {
    it('Should draw all rooms with their walls, floor and door(s)', async () => {
        render(
            <Board>
                <GameBoard />
            </Board>
        )
        drawRooms()
        expect(screen.getAllByText('_')).toBeTruthy()
        expect(screen.getAllByText('|')).toBeTruthy()
        expect(screen.getAllByText('.')).toBeTruthy()
        expect(screen.getAllByText('+')).toBeTruthy()
    })
})
