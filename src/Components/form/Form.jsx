import { useEffect, useState } from 'react';
import './form.css';

function Form({inputNumber, showCheck}) {
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [show, setShow] = useState();

    useEffect(()=>{
            showCheck === 'true' ? setShow(true) : setShow(false);
        
    },[showCheck])
  
    const inputs = [
        
        <div key={1} className='popup__input__box'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
            </div>,
            <div key={2} className='popup__input__box'>
                <label htmlFor='name'>Nome</label>
                <input type='text' id='name'/>
            </div>,
            <div key={3} className='popup__input__box'>
                <label htmlFor='phone'>contato</label>
                <input type='tel' id='phone' />
            </div>,
            <div key={4} className='popup__input__box'>
                <label htmlFor='gener'>Gênero</label>
                <input type='tel' id='gener' />
            </div>
    ]

  

    return (
        
        <form className='popup__form' action="#">
            {show &&
                  <div key={0} className='popup__input__check'>
                  <input type='checkbox' id='check' />
                  <label htmlFor='check'>Consentimento para coleta de dados</label>
              </div> 
            }
            {inputs.slice(0,inputNumber)}
            <button className='popup__btn__submit'>enviar</button>
        </form>
    )
}

export default Form;
