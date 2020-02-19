import React from 'react'
import { Grid, Box, FormLabel ,makeStyles } from '@material-ui/core' 

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const NumberField = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.root}>
            <Grid container>
                 <Grid container item xs={12}>{/*一行目 */}
                    <Grid item xs={4}>
                        <FormLabel>1</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>2</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>3</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>{/*二行目*/}
                    <Grid item xs={4}>
                        <FormLabel>4</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>5</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>6</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <FormLabel>7</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>8</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>9</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <FormLabel></FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel>0</FormLabel>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel></FormLabel>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NumberField
