import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";

export default function Register() {

    const[open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    const handleClickOk = () => {
        document.write("Registered Successfully...");
    }
  return (
    <div className="container-fluid">   
        <h3>React Material Dialog</h3>
        {/* Here we are designing a button and for that you need a Button component comes from react material for that we need to import the library for it https://mui.com/
            where you will get all the properties of the Button component */}

        <Button variant = "contained" color = "primary" onClick={handleClickOpen}>      {/* variant and color are the attributes */}      
            Register User
        </Button>

        <Dialog open = {open} onClose={handleClickClose}>       {/* open is the attribute in the Dialog */}  

            <DialogTitle>Register User</DialogTitle>
        
            <DialogContent>
                <DialogContentText>
                Your Register Form here...
                </DialogContentText>

                <DialogActions>
                    <Button color = "primary" onClick={handleClickOk}>Register</Button>
                    <Button color = "primary" onClick={handleClickClose}>Cancel</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </div>
  )
}

