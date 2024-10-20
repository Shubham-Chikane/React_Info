import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data';
export default function CoreConcepts(){
    return (

      <section id="core-concepts">
      <h2>Core Concepts</h2>
      
      <ul>
        {/* Approach 2 Providing dynnamic functionallity and optimization using map() to access array elemets*/}
        {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}


        {/*Approach 1 used to display coreconcept using hardcode */ }
       {/*} <CoreConcept  
        title ="Components" 
        description="The core UI building block - compose the user interface by combining multiple components."
        image = {componentImg}
        />

        <CoreConcept  
        title={CORE_CONCEPTS[1].title}
        description = {CORE_CONCEPTS[1].description}
        image = {CORE_CONCEPTS[1].image}
        />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]}/>
        */}
      </ul>
      </section>
    )
}