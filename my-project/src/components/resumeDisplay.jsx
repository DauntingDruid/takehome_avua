import { Box, Typography } from "@mui/material";
import React from "react";
import RichTextRenderer from "../util/renderer";

function formatMonthYear(date) {
    if (!date) {
      return '';
    }
  
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    return `${month}/${year}`;
  }

function ResumeDisplay({jobTitle,companyName,startDate, endDate, present, RR,location, role}) {
    const formatedStartDate = formatMonthYear(startDate);
    const formatedEndDate = formatMonthYear(endDate);

  return (
    <>
        <Box sx={{ display: 'flex'}}>
          <Typography variant="h3" align="start">{jobTitle}</Typography>
          <Typography fontSize={'0.8rem'} sx={{margin: 1}} align="start">{role}</Typography>
        </Box>
        <Box sx={{ display: 'flex',width:'100%', justifyContent: 'space-between'}}>
          <Typography variant="h5" align="start">{companyName?companyName+'-':''}{location}</Typography>
          <Typography align="start">{formatedStartDate?formatedStartDate+'-':''}{present=='Y'?'present':formatedEndDate}</Typography>
        </Box>   
        <RichTextRenderer response={RR} />
    </>
  );
}

export default ResumeDisplay