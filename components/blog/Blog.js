import React from "react";

const Blog = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://static.tumblr.com/65162db388baaea011ad9b04912c0f58/g8sdjce/XV7n96frd/tumblr_static_tumblr_static_blurbavck.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <a href="#" style={{ marginBottom: '10px', display: 'block' }}>
          <h2 className="title is-4">John Smith</h2>
        </a>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

export default Blog;