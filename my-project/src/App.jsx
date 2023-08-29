import { Box, Button, Checkbox, Chip, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import './App.css'
import { Header } from './components/header'
import {HorizontalStepper} from './components/stepper'
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { ResumeDisplay } from './components/resumeDisplay';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const toolbarOptions = {
  toolbar:[['bold', 'italic', 'underline'],[{ 'list': 'bullet' }]]
}

function App() {
  const [value, setValue] = useState('');
  const [userInfo, setUserInfo] = useState('');
  
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentlyWork, SetCurrentlyWork] = useState(Boolean)
  const [empStatus, SetEmpStatus] = useState('')
  const [checkVal, setCheckVal] = useState('N');


  // jobTitle handler
  const jobTitleHandler = (text) =>{
    // console.log('text : ',text.target.value)
    setJobTitle(text.target.value)
  }
  // Company Name
  const companyNameHandler = (text) =>{
    setCompanyName(text.target.value)
  }
  // Start Date
  const startDateHandler =(date) =>{
    console.log(date)
    setStartDate(date)
  }
  // End Date
  const endDateHandler =(date) =>{
    console.log(date)
    setEndDate(date)
  }
  // currently work here
  const currentlyWorkHandler = () =>{
    setCheckVal(checkVal === 'Y' ? 'N' : 'Y')
  }
  // Location 
  
  // Employment status (status buttons)
  const empStatusHandle = (event) => {
    SetEmpStatus(event.target.value)
  }
  // Roles & Responsibilities {rich text editor}
  // Skills [array]

  return (
    <>
    <Box sx={{height:'20vh'}}>
      <Header />
      {/* splitter */}
      <HorizontalStepper />
    </Box>
    
    <Box sx={{width: '100vw', minHeight: '80vh', display:'flex',  }}>
      {/* form */}
      <Box sx={{width: '50%',minHeight: '80vh', }}>
        <Box sx={{display:'flex', justifyContent: 'space-between', padding: 2}}>
          <Typography variant="h6" align='left' >Work Experience</Typography> 
          <Button variant="contained" sx={{backgroundColor: '#b8b8b8'}} startIcon={<AddIcon />}>Add New</Button>
        </Box>

        {/* 1st row */}
        <Box sx={{display:'flex', padding: 2, justifyContent: 'space-between'}}>
            <Box sx={{width: '100%'}}>
            <Typography sx={{paddingX: 2}} align='start'> Employment status</Typography>
            <TextField onChange={(text) => jobTitleHandler(text)} sx={{width : '98%'}} id="outlined-basic" variant="outlined" />
            </Box>
            <Box sx={{width: '100%'}}>
            <Typography sx={{paddingX: 2}} align='start'> Company Name</Typography>
            <TextField onChange={(text) => companyNameHandler(text)} sx={{width : '98%'}} id="outlined-basic" variant="outlined" />
            </Box>
        </Box>

        {/* DATES */}
        <Box sx={{display:'flex', padding: 2, justifyContent: 'space-between'}}>
            <Box sx={{width: '100%'}}>
              <Typography sx={{paddingX: 2}} align='start'> Start Date</Typography>
              <Box width={checkVal == 'Y'?'48%':'98%'} sx={{borderWidth: '2px', padding: 1}}>
                <DatePicker dateFormat="dd MMM yyyy" title='startDate' showIcon={true} selected={startDate} onChange={(date) => startDateHandler(date)} />
              </Box>
            </Box>
            <Box hidden={checkVal == 'Y'?true:false} sx={{width: '100%'}}>
              <Typography sx={{paddingX: 2}} align='start'> End Date</Typography>
              <Box sx={{width : '98%',borderWidth: '2px', padding: 1}}>
                <DatePicker dateFormat="dd MMM yyyy" title='endDate' showIcon={true} disabled={checkVal === 'Y' ? true : false} selected={endDate} onChange={(date) => endDateHandler(date)} />
              </Box>  
            </Box>
        </Box>
        {/* checkbox */}
        <FormGroup sx={{display:'flex', paddingX: 2}}>
          <FormControlLabel control={<Checkbox checked={checkVal === 'Y' ? true : false} onChange={()=>{currentlyWorkHandler()}} name='checkedSystem' color = 'primary'/>}  label="I currently work here" />
        </FormGroup>
        

        {/* input location */}
        <Box sx={{display:'flex', flexDirection:'column', padding: 2, justifyContent: 'space-between'}}>
            <Typography sx={{paddingX: 2}} align='start'>Location</Typography>
            <TextField sx={{width : '100%'}} id="outlined-basic" placeholder="Dwarka, New Delhi" variant="outlined" />
        </Box>

        {/* employment status buttons + overflow style */}
        <Typography sx={{paddingX: 2}} align='start'> Employment status</Typography>
        <Box sx={{display:'flex', paddingX: 2, flexWrap: 'wrap' }}>
          <Button sx={{margin: 1}} onClick={(event) => empStatusHandle(event)} value='Full Time' variant={empStatus == "Full Time"?"contained":"outlined"} >Full Time</Button>
          <Button sx={{margin: 1}} onClick={(event) => empStatusHandle(event)} value='Part Time' variant={empStatus == "Part Time"?"contained":"outlined"} >Part Time</Button>
          <Button sx={{margin: 1}} onClick={(event) => empStatusHandle(event)} value='Contract/Freelancer' variant={empStatus == "Contract/Freelancer"?"contained":"outlined"} >Contract/Freelancer</Button>
          <Button sx={{margin: 1}} onClick={(event) => empStatusHandle(event)} value='Internship' variant={empStatus == "Internship"?"contained":"outlined"} >Internship</Button>
          <Button sx={{margin: 1}} onClick={(event) => empStatusHandle(event)} value='Any' variant={empStatus == "Any"?"contained":"outlined"} >Any</Button>
        </Box>

        {/* textbox */}
        <Typography sx={{paddingX: 2, marginTop: 2}} align='start'> Roles & Responsibilities</Typography>
        <Box sx={{minHeight:'150px', display:'flex', flexDirection: 'column', marginX: 2}}>
            <ReactQuill style={{height:'100px', width:'100%'}} theme="snow" value={value} onChange={setValue} modules={toolbarOptions} />
        </Box>
        {/* skill feature */}
        
        <Box sx={{display:'flex',flexDirection: 'column', padding: 2, justifyContent: 'space-between'}}>
          <Typography align='start'>Skills</Typography>
          <Typography fontSize={'0.8rem'} align='start'>Add skill keywords (max 10) to make your job more visible to the right candidates</Typography>
          <TextField sx={{width : '100%'}} id="outlined-basic" label="" variant="outlined" />
          <Typography sx={{marginTop: '10px'}} align='start'>Suggested Skills</Typography>
          <Box sx={{display:'flex',flexWrap: 'wrap', margin:2}}>
            <Chip sx={{padding:1, marginX: 1}} size='small' label='React' clickable={true} />
            <Chip sx={{padding:1, marginX: 1}} size='small' label='Angular' clickable={true} />
            <Chip sx={{padding:1, marginX: 1}} size='small' label='Javascript' clickable={true} />
            <Chip sx={{padding:1, marginX: 1}} size='small' label='Redux' clickable={true} />
            <Chip sx={{padding:1, marginX: 1}} size='small' label='NodeJs' clickable={true} />
          </Box>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'space-between', paddingX: 2}}>
          <Box>
            <Button ><Typography fontSize={'0.7rem'} color={'primary'}>I will do this later</Typography></Button>
          </Box>
          <Box>
            <Button sx={{marginRight: '5px'}} variant='outlined' startIcon={<ArrowBackOutlinedIcon />}>Back</Button>
            <Button variant='outlined' endIcon={<ArrowForwardOutlinedIcon />}>Next</Button>
          </Box>
        </Box>

        
      </Box>
      {/* resume builder */}
      
      <Box sx={{width: '50%',minHeight: '80vh', backgroundColor: '#9DB2BF'}}>
          {/* render userInfo */}
          <ResumeDisplay userInfo={userInfo} />
      </Box>
    </Box>
    </>
  )
}

export default App
