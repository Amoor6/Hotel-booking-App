import Map from "../Map/Map";
import { useBookmark } from "../context/BookmarkListContext";

function BookmarkLayout() {
  const {bookmarks} = useBookmark()
  return (
    <div className="appLayout">
    <div className="sidebar">
      <Outlet />
      <div>bookmark list</div>
    </div>
    <Map markerLocations={bookmarks} />
  </div>
);

}

export default BookmarkLayout