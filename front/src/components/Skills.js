import { Accordion, Box, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Typography} from '@mui/material';
import React from 'react';
import { industrySkills } from '../essentials/Text';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Skills() {

  return (
    <Box>
        {industrySkills.map((skill) => (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {skill.title}
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {skill.skills.map((item) => (
                            <ListItem>
                                <Typography fontSize='15px' >{item}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        ))}
    </Box>
  )
}

export default Skills;
