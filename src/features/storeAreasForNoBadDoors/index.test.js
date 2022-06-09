import { render } from '@testing-library/react'

import Board from '../../pages/Board'
import GameBoard from '../../components/GameBoard'
import {
    storeAreaForNoDoorsLeft,
    storeAreaForNoDoorsTop,
    storeAreaForNoDoorsRight,
    storeAreaForNoDoorsBottom,
} from './'

describe('Feature storeAreasForNoBadDoors', () => {
    it('Should create arrays containing areas left, top, right and bottom of game board', () => {
        render(
            <Board>
                <GameBoard />
            </Board>
        )
        expect(storeAreaForNoDoorsLeft()).not.toEqual([])
        expect(storeAreaForNoDoorsTop()).not.toEqual([])
        expect(storeAreaForNoDoorsRight()).not.toEqual([])
        expect(storeAreaForNoDoorsBottom()).not.toEqual([])
    })
})
