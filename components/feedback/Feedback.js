import React from "react";
import config from "../../config";
import TimeAgo from "timeago-react";
import { FEEDBACK_SIZE_PREVIEW } from "./Feedback.consts";

const Feedback = ({ data, size }) => {
  switch (size) {
    case FEEDBACK_SIZE_PREVIEW:
      return (
        <div className="card is-shadowless is-borderless is-transparent" style={{ textAlign: 'center' }}>
          <figure className="image is-128x128">
            <img src={data.author.image} alt={data.author.name} />
          </figure>
          <div className="card-content">
            <p style={{ marginBottom: '10px', display: 'block' }}>
              <span className="title is-4">{data.author.name}</span>
              <br />
              <span className="subtitle is-5">
                <time datetime={data.created}>
                  <TimeAgo datetime={data.created} locale='ru' />
                </time>
              </span>
            </p>
            <div className="content">
              {data.content}
            </div>
          </div>
          <style jsx>{`
            .card {
              background:transparent;
            }
            .card .image {
              border-radius:100%;
              overflow:hidden;
              margin:auto;
            }
          `}</style>
        </div>
      )
    default:
      return null
  }
}

export default Feedback;