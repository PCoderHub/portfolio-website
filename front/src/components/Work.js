import React from 'react'
import { workexp } from '../essentials/Text'
import { Box, Card, List, ListItem, ListItemText, Typography } from '@mui/material'

function Work() {
  return (
    <Box>
      {workexp.map((item) => (
        <Card sx={{padding: '20px'}}>
          <Typography variant='h6' textAlign='center'>{item.company}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography fontStyle='italic'>{item.position}</Typography>
            <Typography>{item.from} - {item.to}</Typography>
          </Box>
          <List>
              {item.description.map((des) => (
                <ListItem>
                  <ListItemText primary={des} />
                </ListItem>
              ))}
            </List>
        </Card>
      ))}
    </Box>
  )
}

export default Work
