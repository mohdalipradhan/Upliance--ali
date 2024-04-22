import { Flex } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorHtml(savedContent);
    }
  }, []);

  const handleChange = (html) => {
    setEditorHtml(html);
    localStorage.setItem('editorContent', html);
  };

  return (
    <Flex width={{md: "650px"}} bg="white"   borderRadius="7px">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
          ]
        }}
      />
    </Flex>
  );
};

export default RichTextEditor;
