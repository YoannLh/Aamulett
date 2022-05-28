import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMainContainer = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background: black;
`

export default function Home() {
    return (
        <StyledMainContainer>
            <p style={{ margin: 'auto', color: 'white' }}>Home</p>
            <Link to="/board" style={{ margin: 'auto', color: 'white' }}>
                > Game
            </Link>
        </StyledMainContainer>
    )
}
