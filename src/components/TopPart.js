import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( theme => ({
    root: {
        margin: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2),
        },
        flexGrow: 1,
    },
    title: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(10),
        }
    },
    paragraph: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(10),
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
        },
        lineHeight: '1.7',
    }
}));

export default function TopPart() {
    const classes = useStyles();
    return(
    <Container maxWidth="md" className={classes.root}>
        <Typography variant="h3" className={classes.title}>Bonjour, Hi!</Typography>
        <Typography variant="body1" className={classes.paragraph}>My name is Gautier, I am a last year college student at Concordia University. I study Business Technology Management and Computer Science as a minor. <br/> I am passionate about creating and building all kind of stuff, especially tech related. I am willing to learn every day. What I strive for the most right now is web development. <br/> I am currently learning React online and by working on my own projects. I am also using Angular in my part-time internhsip within a startup. <br/> For front-end design, I use Material-UI, Bootstrap and Ion. <br/> In terms of deployment and backend, I learn a lot about AWS, git and Node.js to build lambda functions.
        <br/>This website is dedicated to show my current projects, and help me monitor my progression, to keep the momentum! 
        <br/>Feel free to check out my project below!
        <br/>My contacts are in the top left and right!
        <br/>See you!</Typography>
    </Container>
    );
}