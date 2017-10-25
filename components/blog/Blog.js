import React from "react";
import config from "../../config";
import TimeAgo from "react-timeago";

const Blog = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={config.api + data.image} alt={data.title} />
        </figure>
      </div>
      <div className="card-content">
        <a href="#" style={{ marginBottom: '10px', display: 'block' }}>
          <h2 className="title is-4">{data.title}</h2>
        </a>
        <div className="content">
          {data.description}
          <br />
          <time datetime="2016-1-1">
            <TimeAgo data={data.created} />
          </time>
        </div>
      </div>
    </div>
  )
}

export default Blog;