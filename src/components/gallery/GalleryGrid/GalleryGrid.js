import React from "react";
import { useState, useEffect, useRef } from "react";
import "./GalleryGrid.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Header from "../Header/Header";
import axios from "axios";

// const images = [
//   {
//     id: "0",
//     image: "/assets/1.jpg",
//   },
//   {
//     id: "1",
//     image: "/assets/2.jpg",
//   },
//   {
//     id: "2",
//     image: "/assets/3.jpg",
//   },
//   {
//     id: "3",
//     image: "/assets/4.jpg",
//   },
//   {
//     id: "4",
//     image: "/assets/5.jpg",
//   },
//   {
//     id: "5",
//     image: "/assets/6.jpg",
//   },
//   {
//     id: "6",
//     image: "/assets/7.jpg",
//   },
//   {
//     id: "7",
//     image: "/assets/8.jpg",
//   },
//   {
//     id: "8",
//     image: "/assets/9.jpg",
//   },
//   {
//     id: "9",
//     image: "/assets/10.jpg",
//   },
//   {
//     id: "10",
//     image: "/assets/11.jpg",
//   },
//   {
//     id: "11",
//     image: "/assets/12.jpg",
//   },
//   {
//     id: "12",
//     image: "/assets/13.jpg",
//   },
// //   {
// //     id: "13",
// //     image: "/assets/14.jpg",
// //   },
// //   {
// //     id: "14",
// //     image: "/assets/15.jpg",
// //   },
// //   {
// //     id: "15",
// //     image: "/assets/16.jpg",
// //   },
// //   {
// //     id: "16",
// //     image: "/assets/17.jpg",
// //   },
// //   {
// //     id: "17",
// //     image: "/assets/18.jpg",
// //   },
// //   {
// //     id: "18",
// //     image: "/assets/19.jpg",
// //   },
// //   {
// //     id: "19",
// //     image: "/assets/20.jpg",
// //   },
// //   {
// //     id: "20",
// //     image: "/assets/21.jpg",
// //   },
// //   {
// //     id: "21",
// //     image: "/assets/22.jpg",
// //   },
// //   {
// //     id: "22",
// //     image: "/assets/23.jpg",
// //   },
// //   {
// //     id: "23",
// //     image: "/assets/24.jpg",
// //   },
// ];

function GalleryGrid() {
  const API_URL = "https://api.unsplash.com/photos";
  const SEARCH_API_URL = "https://api.unsplash.com/search/photos";

//   const [gallery, updateGallery] = useState(images);
  const [loading, setLoading] = useState(false);
  const [photosList, setPhotosList] = useState([])
  const searchInput = useRef(null);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(photosList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotosList(items);
  }

  async function getPhotos() {
    try {
    setLoading(true)
      const { data } = await axios.get(
        `${API_URL}?client_id=C6TXYZa49l-wLJAh8VOp00XC8F9XCM9jZ-uPEEnkTwk`
      );
      setPhotosList(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    let search = searchInput.current.value
    searchPhotos(search);
  };

  async function searchPhotos(word) {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `${SEARCH_API_URL}?page=1&query=${word}&client_id=F70Avb-VkF7RE5zq-tL3UlolH-TYthKyfpdbuT-iiKU`
      );
      setPhotosList(data.results);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error("Error fetching photos:", error);
    }
  }



  useEffect(() => {
    getPhotos();
  }, []);
  


  return (
    <div>
        <Header 
        handleSearch={handleSearch}
        searchInput={searchInput} 
        />
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="gallery">
        {(provided) => (
          <div
            className="gallery"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {photosList.map((photo, index) => {
              return (
                <Draggable key={index} draggableId={`${index}`} index={index}>
                  {(provided) => (
                    <figure
                      className="gallery__item gallery__item--0"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img
                        src={photo.urls.small}
                        className="gallery__img"
                        alt={`Image ${index}`}
                      />
                    </figure>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  );
}

export default GalleryGrid;

