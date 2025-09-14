import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
// import "../styles/FloatingButton.css"; // Estilos aparte

const FloatingButton = () => {
  const [show, setShow] = useState(false);
  const [shake, setShake] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Efecto para que el botón tiemble cada cierto tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000); // Cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Botón flotante */}
      <button
        className={`floating-btn ${shake ? "shake" : ""}`}
        onClick={handleShow}
      >
        📄 Descargar CV
      </button>

      {/* Modal de descarga */}
      <Modal show={show} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Descarga mi CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Haz clic en el botón para descargar mi CV en PDF.
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "8px",
            }}
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{
                borderRadius: "999px",
                padding: "10px 28px",
                fontWeight: 600,
              }}
            >
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1gA-WLo2tlZnai7daT8gHLla5LG7mZpmo/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              style={{
                borderRadius: "999px",
                padding: "10px 28px",
                fontWeight: 600,
              }}
            >
              Ver CV
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FloatingButton;
