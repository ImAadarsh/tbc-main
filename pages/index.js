import Link from "next/link"
export default function Home() {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100%"}}>
                                    <img src="/Logo_Full.svg" alt="logo" />
            <h1>Launching Soon</h1>
    <Link href={'/ambassadors'}>
                  <button onClick={() => {
                                handelLogin()
                            }} className="primary_button">Amabassador Login</button>
                    </Link>
    
        </div>
    );
}
