import { Box } from '@mui/material';
import React from 'react';

function renderRichText(response) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(response, 'text/html');
  const listItems = doc.querySelectorAll('ul li');
  const paragraphs = doc.querySelectorAll('p');

  return (
    <div>
      <ul>
        {Array.from(listItems).map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item.innerHTML }} />
        ))}
      </ul>
      {Array.from(paragraphs).map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.innerHTML }} />
      ))}
    </div>
  );
}

function RichTextRenderer({ response }) {
  console.log(response)
  const renderedContent = renderRichText(response);

  return <Box sx={{display: 'flex', justifyContent:'start'}}>{renderedContent}</Box>;
}

export default RichTextRenderer;