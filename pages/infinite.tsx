import FakeFeedbackBoards from "@/components/FakeFeedbackBoards"
import { useEffect, useState } from "react"
import styled from "styled-components"

const infinite = () => {
    const [isShowingClones, setIsShowingClones] = useState(false)

    useEffect(() => {
        setIsShowingClones(true)
    }, [])

    return (
        <FeedbackBoardContainer isShowingClones={isShowingClones}>
            <>
                <FakeFeedbackBoards isShowingClones={isShowingClones}/>

                <FakeFeedbackBoards isShowingClones={isShowingClones}/>
            </>
        </FeedbackBoardContainer>
    )
}

const FeedbackBoardContainer = styled.div<{isShowingClones : boolean}>`
    width: ${({isShowingClones}) => (isShowingClones ? 3 : 1) * 100}px;
    height: ${({isShowingClones}) => (isShowingClones ? 3 : 1) * 100}px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    cursor: grab;
    user-select: none;

    background-color: #141414;

    /* 중앙에 위치 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default infinite