import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import History from './History';
import CallNumber from './CallNumber';
import NumberField from './NumberField';

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
        <div className = {classes.wrapper}>
            <div>
                <History/>
            </div>
            <div>
                <CallNumber/>
                <NumberField/>
            </div>
            
        </div>
    )
}

export default SelectField
