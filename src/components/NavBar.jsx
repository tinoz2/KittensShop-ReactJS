import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
                <div className="container-fluid">
                    <h1>Kittens</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Disabled</a>
                                </li>
                                <CartWidget />
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar