function Videos() {
  return (
    <div className="videos">
      <h2>Videos</h2>
      <div className="container">
        <div className="video-left">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y4_E0HOeCY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="video-right">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y4_E0HOeCY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Videos