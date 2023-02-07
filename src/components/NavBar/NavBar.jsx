import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function NavBar ({handleLogout}){
    return(
        <AppBar position="static" color="success">
            <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
                <Link to="" onClick={handleLogout} style={{ textDecoration: 'none', color: "white" }}>
                growth
                </Link>
            </Typography>
            <Button color="inherit">
                <Link to="" onClick={handleLogout} style={{ textDecoration: 'none', color: "white" }}>
                Logout
                </Link></Button>
            {/* eventually include avatar icon and auth and logout */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;