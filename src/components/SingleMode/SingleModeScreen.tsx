import React, { Component } from 'react'
import SelectField from '../utils/SelectField'
import { Box } from '@material-ui/core'

export class SingleModeScreen extends Component {
    render() {
        return (
            <Box height='100vh' display='flex' flexDirection='column'>
                <label>SingleMode</label>
                <SelectField/>
            </Box>   
        )
    }
}

export default SingleModeScreen
