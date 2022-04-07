import { useChannel } from "@harelpls/use-pusher";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskData } from "../Redux/Task/taskAction";
import { FormContainer } from "../styled-components";
import TopHeader from "./TopHeader";
import BottomFotter from "./BottomFotter";
import ListBlock from "./ListBlock";
import InputBlock from "./InputBlock";
export default function Task() {
    const channel = useChannel("kamal-channel");
    const [projectName, setProjectName] = React.useState("");
    const [taskName, setTaskName] = React.useState("");
    const [isBillable, setIsBillable] = React.useState(false);
    const allTasks = useSelector((state) => state.tasks);
    console.log(allTasks)
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
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


    return (
        <FormContainer onSubmit={handleSubmit}>
            <TopHeader />
            <InputBlock projectName={projectName} setProjectName={setProjectName} taskName={taskName} setTaskName={setTaskName} isBillable={isBillable} setIsBillable={setIsBillable} />
            <ListBlock channel={channel} />
            <BottomFotter handlereset={handlereset} projectName={projectName} taskName={taskName} />
        </FormContainer>
    );
}
