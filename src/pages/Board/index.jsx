import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BottomBoard from '../../components/BottomBoard'
import GameBoard from '../../components/GameBoard'
import TopBoard from '../../components/TopBoard'

const StyledMainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: black;
`

export default function Board() {
    return (
        <StyledMainContainer>
            <TopBoard />
            <GameBoard />
            <BottomBoard />
        </StyledMainContainer>
    )
}
