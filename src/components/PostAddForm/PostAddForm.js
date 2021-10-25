import './PostAddForm.css'

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking about"
        className="form-control new-post-label"
      />
      <button type="Button" className="btn btn-outline-secondary">
        Add Commit
      </button>
    </form>
  );
};

export default PostAddForm
