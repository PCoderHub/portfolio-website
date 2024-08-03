import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Link, Typography } from '@mui/material';
import pdf from '../essentials/Resume_POOJA.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { resumeDetails } from '../essentials/Text';

function Resume() {

  return (
    <Box component='div' sx={{ marginTop: '70px'}}>
      <Box component='div' sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'none'}, justifyContent: {xs: 'none', md: 'space-between'}, mb: '10px', mt: '10px'}}>
        <Typography variant='h3' sx={{ textAlign: 'center'}}>Pooja Balachandran</Typography>
        <Link href={pdf} download='Resume_Pooja'>
          <Button variant='outlined' startIcon={<PictureAsPdfIcon/>}>Download PDF</Button>
        </Link>
      </Box>
      <Card sx={{p: 2}}>
        {resumeDetails.map((item) => (
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {item.heading}
          </AccordionSummary>
          <AccordionDetails>
            {item.component}
          </AccordionDetails>
        </Accordion>
        ))}
      </Card>
    </Box>
  )
}

export default Resume;