import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Style from "../Styles/PostCreater.module.scss";
import WestIcon from "@mui/icons-material/West";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Button } from "@mui/material";
import PhotoEditor from "../Components/PhotoEditor";
import PostingModal from "./PostingModal";

function PostCreaterModal({ open, handleClose }) {
  const [uploadBy, setUploadBy] = useState("photos");
  const [uploadModal, setUploadModal] = useState(false);
  const [file, setFile] = useState(null);
  const [postingModal, setPostingModal] = useState(false);

  function handleChange(e = null, type) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setUploadBy(type);
    setUploadModal(true);
  }

  const handlePhoto = (data) => {
    setPostingModal(false);
    setUploadModal(true);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={Style.createPostModal}
      >
        <>
          {!uploadModal && (
            <div className={Style.postModalContainer}>
              <div className={Style.crossButnIcon}>
                <WestIcon onClick={handleClose} className={Style.cancelIcon} />
              </div>
              <div className={Style.optionContainer}>
                <div className={Style.postModalHeader}>
                  <Typography variant="h6" className={Style.postModalTitle}>
                    <label className={Style.inputFiled}>
                      <AddPhotoAlternateIcon className={Style.AddPhotoIcon} />
                      <input
                        className="fileInput"
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={(e) => handleChange(e, "photos")}
                      />
                      Pick From Gallery
                    </label>
                  </Typography>
                </div>
                <hr />
                <div className={Style.postModalHeader}>
                  <Typography variant="h6" className={Style.postModalTitle}>
                    <label className={Style.inputFiled}>
                      <AddAPhotoIcon className={Style.AddPhotoIcon} />
                      <input
                        type="file"
                        id="fileProfile2"
                        name="fileProfile2"
                        accept="image/png,image/jpeg"
                        capture="filesystem"
                        onChange={(e) => handleChange(e, "Camera")}
                      />
                      Capture with camera
                    </label>
                  </Typography>
                </div>
              </div>
            </div>
          )}
          {/* // Upload From Photos  */}
          {uploadModal && (
            <>
              {uploadBy === "photos" ? (
                <div>
                  <div className={Style.photoEditorModal}>
                    <div className={Style.crossButnIcon}>
                      <WestIcon
                        onClick={() => {
                          setUploadModal(false);
                        }}
                        className={Style.cancelIcon}
                      />
                      <Button
                        variant="contained"
                        className={Style.nextButton}
                        onClick={() => {
                          setPostingModal(true);
                        }}
                      >
                        Next
                      </Button>
                    </div>

                    <PhotoEditor
                      file={file}
                      handlePhoto={handlePhoto}
                      postingModal={() => {
                        setPostingModal(true);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {console.log("inside 2")}
                  <div className={Style.postModalContainer}>
                    <div className={Style.crossButnIcon}>
                      <WestIcon
                        onClick={handleClose}
                        className={Style.cancelIcon}
                      />
                    </div>
                    <div className={Style.optionContainer}>
                      <div
                        className={Style.postModalHeader}
                        onClick={() => {
                          setUploadModal(false);
                        }}
                      >
                        <Typography
                          variant="h6"
                          className={Style.postModalTitle}
                        >
                          <AddPhotoAlternateIcon
                            className={Style.AddPhotoIcon}
                          />{" "}
                          Pick From Gallery
                        </Typography>
                      </div>
                      <hr />
                      <div className={Style.postModalHeader}>
                        <Typography
                          variant="h6"
                          className={Style.postModalTitle}
                        >
                          <AddAPhotoIcon className={Style.AddPhotoIcon} />{" "}
                          Capture with camera
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* // Posting Modal  */}
          {postingModal && (
            <PostingModal
              file={file}
              handleClose={(data, type) => handlePhoto(data, type)}
            />
          )}
        </>
      </Modal>
    </div>
  );
}

export default PostCreaterModal;
