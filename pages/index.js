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
            padding: "20px" // Added padding for better spacing on smaller screens
        }}>
            <img src="/Logo_Full.svg" alt="logo" style={{ maxWidth: "100%", marginBottom: "20px" }} /><br/>
            <h1 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Launching Soon</h1><br/>
            <Link href={'/ambassadors'}>
                <button onClick={() => {
                    handelLogin()
                }} className="primary_button" style={{ width: "85%" }}>Amabassador Login</button>
            </Link>
        </div>
    );
}
