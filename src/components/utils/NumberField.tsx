import React from 'react'
import { Grid, Box, FormLabel ,makeStyles } from '@material-ui/core' 

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
    },
    numberDial: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // borderColor: '',
        // borderTopWidth: '0.2px',
        // borderStyle: 'solid'
    },
});

const NumberField = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.root}>
            <Grid container>
                 <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial} >
                        <FormLabel>1</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>2</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>3</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>4</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>5</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>6</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>7</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>8</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>9</FormLabel>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel></FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel>0</FormLabel>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <FormLabel></FormLabel>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NumberField
