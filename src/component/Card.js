import React, { useState } from 'react';
import './Style.css';
import Modal from './Modal';

const Card = ({person}) =>{
    const [showModal, setShowModal] = useState(false)
    
    // Modal
    const openModal = () =>{
        setShowModal(prev => !prev)
    }
    
    return(
        <div className="card-container" key={`person-id-${person.login.uuid}`}  onClick = {openModal}>
        <div className='image-container'>
          <img src={person.picture.medium} alt="Profile Pic" />
        </div>
        <h4>{person.name.first + " " + person.name.last}</h4>
        <Modal showModal={showModal} setShowModal={setShowModal} person = {person}/>
      </div>
    );
};

export default Card;

