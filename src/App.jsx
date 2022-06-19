import React from "react";
import {Typography,AppBar, Card, CardActions, CardContent, CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


function App() {
    return(
        <>
            <CssBaseline />
            <AppBar positon="relative">
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>    
            <main>
                <div>
                    <Container maxwidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album 
                        </Typography>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album 
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone This is a phto album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
                        </Typography>
                    </Container>
                </div>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
            </main>
        </>
    );
}

export default App;

