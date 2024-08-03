import { Alert, Box, Button, Card, Collapse, Grid, IconButton, Link, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().min(2, 'Enter atleast given name').required('Full Name is required'),
  email: Yup.string().email('enter a valid email').required('Email is required'),
  shortMessage: Yup.string().required('Short message is required if you want to sent a message')
});

function Contact() {

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = useState(true);

  const handleSubmit = async (data, { resetForm}) => {

    const { fullName, email, shortMessage } = data;

    if(fullName === '' || email === '' || shortMessage === '') {
      setError('Please fill the details');
    }

    const contactDetails = { fullName, email, shortMessage };

    const response = await fetch('https://portfolio-website-4-by7b.onrender.com/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    console.log(json);

    if(!response.ok || response.status !== 200) {
      alert(json.error);
    }
    if(response.ok) {
      setError(null);
      setSuccess('Message received');
      setOpen(true);
      resetForm();
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      shortMessage: ""
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <Box
     component='div' 
     sx={{ marginTop: '70px', display: 'flex', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', padding: '20px'}}
     >
      {success && <Box sx={{ width: '80%'}}>
          <Collapse in={open}>
            <Alert action={
              <IconButton aria-label='close' color='inherit' size='small' onClick={() => setOpen(false)} >
                <CloseIcon fontSize='inherit'/>
              </IconButton>
            }
            sx={{mb: 2, mt: 2}}
            >
              Your message has been received
            </Alert>
          </Collapse>
        </Box>}
      <Card
       component='form' 
       sx={{
         display: 'flex', 
         flexDirection: 'column', 
         padding: '10px', 
         margin: '10px',
         justifyContent: 'center', 
         alignItems: 'center',
         width: {md: '50%', xs: '100%'},
         height: { xs: '100%', md: '50vh'}
         }} 
       onSubmit={formik.handleSubmit}
         >
        <TextField
         id='fullName'
         label='Full Name' 
         variant='standard' 
         value={formik.values.fullName} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.fullName && Boolean(formik.errors.fullName)}
         helperText={formik.touched.fullName && formik.errors.fullName}
         sx={{ width: '80%'}}
         />
        <TextField
         id='email'
         label='Email' 
         type='email' 
         variant='standard' 
         value={formik.values.email} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.email && Boolean(formik.errors.email)}
         helperText={formik.touched.email && formik.errors.email}
         sx={{ width: '80%'}}
         />
        <TextField
         id='shortMessage'
         label='Short message' 
         multiline 
         rows={4} 
         variant='standard' 
         value={formik.values.shortMessage} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.shortMessage && Boolean(formik.errors.shortMessage)}
         helperText={formik.touched.shortMessage && formik.errors.shortMessage}
         sx={{ width: '80%'}}
         />
        <Button
         variant='contained' 
         sx={{
           borderRadius: '45%', 
           margin: '10px',
           width: '40%'
           }} 
           type='submit'
           >
            Contact Me
            </Button>
        {error && <Box sx={{
          border: '1px solid red',
          color: 'red',
        }}>{error}</Box>}
      </Card>
      <Card sx={{
         display: 'flex', 
         flexDirection: 'column',
         padding: '10px', 
         margin: '10px',
         justifyContent: 'center', 
         alignItems: 'center',
         width: {md: '50%', xs: '100%'},
         height: { xs: '100%', md: '50vh'}
         }} >
        <Typography variant='h3'>Contact</Typography>
        <Box component='div'>
          <Grid container sx={{m: 3}}>
            <Grid item><EmailIcon/></Grid>
            <Grid item><Typography>poojapbalachandran@gmail.com</Typography></Grid>
          </Grid>
          <Grid container sx={{m: 3}}>
            <Grid item><HomeIcon/></Grid>
            <Grid item><Typography>Based in Coventry, UK</Typography></Grid>
          </Grid>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <IconButton sx={{ mr: 2}}><Link target='_blank' href='https://www.linkedin.com/in/pooja-balachandran-889b40170/' rel='noopener noreferrer'><LinkedInIcon sx={{color: 'black'}}/></Link></IconButton>
          <IconButton sx={{ ml: 2}}><Link target='_blank' href='https://www.facebook.com/pooja.balachandran.1' rel='noopener noreferrer'><FacebookIcon sx={{color: 'black'}}/></Link></IconButton>
        </Box>
      </Card>
     </Box>
  )
}

export default Contact;
