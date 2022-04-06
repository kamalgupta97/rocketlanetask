import { useChannel, useEvent } from '@harelpls/use-pusher'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettaskData, updateTaskbyPusher } from '../Redux/Task/taskAction';
import styles from '../styles/task.module.css'
import TaskForm from './TaskForm';

export default function ({ channel }) {
    const dispatch = useDispatch()

    useEvent(channel, "kamal-event", (task) => {

        dispatch(updateTaskbyPusher(task))


    })

    useEffect(() => {
        dispatch(gettaskData())
    }, [])

    return (
        <div className={styles.taskcont}>


            <div className={styles.header_cont}>
                <div className={styles.header_content}>
                    Activities
                </div>
                <TaskForm />
            </div>

        </div>
    )
}
