import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import History from './History';
import CallNumber from './CallNumber';
import NumberField from './NumberField';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        height: 100,
        window: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    }
});
  

const SelectField = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.wrapper}>
            <Box>
                <History/>
            </Box>
            <Box>
                <CallNumber/>
                <NumberField/>
            </Box>
            
        </Box>
    )
}

export default SelectField
