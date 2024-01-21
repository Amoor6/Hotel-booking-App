import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header/Header";
import LocationList from "./Components/locationList/locationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Hotels from "./Components/Hotels/Hotels";
import HotelsProvider from "./Components/context/HotelsProvider";
import SingleHotel from "./Components/SingleHotel/SingleHotel";
import BookmarkLayout from "./Components/BookmarkLayout/BookmarkLayout";
import Bookmark from "./Components/Bookmark/Bookmark";
import SingleBookmark from "./Components/SingleBookmark/SingleBookmark";

function App() {
  return (
    <BookmarkListProvider>
      <HotelsProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />} />
          <Route index element={<Bookmark />} />
          <Route path=":id" element={<SingleBookmark />} />
          <Route path="add" element={<div>add new bookmark</div>} />
        </Routes>
      </HotelsProvider>
    </BookmarkListProvider>
  );
}

export default App;
