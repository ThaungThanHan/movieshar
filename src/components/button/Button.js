const Button = ({label}) => {
    return(
        <div data-testid="button" className="buttonClass" style={{opacity:1,border:"1px solid red",width:30,height:30}}>
            This is {label}
        </div>
    )
}

export default Button;