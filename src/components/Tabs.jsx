import { Children } from "react"

export default function Tabs({children, buttons,ButtonsContainer}){
    //const ButtonsContainer = buttonsContainer;
    return(
        <>
        {/*Creating multiple jsx Slot*/}
        <ButtonsContainer>{buttons}</ButtonsContainer>  {/*slot 1*/}

        {children} {/*slot 2*/}
        </>
    );
}