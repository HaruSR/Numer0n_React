import React from 'react'
import { Grid, Box, Button ,makeStyles } from '@material-ui/core' 

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
        padding: '0.5rem',
    },
    dialButton: { 
        height: '100%',
        width: '100%',
        border: '1px solid gray',
    }
});

const NumberField = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.root}>
            <Grid container>
                 <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial} >
                        <Button className={classes.dialButton}>1</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>2</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>3</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>4</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>5</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>6</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>7</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>8</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>9</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}></Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}>0</Button>
                    </Grid>
                    <Grid item xs={4} className={classes.numberDial}>
                        <Button className={classes.dialButton}></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NumberField
