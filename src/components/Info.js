import { WiSunset } from "react-icons/wi";

function Info({info, setInfo, state}){
    return(
        <div>
            {
                state ? <div className="info">
                <p id="sehir"> {info.name}, {info.sys.country} </p>
                <div className="sıcaklık">
                    <p id="sicaklik"> {info.main.temp} </p> <WiSunset className='fa-c' />
                </div>
                <p id="havadurumu">{info.weather[0].description} </p>
                <div className="hissedilen">
                    <p>
                        {info.main.feels_like}
                    </p>
                    <WiSunset className='fa-c' />
                </div>
            </div> :null

            }
            
        </div>
    )
}

export default Info