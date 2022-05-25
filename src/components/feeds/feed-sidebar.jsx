
import { useDispatch } from "react-redux";
import { getSearchedMovies } from "../../store/movies";
import { useState } from "react";
function FeedSideBar() {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <div className="content-col-1">

        <div onClick={() => { setCurrentTab(1); dispatch(getSearchedMovies("Marvel")) }} className={currentTab === 1 ? "side-menu-links side-menu-active" : "side-menu-links"}>Marvel</div>
        <div onClick={() => { setCurrentTab(2); dispatch(getSearchedMovies("Harry Potter")) }} className={currentTab === 2 ? "side-menu-links side-menu-active" : "side-menu-links"}>Harry Porter</div>
        <div onClick={() => { setCurrentTab(3); dispatch(getSearchedMovies("Lord of the Rings")) }} className={currentTab === 3 ? "side-menu-links side-menu-active" : "side-menu-links"}>Lord of the Rings</div>
      </div>
    </>
  );
}

export default FeedSideBar;