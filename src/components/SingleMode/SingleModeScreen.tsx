import React, { Component } from 'react'
import SelectField from '../utils/SelectField'
import { Box } from '@material-ui/core'

export class SingleModeScreen extends Component {
    render() {
        return (
            <Box>
                <title>SingleMode</title>
                <SelectField/>
            </Box>   
        )
    }
}

export default SingleModeScreen
