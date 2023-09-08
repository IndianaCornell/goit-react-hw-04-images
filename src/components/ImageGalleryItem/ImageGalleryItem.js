import { useState } from 'react';
import Modal from 'react-modal';
import { ImageItem } from './ImageGalleryItem.Styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    width: '50vw',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { webformatURL, tags, largeImageURL } = image;

  return (
    <li>
      <ImageItem
        src={webformatURL}
        alt={tags}
        onClick={() => setModalOpen(true)}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </li>
  );
};
