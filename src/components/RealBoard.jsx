import React, { useEffect } from 'react'
import styled from 'styled-components'

import { drawCasesOnRealBoard } from '../features/drawCasesOnRealBoard'

const StyledMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 610px;
    justify-content: center;
`

export default function RealBoard() {
    useEffect(() => {
        drawCasesOnRealBoard()
    })

    return <StyledMainContainer id="realBoard"></StyledMainContainer>
}
