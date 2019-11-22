import * as React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Navbar from "./Navbar/Navbar";

import "./Layout.less";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Typography variant="h4" gutterBottom>
                            Kevin Cunanan
                        </Typography>
                        <Typography variant="body1">
                            <p>I'm a full stack engineer looking for new opportunities.</p>
                            <p>My experiences in software engineering has primarily been focused on internal tools that speed up daily activities and workflows by replacing old services with stable, functional applications.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <GridList cellHeight={300} cols={2}>
                            <GridListTile key="1" cols={1}>
                                <img src="http://www.kiplinger.com/kipimages/pages/19781.jpg" alt="Because I don't have any pretty photos" />
                                <GridListTileBar
                                    title="Float"
                                    subtitle={<span>Flexible Content Management GraphQL Service</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about test`}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        </GridList>
                    </Grid>
                </Grid>
                {/* About Me */}
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={7}>
                        About Me
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default AppLayout;
