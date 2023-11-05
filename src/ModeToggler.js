function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode</h1>
    const lightMode = <h1>Light Mode</h1>

    function handleClick(){
        darkModeOn = !darkModeOn;
        if(darkModeOn === true){
            console.log("Dark Mode is on")
        } else{
            console.log("light Mode is on")
        }
            
    }
    return(
     <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>
         Click me
        </button>
     </div>
)
}

export default ModeToggler;