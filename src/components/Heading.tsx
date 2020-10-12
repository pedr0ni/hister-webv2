import { Divider, Typography } from '@material-ui/core'
import React from 'react'

export interface IHeadingProps {
    title: string,
    description: string
}

export const Heading : React.FC<IHeadingProps> = ({children, title, description}) => {
    return (
        <div>
            <Typography variant="h6" className='md-title'>
                {title}
            </Typography>
            <Typography className='md-subtitle' variant="subtitle1">
                {description}
            </Typography>

            {children}

            <Divider style={{marginBottom: 20}} />
        </div>
    )
}