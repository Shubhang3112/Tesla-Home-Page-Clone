import "./navlist.css"

const navitems = [
    {
        name : "Vehicles",
        route : "./about-us"
    },
    {
        name : "Energy",
        route : "./about-us"
    },
    {
        name : "Charging",
        route : "./about-us"
    },
    {
        name : "Discover",
        route : "./about-us"
    },
    {
        name : "Shop",
        route : "./about-us"
    },
]

function Navlist() {
    return (
        <ul className="navlist">
            {navitems.map((navitem,index) => (
                <li key={index} className="item">{navitem.name}</li>
            ))}
        </ul>
    )
}
export default Navlist;