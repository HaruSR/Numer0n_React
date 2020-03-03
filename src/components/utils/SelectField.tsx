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
    }
});
  

const SelectField = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.wrapper}>
            <Box width='30%' height='100%'>
                <History/>
            </Box>
            <Box width='70%' height='100%' display='flex' flexDirection='column'>
                <CallNumber/>
                <NumberField/>
            </Box>
        </Box>
    )
}

export default SelectField
