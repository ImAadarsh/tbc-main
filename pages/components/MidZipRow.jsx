import Style from "./MidZipRow.module.css";
import ZipCode from "./ZipCode";

export default function MidZipRow() {
    return(
        <>
            <div className={Style.mid_zip_row}>
                <h1>Go Rob! Everything for $ 5</h1>
                <ZipCode placeholder={"Enter Zip code"} id={"2"} />
            </div>
        </>
    );
}