import React from 'react'
import { Grid, makeStyles } from '@material-ui/core' 

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
    },

});

const NumberField = () => {
    const classes = useStyle();
    return (
        <div className = {classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <label>1</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>2</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>3</label>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <label>4</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>5</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>6</label>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <label>7</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>8</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>9</label>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <label></label>
                    </Grid>
                    <Grid item xs={4}>
                        <label>0</label>
                    </Grid>
                    <Grid item xs={4}>
                        <label></label>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NumberField
