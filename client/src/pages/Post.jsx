import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Post() {
  return (
    <form>
        <input type="text" placeholder={"Title"} />
        <input type="summary" placeholder={"Summary"} />
        <input type="file" />
        <ReactQuill/>
        <button type="submit" className='postBtn'>POST</button>
    </form>
  )
}