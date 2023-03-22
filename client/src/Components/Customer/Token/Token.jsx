import { Button } from '@mui/material'
import React from 'react'
import MultipleSelect from './SelectServices'

const Token = () => {
  return (
    <div style={{
        display:'flex',
        width: '100%',
        height: '80vh',
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection: 'column',
    }}>
        <MultipleSelect />
        <div style={{
            marginTop:'1rem'
        }} >
            <Button variant='contained'> Generate Token </Button>
        </div>
    </div>
  )
}

export default Token