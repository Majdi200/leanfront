import React from "react";
import lean_pdf from "../Assets/Formation/Lean_Manufacturing.pdf";
import lean_service from "../Assets/Formation/Lean-service.pdf";

const Formation = () => {
  return (
    <div>
      <br />
      <br />
      <h2>Guide de formation: Lean Manufacturing</h2>
      <embed
        src={lean_pdf}
        style={{ width: "70vw", height: "60vh" }}
        type="application/pdf"
      />
      <br />
      <br />
      <br />
      <br />
      <h2>Guide de formation: Lean Service</h2>
      <embed
        src={lean_service}
        style={{ width: "70vw", height: "60vh" }}
        type="application/pdf"
      />

      <br />
      <br />
      <br />
    </div>
  );
};

export default Formation;
