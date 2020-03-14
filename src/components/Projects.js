import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Projects(props) {
    const classes = useStyles();
    return(
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h3">Current Projects</Typography>
            <Grid container spacing={2}>
                <ProjectCard/>
            </Grid>
        </Container>
    );
}