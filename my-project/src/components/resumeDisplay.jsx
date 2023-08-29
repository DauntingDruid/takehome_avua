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

function ResumeDisplay({jobTitle,companyName,startDate, endDate, present, RR}) {
    const formatedStartDate = formatMonthYear(startDate);
    const formatedEndDate = formatMonthYear(endDate);

  return (
    <>
        <Typography variant="h3" align="start">{jobTitle}</Typography>
        <Box sx={{ display: 'flex',width:'100%', justifyContent: 'space-between'}}>
          <Typography variant="h5" align="start">{companyName}</Typography>
          <Typography align="start">{formatedStartDate?formatedStartDate+'-':''}{present=='Y'?'present':formatedEndDate}</Typography>
        </Box>   
        <RichTextRenderer response={RR} />
    </>
  );
}

export default ResumeDisplay