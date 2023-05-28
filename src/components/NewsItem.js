import React from 'react'

const NewsItem = (props)=> {

    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card">
          <div>
          <span className="badge rounded-pill bg-danger" style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
            {source}
          </span>
          </div>
          <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/05/20/1600x900/iOS_16_pixabay_1683558677512_1684581003805.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </>
    )

}

export default NewsItem