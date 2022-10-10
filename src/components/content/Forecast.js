import data from "../../Weather.json";



const Forecast = ({items}) => {

    const weather = items;

    return (
        <div id="forecast">

            {weather.map((item, index) => (
                <div className="subcontainer" key={"subcontainer"+index}>
                    <h2>{item.weekday}</h2>
                    <div id="icons">
                        <img src={"assets/images/"+item.weatherIcon+ ".png"}/>
                    </div>
                    <div id="temp"><p>{item.temperature}</p></div>
                </div>
            ))}

        </div>

    );


}
export default Forecast;