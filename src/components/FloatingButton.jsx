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
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/190ylWdiOYDLUT01LRFITowvJGWH7es1K/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Ver CV
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FloatingButton;
