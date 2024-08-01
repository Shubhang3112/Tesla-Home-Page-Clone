import "./index.css"

function Button({title,background_color,text_color}) {
    return (
        <button className="order_now" style={{backgroundColor:background_color?background_color:"black",color:text_color?text_color:"white"}}>
                <p>{title}</p>
        </button>
    )
}
export default Button