import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles( theme => ({
    root: {
        margin: theme.spacing(4),
        boxShadow: 'none',
    },
    content: {
        padding: theme.spacing(4),
    },
    cardContent: {
        paddingBottom: theme.spacing(3),
        overflow: 'scroll',
    },
    divider: {
        marginBottom: theme.spacing(4),
        overflow: 'hidden',
    },
    progressBar: {
        backGroundColor: 'green',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        paddingBottom: theme.spacing(0),
    },
}));

export default function Projects() {
    const classes = useStyles();
    const [name, setName] = useState([
        'Mathieu Portfolio',
        'Planet.io',
        'Electric Longboard',
        'Bike Security System'
    ]);
    const [description, setDescription] = useState([
        'This website is intended to present Mathieu Tranchida\' s work in photography and video production. All is created with React and Material UI front-end library. The only backend present is a database to store photos and handling of HTTP methods to receive emails and send emails to user when the form is submitted. ',
        'This website is a project intended to centralize and structure data on environmental problems. My goal was to filter fake news and biased information, to gather in form a neutral and rational set of data to present. All this information is retrieved via articles, reports and research papers posted and approved by the community. Future goal is to make this an open source platform, where people can exchange with each other potential solutions, putting aside any political or useless form of bias.',
        'Building my own electric skateboard for fun',
        'Build a security system with a Raspberry Pi and a geo localation chip for my bike in Montreal, where bikes theft is popular.'
    ]);
    const [status, setStatus] = useState([
        '90%, almost deployed',
        '70% all front-end done, miss API calls',
        '50% have all components',
        '5% just an idea'
    ]);
    let projects = [
        {
            name: name[0],
            description: description[0],
            status: status[0],
            progress: 90,
            link: 'https://github.com/gautiermarechal/mathieu_portfolio',
        },
        {
            name: name[1],
            description: description[1],
            status: status[1],
            progress: 70,
            link: 'https://github.com/gautiermarechal/Planet.io',
        },
        {
            name: name[2],
            description: description[2],
            status: status[2],
            progress: 50,
            link: 'https://www.instructables.com/id/DIY-Electric-Longboard/',
        },
        {
            name: name[3],
            description: description[3],
            status: status[3],
            progress: 5,
            link: 'soon',
        },

]

    return(
        <React.Fragment>
        {projects.map( data => 
        <Grid item xs={12} md={6}>
        <Paper className={classes.root}>
            <div className={classes.content}>
            <Typography variant="h3" align="center" className={classes.cardContent}>{data.name}</Typography>
            <Divider className={classes.divider}/>
            <Typography variant="body1" className={classes.cardContent}><Typography variant="h5">Description:</Typography>{data.description}</Typography>
            <Typography variant="body1" className={classes.cardContent}><Typography variant="h5">Status:</Typography> {data.status}</Typography>
            <Typography variant="h5">Progression:</Typography>
            <LinearProgress variant="determinate" value={data.progress} className={classes.progressBar}/>
            <Typography variant="body1" className={classes.cardContent}><Typography variant="h5">Link: </Typography><a href={data.link}>{data.link}</a></Typography>
            </div>
        </Paper>
        </Grid>)}
        </React.Fragment>
    );
}