import { useEvent } from '@harelpls/use-pusher';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettaskData, updateTaskbyPusher } from '../Redux/Task/taskAction';
import { HeaderList, ListSection, Loader, TaskLists } from '../styled-components/ListSection'
import IndividualTask from './IndividualTask';

export default function ListBlock({ channel }) {
    const dispatch = useDispatch()
    const allTasks = useSelector((state) => state.tasks);
    const isLoading = useSelector((state) => state.isLoading);
    useEvent(channel, "kamal-event", (task) => {
        dispatch(updateTaskbyPusher(task));
    });

    useEffect(() => {
        dispatch(gettaskData());
    }, [dispatch]);
    return (
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
    )
}
