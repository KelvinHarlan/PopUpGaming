import React, { useState } from 'react';
import './app.css';
import machineImg from './images/machine.png';
import Card from './Components/card/Card';
import YouTube from 'react-youtube';










const settingsPopUp = {
    "contenPopUp": "machine",
    "url": "NUz4d-bd2hs",
    "textTitle": "Bonus!",
    "textSubtitle": " Participe para obter descontos incríveis.",
    "btnTextClose": "x",
    "btnTextPush": "Participar",
    "checkbox" : "true",
    "inputNumber" : "4"
};















function Popup() {
    const machineContent = (<img src={machineImg} alt="machine" />)
    const videoContent = (<YouTube videoId={settingsPopUp['url']} opts={{ width: '100%', height: '200px' }} />)
    const is_video_or_machine = () => {
        return (settingsPopUp['contenPopUp'] === 'machine' ?
            machineContent :
            videoContent
        )
    }
    const [isOpen, setIsOpen] = useState(true);
    const closePopup = () => {
        setIsOpen();
    };

    return (
        <>
            {isOpen && (
                <div className="popup">
                    <Card closePopup={closePopup}
                        machineContent={is_video_or_machine()}
                        settingsPopUp={settingsPopUp}>
                    </Card>
                    
                </div>
            )}
        </>
    );
};

export default Popup;
