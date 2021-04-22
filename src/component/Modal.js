import React from 'react';
import './Style.css';

const Modal = ({showModal, setShowModal, person}) =>{
    return(
        <>
            {showModal? <div className = "modal">
                <div className = "modal-wrapper">
                    <div className='image-container modal-image-container'>
                        <img src={person.picture.medium} alt="Profile Pic" />
                        <h4>{person.name.first + " " + person.name.last}</h4>
                    </div>
                    <div className = 'person-info'>
                        <h4>{person.dob.age + " years old"}</h4>
                        <h4>{person.location.street.number + " " + person.location.street.name + ", " + person.location.city + ", " + person.location.state + ", " + person.location.postcode}</h4>
                        <h4>{person.phone}</h4>
                        <h4>{person.email}</h4>
                    </div>
                </div>
                </div> : null}
        </>

    );
}

export default Modal;


