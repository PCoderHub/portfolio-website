import React from 'react'
import { Box, Card, List, ListItem, ListItemText, Typography } from '@mui/material'
import { otherexp } from '../essentials/Text'

function Other() {
  return (
    <Box>
      {otherexp.map((item) => (
        <Card sx={{padding: '20px', margin: '10px'}}>
          <Typography variant='h6' textAlign='center'>{item.company}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography fontStyle='italic'>{item.position}</Typography>
            <Typography>{item.from} to {item.to}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export default Other
