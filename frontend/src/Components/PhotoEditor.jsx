import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Style from "../Styles/PhotoEditor.module.scss";
import { getCroppedImg } from "../Utils/GetCropedImage";
import { Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const PhotoEditor = ({ file, handlePhoto, postingModal }) => {
  const [croppedImage, setCroppedImage] = useState(file);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [steps, setSteps] = useState("");

  const onCropComplete = useCallback(async (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    const croppedImage = await getCroppedImg(file, croppedAreaPixels);
    console.log("croped Image", croppedImage);
    setCroppedImage(croppedImage);
    handlePhoto(croppedImage);
  }, []);
  return (
    <div>
      <div className={Style.photoEditorModal}>
        <div className={Style.photoEditorContainer}>
          <div className={Style.App}>
            {steps === "" && (
              <>
                <img src={croppedImage} className={Style.postingImage} />
                <hr />
              </>
            )}

            {/* <div className={Style.cropContainer}>
        <Cropper
          image={file}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div> */}

            {/* <div className={Style.controls}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("croppedImage", croppedImage);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("croppedImage", croppedImage);
          }}
        >
          Save
        </Button>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditor;
