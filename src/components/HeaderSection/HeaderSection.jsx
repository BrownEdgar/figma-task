import './HeaderSection.scss';
import { useModal } from '../../context/openModal';
import Modal from '../Modal/Modal';

function HeaderSection() {
  const {isOpen, setIsOpen} = useModal();

  const openModalPage = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='HeaderSection'>
      {isOpen ? <Modal/> : null}
      <div className='HeaderSection__Register'>
        <h1>Find Your Best Partner</h1>
        <p>Application aimed at singles looking for a serious relationship</p>
        <button onClick={openModalPage}>Join us</button>
        <button>Continue as guest</button>
      </div>
    </div>
  );
}

export default  HeaderSection
