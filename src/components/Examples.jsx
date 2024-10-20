import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples(){
    
  //Hooks are always declared at the top but inside the component
  //useState()
        //current value //new value           //starting state/initial va
  const [selectedTopics,setSelectedTopic] = useState();

  function handleSelect( selectedButton){
     setSelectedTopic(selectedButton);
   // console.log(selectedTopics);
  }

    return(
        <Section title={"Examples"} id="examples">
          <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
            <TabButton isSelected={selectedTopics === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopics === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopics === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopics === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>

          }>
     
          </Tabs>
        
      

{/*data.js content is called over here*/}
        
        {/*Conditional Rendering */}
        {!selectedTopics ? (<p>Please select a Topic</p>) : null}
            
        {selectedTopics ?(<div id="tab-content">
          <h3>{EXAMPLES[selectedTopics].title}</h3>
          <p>{EXAMPLES[selectedTopics].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopics].code}
            </code>
          </pre>
        </div>) : null}


      </Section>
    )

}