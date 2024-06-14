import React from "react";
import { Accordion } from "react-bootstrap";
import { useEffect } from "react";

function Faqs() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#faq") {
      scrollToSection("faq");
    }
  }, []);

  return (
    <>
      <div id="faq">
        <h2
          style={{
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          Preguntas Frecuentes
        </h2>
        <div className="faqs-container">
          <Accordion id="mobile-faq" defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0" style={{ marginBottom: "20px" }}>
              <Accordion.Header>
                <div className="faq-bullet">1</div> ¿Manno es gratis?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Si, publicar tu tarea, recibir presupuestos, chatear con los
                  Expertos y contratar es totalmente gratis. Manno no te cobrará
                  nada por el servicio, solo abonarás al Experto contratado el
                  importe acordado.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{ marginBottom: "20px" }}>
              <Accordion.Header>
                <div className="faq-bullet">2</div>¿Cómo funciona?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  ¡Es muy fácil! Elige la categoría, describe tu tarea y
                  recibirás presupuestos de los Expertos más recomendados.
                  Contrata y una vez resuelta tu Tarea, no olvides valorar al
                  Experto para que todos sepan cómo te ha ido.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{ marginBottom: "20px" }}>
              <Accordion.Header>
                <div className="faq-bullet">3</div>
                <span className="faq-position-mobile">
                  ¿Qué información podré ver acerca de mi Experto antes de
                  contratarlo?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Vas a poder conocer sus calificaciones, trabajos realizados y
                  recomendaciones por parte de otros usuarios que ya lo han
                  contratado. También podrás ver la descripción de su
                  experiencia y si su identidad ha sido verificada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{ marginBottom: "20px" }}>
              <Accordion.Header>
                <div className="faq-bullet">4</div>
                <span className="faq-position-mobile">
                  ¿Cuáles son los medios de Pago y garantías?{" "}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Manno no interviene en las condiciones de pago y garantías.
                  Cada Experto brinda de forma independiente sus medios de pago
                  y las garantías según la Tarea.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faqs;
