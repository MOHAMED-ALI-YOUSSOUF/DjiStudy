import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import "./modal.scss"
const Sujets = ({ user }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleDownload = () => {
    if (user) {
      // Permettre le téléchargement
      window.open("/images/courses/cv.pdf", '_blank');
    } else {
      // Afficher la modal de connexion
      setShowLoginModal(true);
    }
  };

  return (
    <Container className='modale'>
      <h1>Sujets</h1>
      <Button className='btns' onClick={handleDownload}>Télécharger </Button>

      {/* Modal de connexion */}
      <Modal className='modal' show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion requise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vous devez vous connecter pour télécharger le CV.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
            Fermer
          </Button>
          {/* Ajoutez un lien ou un bouton pour rediriger vers la page de connexion */}
          <Button variant="primary" onClick={() => console.log('Redirection vers la page de connexion')}>
            Se connecter
          </Button>
        </Modal.Footer>
      </Modal>
      <iframe src="/images/courses/cv.pdf" width="50%" height="300px"></iframe>
    </Container>
 
  );
};

export default Sujets;
