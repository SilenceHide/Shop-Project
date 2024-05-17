import React from "react";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";

export default function Portal() {
  return createPortal(
    <Modal title="Login" closeModal={() => {}}>
      <form action=""></form>
    </Modal>,
    document.getElementById("portal")!,
  );
}
