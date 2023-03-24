import React from 'react'
import '../Style/Login.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const gotoLogin = () => {
        navigate(`/login`);
    }
    return (
        <div className='login_body' >
            <div className='login_div'>
                <h2 className='mb_1' >Register</h2>
                <TextField 
                    id="standard-basic" 
                    label="Account Number" 
                    variant="standard" 
                    style={{ width: '100%', marginBottom:'1rem' }} 
                />
                <TextField 
                    id="standard-basic" 
                    label="User Name" 
                    variant="standard" 
                    style={{ width: '100%', marginBottom:'1rem' }} 
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    style={{ width: '100%', marginBottom:'1rem' }} 
                />
                <TextField
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    style={{ width: '100%', marginBottom:'1rem' }} 
                />
                <Button variant="contained" style={{ width: '100%', marginBottom:'1rem' }} >Register</Button>
                <Button variant="text" style={{ width: '100%' }}  onClick={gotoLogin} >Login</Button>

            </div>
        </div>
    )
}

export default Register