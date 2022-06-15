import React, { useEffect } from 'react'
import styled from 'styled-components'

import { drawCasesOnGameBoard } from '../../features/drawCasesOnGameBoard'
import { initRooms } from '../../features/drawRooms'

const StyledMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 610px;
    justify-content: center;
`

export default function GameBoard() {
    useEffect(() => {
        drawCasesOnGameBoard()
        initRooms()
    })

    return <StyledMainContainer id="gameBoard"></StyledMainContainer>
}
