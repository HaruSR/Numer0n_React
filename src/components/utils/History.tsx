import React from 'react'
import { ListItem, List, Box, FormLabel } from '@material-ui/core'

const History = () => {
    return (
        <React.Fragment>
            <title>History</title>
            <List>
                <ListItem>
                    <Box>
                        <FormLabel>1</FormLabel>
                        <FormLabel>012</FormLabel>
                        <FormLabel>2h2b</FormLabel>
                    </Box>
            </ListItem>
                <ListItem>
                    <Box>
                        <FormLabel>2</FormLabel>
                        <FormLabel>012</FormLabel>
                        <FormLabel>2h2b</FormLabel>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box>
                        <FormLabel>3</FormLabel>
                        <FormLabel>012</FormLabel>
                        <FormLabel>2h2b</FormLabel>
                    </Box>
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default History
