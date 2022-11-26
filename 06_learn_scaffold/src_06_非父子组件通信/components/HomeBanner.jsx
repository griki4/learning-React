import ThemeContext from "../context/context";

function HomeBanner(){
    return (
        <ThemeContext.Consumer>
            {value => <div>{value.color}</div>}
        </ThemeContext.Consumer>
    )
}

export default HomeBanner
