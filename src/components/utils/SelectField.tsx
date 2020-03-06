import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import History from './History';
import CallNumber from './CallNumber';
import NumberField from './NumberField';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        height: '100%',
        window: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'lightgreen',
        margin: 0
    },
    historyContent: {
        display: 'flex',
        justifyContent: 'center',
        height: '500'
    },
    left_content: {
        width: '30%', 
        height: '100%'
    },
    right_content: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        height: '100%'
    }
});
  

const SelectField = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.wrapper}>
            <Box className = {classes.left_content}>
                <History/>
            </Box>
            <Box className = {classes.right_content}>
                <CallNumber/>
                <NumberField/>
            </Box>
        </Box>
    )
}

export default SelectField
