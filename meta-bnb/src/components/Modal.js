import React from 'react'
import metaWallet from '../design-images/wallet-cat.png'
import next from '../design-images/next.png'
import wallet from '../design-images/wallet.png'
import closeButton from '../design-images/x.png'
const Modal = (props) => {
  return (
    <section
      className={`${
        props.modal ? 'modal-container active' : 'modal-container'
      }`}
    >
      <div className='modal'>
        <div className='modal-title'>
          <h3>Connect Wallet</h3>
          <button className='close-wallet' onClick={props.handleModal}>
            <img src={closeButton} alt='' />
          </button>
        </div>
        <div className='line'></div>
        <div className='modal-content'>
          <p>choose your preferred wallet </p>
          <div className='meta-wallet meta'>
            <div className='image-wrapper '>
              <img src={metaWallet} alt='' />
              <h3>Metamask</h3>
            </div>
            <button className='btn-next'>
              <img src={next} alt='metamask' />
            </button>
          </div>
          <div className='meta-wallet'>
            <div className='image-wrapper'>
              <img src={wallet} alt='WalletConnect' />
              <h3>WalletConnect</h3>
            </div>
            <button className='btn-next'>
              <img src={next} alt='next' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
