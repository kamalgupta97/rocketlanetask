import { useChannel, useEvent } from '@harelpls/use-pusher'
import React from 'react'

export default function ({ channel }) {
    useEvent(channel, "kamal-event", (task) => console.log(task, "Data"));
    return (
        <div></div>
    )
}
