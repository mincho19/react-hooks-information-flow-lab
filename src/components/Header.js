function Header({onDarkModeClick}){
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick = {onDarkModeClick}>Mode</button>
          {/* {isDarkMode ? "Dark" : "Light"} Mode */}
    </header>
    )
}

export default Header