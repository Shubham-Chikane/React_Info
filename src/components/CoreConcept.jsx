



/*Using Props in component*/ 
export default function CoreConcept(props){
    return( 
    <li>
      <img src = {props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
    );
  
  }

  /*Object Destructuring takes place over here */
    function CorConcept({image,title , description}){
    return( 
    <li>
      <img src = {image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    );
  
  }
  
  