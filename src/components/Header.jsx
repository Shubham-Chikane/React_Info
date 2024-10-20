import reactImg from '../assets/react-core-concepts.png';// imported image for display from  assets folder 

import './Header.css'; // header css taken
// Array decleration
const reactDescriptions = ['Fundamentals' , 'Crucial' , 'Core'];

// random text reloding from above array 
function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }
  
  //Header Component declared over here and exported
export default function Header(){ 

    {/*Approach 2 */}
      const description = reactDescriptions[genRandomInt(2)];
    return (
    <header>
    <img src={reactImg} alt="Stylized atom" />

    <h1>React Essentials</h1>
    
    <p>
      {/*Here we have added a dynmmic functionality where the Starting name will change on Reload */}
      {/*{reactDescriptions[genRandomInt(2)]} */} 
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
    
  </header>
  );
  }

