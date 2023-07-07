import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form';
import {TextField, Button} from '@mui/material';

function Contact() {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { register, handleSubmit} = useForm();
    const onSubmit: SubmitHandler = (data) => {
        window.location.href=`mailto:abhimanyu10gupta@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email}) `
    };
  return (
    <Box height="100vh" width="100vw" textAlign="center"  sx={{
        scrollSnapAlign: "center"
    }}>
        <Typography paddingTop={"10rem"} variant={"h3"}>
            Contact
        </Typography>
        <Box display="flex" flexDirection={'column'} paddingTop={"10rem"} justifyContent="center" alignItems={"center"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" sx={{
                    '& > :not(style)': { m: 1, width: isNonMobileScreens? '14rem': '9.5rem'  },
                }}>
                    <TextField variant={"standard"} {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <TextField  variant={"standard"} {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </Box>
                <Box display="flex" flexDirection={"column"}  justifyContent="center" alignItems="center" sx={{
                    '& > :not(style)': { m: 1, width: isNonMobileScreens? '30rem': '20rem' },
                }}>
                    <TextField variant={"standard"} {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <TextField multiline rows={4} variant={"standard"} {...register('message')} placeholder='Message' className='contactInput' name="" id="">
                    </TextField>
                    <Button type='submit' fullwidth>
                        Submit
                    </Button>
                </Box>
            </form>
            
        </Box>
    </Box>
  )
}

export default Contact