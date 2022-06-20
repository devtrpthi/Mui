import React from "react";
import {Typography,AppBar, Card, CardActions, CardContent, CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles'; 

const useStyles = makeStyles((theme)=> ( {
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    }

}));

function App() {
    return(
        <>
            <CssBaseline />
            <AppBar positon="sticky">
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>    
            <main>
                <div className="classes.container">
                    <Container maxwidth="sm" style={{marginTop: '200px'}}>
                        <Typography variant="h2" align="center" gutterBottom>
                            Photo Album 
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone This is a phto album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                        <div>
                            <Grid container spacing={2} jsutify="cneter">
                                <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my photos
                                        </Button>
                                </Grid>
                                <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                
            </main>
        </>
    );
}

export default App;

