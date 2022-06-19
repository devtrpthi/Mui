import React from "react";
import {Typography,AppBar, Card, CardActions, CardContent, CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";

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
        </>
    );
}

export default App;

