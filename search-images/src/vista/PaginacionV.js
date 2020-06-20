import React from 'react';

const PaginacionV = props => {
  return ( 
    <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button onClick={props.paginaAnterior} type= "button" className= "btn btn-info mr-1">Anterior</button>

            <button onClick={props.paginaSiguiente} type= "button" className= "btn btn-info">Siguiente</button>
          </ul>
         </nav>
    </div>
  )
}



export default PaginacionV;
