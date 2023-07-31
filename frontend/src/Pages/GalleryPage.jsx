import React, { useEffect, useState } from "react";
import { getTimelinePost } from "../Libs/Apis/Posts";

function GalleryPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getTimelinePost();
    console.log(result.data);
    setPhotos(result.data);
  };

  return (
    <div>
      <div>
        {photos.map((photo) => {
          return <h1>{photo.desc}</h1>;
        })}
      </div>
    </div>
  );
}

export default GalleryPage;
