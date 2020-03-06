import React, { Component } from 'react'
import SelectField from '../utils/SelectField'
import { Box } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const useStyle = (theme: Theme) : StyleRules => createStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    }
});

class SingleModeScreen extends Component<any> {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.wrapper}>
                <label>SingleMode</label>
                <SelectField/>
            </Box>   
        )
    }
}

export default withStyles(useStyle)(SingleModeScreen)
