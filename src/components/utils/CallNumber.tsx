import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
        width: '100%',
    },
    content: { 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    calledNumber: {
        padding: '2rem',
        border: '1px solid gray',
    },
});

const CallNumber = () => {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.content}>
                <Box className={classes.calledNumber}><span>1</span></Box>
                <Box className={classes.calledNumber}><span>2</span></Box>
                <Box className={classes.calledNumber}><span>3</span></Box>
            </Box>
        </Box>
    )
}

export default CallNumber
