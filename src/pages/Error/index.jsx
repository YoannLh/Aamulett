import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background: black;
`

export default function Error() {
    return (
        <StyledMainContainer>
            <p style={{ margin: 'auto', color: 'white' }}>
                Cette page n'existe pas :/
            </p>
        </StyledMainContainer>
    )
}
