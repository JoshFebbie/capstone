import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';






const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean'],
    ]
}
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export default function Post() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

async function handleSubmit(event) {
    
  const formData = new FormData();
    formData.set("title", title);
    formData.set("summary", summary);
    formData.set("content", content);
    formData.set("files", files[0]);
    event.preventDefault();
    
    
    

  const response = await fetch("http://localhost:4000/post", {
        method: "POST",
        credentials: "include",
        body: formData,
   });
  if (response.ok) {
    setRedirect(true);
  }
}

if (redirect) {
    return <Navigate to={"/"} />;
}

  return (
    <form onSubmit={handleSubmit} className='postForm'>
        <input type="title" 
        placeholder={"Title"} 
        value={title} 
        onChange={event => setTitle(event.target.value)}/>
        <input type="summary" 
        placeholder={"Summary"} 
        value={summary}
        onChange={event => setSummary(event.target.value)}/>
        
        <input type="file" 
        onChange={event => setFiles(event.target.files)}
        />
        <ReactQuill 
        onChange={newValue => setContent(newValue)}
        value={content} 
        modules={modules} 
        formats={formats}/>
        <button type="submit" className='postBtn'>POST</button>
    </form>
  )
}