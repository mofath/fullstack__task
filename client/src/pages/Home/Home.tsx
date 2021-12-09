import { useState } from 'react';
import { ButtonIcon, Modal } from '../../patterns';
import { AddNoteForm } from '../../components';
import './home.scss';

const Home: React.FC = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const openAddProductModal = () => setShowAddProductModal(true);
  const closeAddProductModal = () => setShowAddProductModal(false);

  return (
    <div className='home-screen'>
      <div className='home-screen__add-broduct-fab-wrapper'>
        <ButtonIcon
          iconName='plusCircle'
          onClick={openAddProductModal}
          className='home-screen__add-broduct-fab'
        />

        <Modal
          close={closeAddProductModal}
          show={showAddProductModal}
          headline='Add Product'
        >
          <AddNoteForm submit={() => null} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
