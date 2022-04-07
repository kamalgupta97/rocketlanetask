import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskData } from "../Redux/Task/taskAction";
import { DeleteButton, Taskcont, Taskcontentbottom, Taskcontenttop, TaskLeft, TaskList, TaskRight } from "../styled-components/ListSection";
import dollar from '../dollar.svg';
import del from '../del.svg';
export default function IndividualTask({
    taskName,
    projectName,
    isBillable,
    userId,
    id,
}) {
    const myuserId = useSelector((state) => state.userId);
    const dispatch = useDispatch();
    return (
        <TaskList>
            <Taskcont>
                <TaskLeft>
                    <Taskcontenttop>
                        <div>
                            <p>{taskName}</p>
                        </div>
                    </Taskcontenttop>
                    <Taskcontentbottom>
                        {isBillable && (
                            <img src={dollar} alt="Dollar Img" />

                        )}
                        <span>{projectName}</span>
                    </Taskcontentbottom>

                </TaskLeft>
                <TaskRight>
                    <DeleteButton>
                        {myuserId === userId && (
                            <img src={del} onClick={() => dispatch(deleteTaskData(id))} alt="Delete Img" />
                        )}
                    </DeleteButton>
                </TaskRight>


            </Taskcont>
        </TaskList>
    );
}
