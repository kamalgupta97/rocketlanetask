import React from 'react'
import { BlockContainer, InputBox, InputContainer, InputSection, Label, LeftInput, RightInput } from '../styled-components/InputSection'

export default function InputBlock({ projectName, setProjectName, taskName, setTaskName, isBillable, setIsBillable }) {
    return (
        <InputSection>
            <InputContainer>
                <BlockContainer>
                    <Label htmlFor="project">Project Name</Label>
                    <InputBox
                        name="project"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        primary
                        placeholder="Eg. Nike Implementation"
                    />
                </BlockContainer>
            </InputContainer>

            <InputContainer>
                <LeftInput>
                    <Label htmlFor="task">Task Name</Label>
                    <InputBox
                        name="task"
                        required
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Eg. Kick-off call"
                    />
                </LeftInput>

                <RightInput>
                    <label htmlFor="billable">Billable</label>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={isBillable}
                        onChange={() => setIsBillable(!isBillable)}
                    />
                </RightInput>
            </InputContainer>
        </InputSection>
    )
}
