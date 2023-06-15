import { formatISO9075 } from "date-fns";
import { NavLink } from "react-router-dom";

export default function Post({_id, title, coverImg, summary, createdAt, author}) {
  return (
    <div className="post">
      <div className="image">
        <NavLink to={`/posts/${_id}`}>
        <img src={"http://localhost:4000/" + coverImg} alt=""
          className="brown"
        />
        </NavLink>
      </div>
      <div className="texts">
        <NavLink to={`/posts/${_id}`}>
        <h2>{title}</h2>
        </NavLink>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt), "MMM d, yyyy h:mm aaa ")}</time>
          
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
