import { useEvent } from "@harelpls/use-pusher";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettaskData, updateTaskbyPusher } from "../Redux/Task/taskAction";
import { Header, TopSection } from "../styled-components/TopSection";
import IndividualTask from "./IndividualTask";
import { addTaskData } from "../Redux/Task/taskAction";
import { FormContainer } from "../styled-components";
import {
    BlockContainer,
    InputBox,
    InputContainer,
    InputSection,
    Label,
    LeftInput,
    RightInput,
} from "../styled-components/InputSection";
import {
    Button,
    ButtonContainer,
    ButtonSection,
} from "../styled-components/ButtonSection";
import {
    HeaderList,
    ListSection,
    Loader,
    TaskLists,
} from "../styled-components/ListSection";
export default function Task({ channel }) {
    const [projectName, setProjectName] = React.useState("");
    const [taskName, setTaskName] = React.useState("");
    const [isBillable, setIsBillable] = React.useState(false);
    const allTasks = useSelector((state) => state.tasks);
    const isLoading = useSelector((state) => state.isLoading);
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch();



    const handleSubmit = () => {
        let payLoad = {
            projectName,
            taskName,
            isBillable,
            userId,
            id: allTasks.length + 1,
        };
        dispatch(addTaskData(payLoad));
    };
    const handlereset = () => {
        setProjectName("");
        setTaskName("");
        setIsBillable(false);
    };
    useEvent(channel, "kamal-event", (task) => {
        dispatch(updateTaskbyPusher(task));
    });

    useEffect(() => {
        dispatch(gettaskData());
    }, [dispatch]);

    return (
        <FormContainer>
            <TopSection>
                <Header>Activities</Header>
            </TopSection>

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

            <ListSection>
                <HeaderList>
                    <h3>Team Tasks</h3>
                </HeaderList>

                <TaskLists>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        allTasks?.map((item) => <IndividualTask key={item.id} {...item} />)
                    )}
                </TaskLists>
            </ListSection>

            <ButtonSection>
                <ButtonContainer>
                    <Button onClick={handlereset}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        primary
                        disabled={projectName === "" || taskName === ""}
                    >
                        Add Activity
                    </Button>
                </ButtonContainer>
            </ButtonSection>
        </FormContainer>
    );
}
