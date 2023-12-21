'use client'

import { Card } from '@radix-ui/themes';
import React from 'react'
import { Bar, BarChart, Label, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface Props {
    open: number;
    inProgress: number;
    closed: number;
  }

const IssueChart = ({open, inProgress, closed}: Props) => {
    const data = [
        { Label: 'Open', value: open},
        { Label: 'In Progress', value: inProgress},
        { Label: 'Closed', value: closed}
    ]
  return (
    <Card>
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
                <XAxis dataKey='label' />
                <YAxis />
                <Bar dataKey='value' barSize={60} fill='#6e56cf' />
            </BarChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart