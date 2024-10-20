
                                                    //to mark buttons
export default function TabButton({children,isSelected, ...props}){
    console.log("Tab Component Executing");
    return(
        <li>
            <button className={isSelected ?"active": undefined}{...props}>  {children} </button>
          
        </li>
    );
}