const styling={
    display: "flex",
    display:"inline-block",
    height:"100px",
    backgroundColor:"black",
    width:"100%",
    color:"green",
    fontSize:"50px",
    fontWeight:"bold",
    float: "left",
}
const but={
    height: "30px",
    border: "1px solid",
    borderRadius: "50px",
    float:"right"
}
const styling3={
    paddingLeft:"20px",
    color:"white",
    textDecoration:"none",
}
function Nav(){
    return(
        <div className="nav" style={styling}>
                <p>TEKION</p>
                <button type="button" style={but}>Request Demo</button>
        </div>
    )
}

export default Nav;