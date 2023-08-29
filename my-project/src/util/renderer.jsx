import { Box } from '@mui/material';
import React from 'react';

function renderRichText(response) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(response, 'text/html');
  const listItems = doc.querySelectorAll('li');

  return (
    <ul>
      {Array.from(listItems).map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item.innerHTML }} />
      ))}
    </ul>
  );
}

function RichTextRenderer({ response }) {
  const renderedContent = renderRichText(response);

  return <Box sx={{display: 'flex', justifyContent:'start'}}>{renderedContent}</Box>;
}

export default RichTextRenderer;