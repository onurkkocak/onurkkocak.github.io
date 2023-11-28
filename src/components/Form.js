import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Form({info, setInfo,setState}){
    const [city, setCity] = useState('')
    const handleChange = async ()=>
    {
        const apiKey = "359caef4982a692920ec08bcaba8e090"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`
        await axios(baseURL).then(res => setInfo(res.data))
        setState(true)
        
    } 

    return(
        <>
            <div className="body">
                <h1>
                    Hava Durumu
                </h1>
                <form onSubmit={(e)=> {e.preventDefault(); handleChange()}}>
                    <div className="form">
                        <input value={city} onChange={(e)=> setCity(e.target.value)} className="inputText" type="text" placeholder="Şehri Giriniz!"/>
                    </div>
                    <div>
                        <Button className="btn" type="submit" >Hava Durumunu Göster
                        </Button>
                        
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form