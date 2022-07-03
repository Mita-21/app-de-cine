import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import NoImage from '../assets/no_image.jpg'

const Card = ({title, poster_path,release_date, overview, rating}) => {

//guardo en una constante la direccion de la API para traer las imágenes
const API_IMG="https://image.tmdb.org/t/p/w500/";
//guardo el estado de la función para el modal (abierto-cerrado)
const [modal, setModal] = useState(false);

//hago dos manejadores del evento abrir-cerrar modal y actualizo el estado modal con ello según corresponda
const handleOpen = () => setModal(true);
const handleClose = () => setModal(false);

//renderizo lo que se va a mostrar
   return (
     <div className="col-md-3 p-3">
       <div className="card animated fadeInUp">
         <img
           className="card-img-top"
           alt={title}
           style={{ width: "80" }}
           src={ poster_path
              ? `${API_IMG}${poster_path}`
              : NoImage}
         />
         <div className="d-grid gap-2">
         <div>
            <div className="card-rating">{rating}</div>
          </div>
           <button
             className="btn btn-lg btn-primary"
             type="button"
             onClick={handleOpen}
           >
             Ver más
           </button>
           <Modal show={modal} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title></Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <img
                 className="card-img-top"
                 alt={title}
                 style={{ width: "40" }}
                 src={ poster_path
              ? `${API_IMG}${poster_path}`
              : NoImage}
               />
               <h3>{title}</h3>
               <br></br>
               <h5>Lanzamiento: {release_date}</h5>
               <br></br>
               <p>{overview}</p>
             </Modal.Body>
             <Modal.Footer>
               <Button variant="primary" onClick={handleClose}>
                 Cerrar
               </Button>
             </Modal.Footer>
           </Modal>
         </div>
       </div>
     </div>
   );
}

export default Card