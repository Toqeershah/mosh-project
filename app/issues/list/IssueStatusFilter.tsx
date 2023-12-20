'use client'

import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const statuses: {label: String, value?: Status}[] = [
    {label: 'All'},
    {label: 'Open', value: 'OPEN'},
    {label: 'In Progress', value: 'IN_PROGRESS'},
    {label: 'Closes', value: "CLOSES"}
]

const IssueStatusFilter = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='filter by status...' />
        <Select.Content>
            {statuses.map(status => (
             <Select.Item key={status.value} value={status.value || "npm "}>
                {status.label}
             </Select.Item>
            ))}
        </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter