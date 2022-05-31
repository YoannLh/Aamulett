import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
    display: flex;
    height: 50px;
    justify-content: center;
    color: white;
`

const StyledTextTopBoard = styled.p``

export default function TopBoard() {
    return (
        <StyledMainContainer>
            <StyledTextTopBoard>
                You're entering the dungeon...
            </StyledTextTopBoard>
        </StyledMainContainer>
    )
}
