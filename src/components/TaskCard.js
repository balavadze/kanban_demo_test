const TaskCard = (props) => {
  return (
    <>
      <div
        className="Taskcard card border-warning mb-3"
        style={{ width: '18rem' }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>

          <p className="card-text">{props.item.content}</p>
          <small class="text-muted">see more</small>
          <div class="card-footer">
            <small className="card-subtitle mb-2 text-muted">
              {props.item.priority} | {props.item.tag}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;

//TODO add edit, delete fuctionality, add MODAL function
