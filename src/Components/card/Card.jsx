import './card.css';
import Form from '../form/Form';
import { useState } from 'react';

function Card({ machineContent, closePopup, settingsPopUp }) {

    const [showForm, setShowForm] = useState(false);


    return (
        <div className="popup__content">
            <button onClick={closePopup} className='popup__btn__close '>{settingsPopUp['btnTextClose']}</button>
            <div className='popup__header___box'>
                <h2 className='popup__title'>{settingsPopUp['textTitle']}</h2>
            </div>
            <div className='popup__moldure'>
                <h5 className='popup__subtitle'>{settingsPopUp['textSubtitle']}</h5>
                <div className='popup__machine__content'>

                    <div className='popup__machine__img'>
                        {machineContent}
                    </div>
                </div>
            </div>

            {showForm !== true ?
                <button onClick={() => { setShowForm(true) }} className='popup__btnTextPush'>{settingsPopUp['btnTextPush']}</button> :
                <Form showCheck={settingsPopUp['checkbox']} inputNumber={settingsPopUp['inputNumber']} />}
                
        </div>
    )
}

export default Card;
