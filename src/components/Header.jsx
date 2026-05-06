import logo from "../assets/images/globe.png"

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <img src={logo} alt="Logo" className="logo"/>
                    <h1 className="title">my travel journal.</h1>
                </div>
            </header>
        </>
    )
}