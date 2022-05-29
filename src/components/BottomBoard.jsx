import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
    display: flex;
    width: 95%;
    height: 75px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const StyledTextCharacter = styled.p``

const StyledTextUnderground = styled.p``

export default function BottomBoard() {
    return (
        <StyledMainContainer>
            <StyledTextCharacter>
                Yvan le péon - Mage - Level 13
            </StyledTextCharacter>
            <StyledTextUnderground>5 ème Sous-sol</StyledTextUnderground>
        </StyledMainContainer>
    )
}
