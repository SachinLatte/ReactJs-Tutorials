const CreatePost = ()=>{
  return <form className="create-post">
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text" className="form-control" id="userId" placeholder="Your User Id" autoComplete="off" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." autoComplete="off"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" row="5" id="body" placeholder="Tell us more about it..." />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" autoComplete="off" />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" autoComplete="off" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
}

export default CreatePost;