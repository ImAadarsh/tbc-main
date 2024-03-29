import Link from "next/link"
export default function Home() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh", // Changed height to minHeight for responsiveness
            alignContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "column",
            padding: "5px" // Added padding for better spacing on smaller screens
        }}>
            <img src="/Logo_Full.svg" alt="logo" style={{ maxWidth: "100%", marginBottom: "10px" }} /><br/>
            <h1 style={{ fontSize: "24px", textAlign: "center", marginBottom: "10px" }}>Launching Soon</h1><br/>
            <Link href={'/ambassadors'}>
                <button onClick={() => {
                    handelLogin()
                }} className="primary_button" style={{ width: "100%", fontSize: "14px", fontStyle: "none", paddingLeft: "15px", paddingRight: "15px" }}>Amabassador Login</button>
            </Link>
        </div>
    );
}
