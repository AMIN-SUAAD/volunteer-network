import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './App';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import logo from './logos/Group 1329.png'
import Button from '@material-ui/core/Button';

const Register = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18T21:11:54'));
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registerSuccess, setRegisterSuccess] = useState({});

    const handleDateChange = (date) => {
        console.log(typeof(date));
        setSelectedDate(date);
    };

    console.log(typeof(selectedDate))
    console.log(typeof(new Date('2020-08-18T21:11:54')))
    const { activity } = useParams();
    console.log(selectedDate)


    const handleRegister = () => {
            const newRegister = {...loggedInUser, date: selectedDate}
            fetch('http://localhost:5000/addbooking', {
             method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
            })
            .then(res => res.json())
            .then(data => {
                data && setRegisterSuccess({Register: 'Success'})
            })
            
            
    }
   
    return (
        <div>

            <img style={{ width: '200px' }} src={logo} alt="" />
            <h2 style={{ textAlign: 'center', marginTop: '110px' }}>Activity: {activity}</h2>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Desired Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />


                </Grid>
            </MuiPickersUtilsProvider>
            <br />
            <div style={{ textAlign: 'center' }}>
                <Button onClick = {handleRegister} variant="contained" color="Primary">Register Now</Button>
            </div>
            {
                registerSuccess && <p>Successful Registration!</p>
            }
        </div>
    );
};

export default Register;