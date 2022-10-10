import data from "../../Weather.json";



const Forecast = ({ items }) => {

    const weather = items;

    let weekday = [];

    let ugedage = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

    const getEveryNth = (arr, nth) => {
        const result = [];

        for (let i = 0; i < arr.length; i += nth) {
            result.push(arr[i]);
        }

        return result;
    }
    const newWeather = getEveryNth(weather, 8);

    const getDay = ()=>{
        newWeather.map((item, index) =>{
           const date =  new Date(item.dt_txt);
            const ugedag = date.getDay();
            weekday.push(ugedage[ugedag]);
        });
    }

    console.log(newWeather);

    getDay();
    

    return (
        <div id="forecast">

            {newWeather.map((item, index) => (
                
                <div className="subcontainer" key={"subcontainer" + index}>
                    <h2>{weekday[index]}</h2>
                    <div id="icons">
                        <img src={"http://openweathermap.org/img/wn/"+item.weather[0].icon + ".png"}/>
                    </div>
                    <div id="temp"><p>{Math.round(item.main.temp)}</p></div>
                </div>
            ))}

        </div>

    );


}
export default Forecast;