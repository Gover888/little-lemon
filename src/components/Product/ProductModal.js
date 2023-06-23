import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import "./ProductImage.scss"

const ProductModal = (props) => {
    const {isModal, setIsModal, product} = props
    const [modalUrl, setModalUrl] = useState(null)
    return (
        <>
            {isModal && product && (
                <div className='modal-container'>
                    <div className='modal-bottom' onClick={()=>setIsModal(false)}></div>
                    <div className='modal-gallery-container'>
                        {product && product.media.map(mediaUrl => <div
                            onClick={()=>setModalUrl(mediaUrl)}
                            className='modal-gallery-item'
                            key={mediaUrl}
                            style={{backgroundImage: `url(${mediaUrl})`}}></div>)}
                    </div>
                    <div className='modal-image' style={{backgroundImage: `url(${modalUrl === null ? product.media[0] : modalUrl})`}}></div>
                    <div onClick={()=>{setIsModal(false)}} className='modal-close-icon'><CloseIcon fontSize='large'/></div>
                </div>
            )}
        </>
    );
};

export default ProductModal;
