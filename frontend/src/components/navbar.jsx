const Navbar = () => {
    return (
        <nav className="navbar flex bg-primary justify-between align-center">
            <div className="nav-logo s-20 m-20  bg-white " ></div>
            <div className="nav-items a m-20 bg-white position-relative decoration-none">
                <a href="">HOME</a>
                <a href="">CONTACTO</a>
                <a href="">INFORMACION</a>
                <a href="">UBICACION</a>
            </div>
            <div className="nav-toggle none">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar