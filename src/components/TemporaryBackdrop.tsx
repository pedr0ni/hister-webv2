import { Backdrop, CircularProgress } from '@material-ui/core'
import React from 'react'

export const TemporaryBackdrop : React.FC<{loading: boolean}> = ({loading}) => {
    return (
        <Backdrop style={{color: '#FFF', zIndex: 5000}} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}