import React from "react";
import { Typography } from "@mui/material";
import Style from "../Styles/CreaterModal.module.scss";
import { Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function CreaterModal({ open, handleClose, handleCreate }) {
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
          <div className={Style.postModalContainer}>
            <div className={Style.crossButnIcon}>
              <CancelIcon onClick={handleClose} className={Style.cancelIcon} />
            </div>
            <div
              className={Style.postModalHeader}
              onClick={() => handleCreate("post")}
            >
              <Typography variant="h6" className={Style.postModalTitle}>
                <LibraryAddIcon /> Create a Post
              </Typography>
            </div>
            <hr />
            <div
              className={Style.postModalHeader}
              onClick={() => handleCreate("story")}
            >
              <Typography variant="h6" className={Style.postModalTitle}>
                <LibraryAddIcon /> Create a Story
              </Typography>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}

export default CreaterModal;
