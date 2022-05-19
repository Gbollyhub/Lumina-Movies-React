function FeedActions(){
    return (
     <>
      <div className="content-col-2-actions">
        <div className="actions-col-1">
          <div className="w-form">
          <input type="text" className="search-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Search for something..." id="name" />
          </div>
        </div>
        <div className="actions-col-2">
          <div className="form-block w-form">
            <select id="Filter" name="Filter" data-name="Filter" className="select-field w-select">
                <option value="">Latest</option>
                <option value="First">Popular this week</option>
                <option value="Second">Solved</option>
                <option value="Third">Unsolved</option>
              </select>
          </div>
        </div>
      </div>
     </>
    );
}

export default FeedActions;