import React from 'react'
import { Button, ButtonContainer, ButtonSection } from '../styled-components/ButtonSection'

export default function BottomFotter({ handlereset, projectName, taskName }) {
    return (
        <ButtonSection>
            <ButtonContainer>
                <Button onClick={handlereset}>Cancel</Button>
                <Button

                    primary
                    disabled={projectName === "" || taskName === ""}
                >
                    Add Activity
                </Button>
            </ButtonContainer>
        </ButtonSection>
    )
}
