function ThemeSwitcher(){

    function switchToGrayMode(){
        var body = document.body;
        var inputContainer =  document.getElementById("input-container");
        if(body.classList.contains("colorful-mode") || inputContainer.classList.contains("colorful-mode-input")){
            return;
        }
        body.classList.remove("light-mode");
        body.classList.toggle("colorful-mode");
        inputContainer.classList.remove("light-mode-input");
        inputContainer.classList.toggle("colorful-mode-input");
    }

    function switchToColorfulMode(){
        var body = document.body;
        var inputContainer =  document.getElementById("input-container");
        if(body.classList.contains("light-mode") || inputContainer.classList.contains("light-mode-input")){
            return;
        }
        body.classList.remove("colorful-mode");
        body.classList.toggle("light-mode");
        inputContainer.classList.remove("colorful-mode-input");
        inputContainer.classList.toggle("light-mode-input");
    }


    return(<> 
    <h2 id="theme-heading">theme</h2>
    <div id="theme-switcher">
    <button id="btn-gray-theme" onClick={switchToGrayMode}>colorful</button>
    <button id="btn-colorful-theme" onClick={switchToColorfulMode}>gray</button>
    </div></>
   )
}
export default ThemeSwitcher