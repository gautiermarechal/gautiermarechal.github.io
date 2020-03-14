import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'inherit',
        boxShadow: 'none',
        color: 'black',
        flexGrow: 1,
    },
    leftElements: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        flexGrow: 1,
    },
    rightElements: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        overflow: 'scroll',
    },
}));

export default function TopBar(){
    const classes = useStyles();
    return(
    <AppBar className={classes.root} position="sticky">
        <ToolBar>
            <div className={classes.leftElements}>
                <IconButton><GitHubIcon></GitHubIcon></IconButton>
                <IconButton><LinkedInIcon></LinkedInIcon></IconButton>
            </div>
            <div className={classes.rightElements}>
                <Typography variant="body1">gaut[dot]marechal@gmail[dot]com</Typography>
                <Typography variant="body1">514-576-9414</Typography>
            </div>
        </ToolBar>
    </AppBar>
    );
};