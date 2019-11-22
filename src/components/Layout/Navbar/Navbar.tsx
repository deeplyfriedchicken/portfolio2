import * as React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            KC
                        </Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About Me</Button>
                        <Button color="inherit">Contact</Button>
                        <hr />
                        <Button color="inherit">Blog</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}