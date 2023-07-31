import React, { useState } from "react";
import Style from "../Styles/PostCreater.module.scss";
import WestIcon from "@mui/icons-material/West";
import { Button } from "@mui/material";
import TagPeople from "../Components/TagPeople";
import UserLocation from "../Components/UserLocation";
import { dataUrlToBase64 } from "../Utils/Utils";

function PostingModal({ file, handleClose }) {
  const [userPostDetails, setUserPostDetails] = useState({
    description: "" || null,
    location: "" || null,
    taggedPeople: [] || null,
    image: file || null,
  });

  const handler = async () => {
    console.log("userPostDetails", userPostDetails);
    const base64image = await dataUrlToBase64(userPostDetails.image);
    setUserPostDetails({ ...userPostDetails, image: base64image });
    console.log("userPostDetails", userPostDetails);
  };

  const onChangeHandler = (e) => {
    setUserPostDetails({ ...userPostDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <div className={Style.photoEditorModal}>
          <div className={Style.crossButnIcon}>
            <WestIcon
              className={Style.cancelIcon}
              onClick={() => {
                handleClose(file, "photos");
              }}
            />
            <Button
              variant="contained"
              className={Style.nextButton}
              onClick={handler}
            >
              Post
            </Button>
          </div>
          <div className={Style.photoEditorContainer}>
            <img
              src={file}
              name="image"
              onChange={(e) => {
                onChangeHandler(e);
              }}
              className={Style.postingImage}
            />
            <label>Description</label>
            <textarea
              className={Style.description}
              placeholder="Write a caption..."
              name="description"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            ></textarea>
          </div>
          <div>
            <TagPeople />
            <UserLocation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostingModal;
