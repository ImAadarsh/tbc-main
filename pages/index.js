import Link from "next/link"
export default function Home() {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", alignContent: "space-around", flexWrap: "wrap", flexDirection: "column" }}>
                                    <img src="/Logo_Full.svg" alt="logo" /><br/>
            <h1>Launching Soon</h1><br/>
    <Link href={'/ambassadors'}>
                  <button onClick={() => {
                                handelLogin()
                            }} className="primary_button">Amabassador Login</button>
                    </Link>
    
        </div>
    );
}
