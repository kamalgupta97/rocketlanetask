import React from 'react'
import Input from './Input';
import styles from '../styles/Taskform.module.css'

import IndividualTask from './IndividualTask';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskData, deleteTaskData } from '../Redux/Task/taskAction';
import { Button, Loader } from '../styled-components/styled';

export default function TaskForm() {
    const dispatch = useDispatch()
    const allTasks = useSelector(state => state.tasks)
    const isLoading = useSelector(state => state.isLoading)
    console.log(allTasks)
    const userId = useSelector(state => state.userId)


    const [projectName, setProjectName] = React.useState("")
    const [taskName, setTaskName] = React.useState("")
    const [isBillable, setIsBillable] = React.useState(false)


    const handleSubmit = (e) => {
        let payLoad = {
            projectName, taskName, isBillable, userId, id: allTasks.length + 1
        }
        dispatch(addTaskData(payLoad))


    }
    const handlereset = (e) => {

        setProjectName("")
        setTaskName("")
        setIsBillable(false)

    }


    return (
        <div className={styles.formContainer}>
            <div className={styles.inputBoxCont}>
                <Input setProjectName={setProjectName} projectName={projectName} label={"Project Name"} placeholder={"Eg. Nike Implementation "} cssClass={"fullwidth"} />
            </div>
            <div className={styles.checkboxCont}>
                <Input setTaskName={setTaskName} taskName={taskName} label={"Task Name"} placeholder={"Eg. Kick-off call "} cssClass={"halfwidth"} />

                <span className={styles.checkboxContent}>
                    <label htmlFor="billable">Billable</label>
                    <input type="checkbox" name="" id="" checked={isBillable} onChange={() => setIsBillable(!isBillable)} />
                </span>

            </div>
            <div className={styles.taskListHead}>
                <h3>Team Tasks</h3>
            </div>
            <div className={styles.tasklist_Cont}>


                {isLoading ? <Loader /> : allTasks?.map(item => <IndividualTask key={item.id} {...item} />)}

            </div>

            <div className={styles.buttonsCont}>
                <div className={styles.buttonsContent}>
                    <Button onClick={handlereset}>Cancel</Button>
                    <Button onClick={handleSubmit} primary disabled={projectName == "" || taskName == ""}>Add Activity</Button>

                </div>

            </div>



        </div>
    )
}
