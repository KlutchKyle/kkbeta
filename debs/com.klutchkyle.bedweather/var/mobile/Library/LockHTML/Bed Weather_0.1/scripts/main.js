var sRiseTime = 7;
var sSetTime = 19;
console.log(sSetTime);
console.log(sRiseTime);
function mainUpdate(type){
    if(type == "battery"){
        var chargeText = (batteryCharging) ? "Charging" : "Not Charging";
        var State = (batteryCharging);
        var Level = Math.ceil((batteryPercent) / 10) * 10;
        document.getElementById("batteryImg").src = "imgs/" + State + Level + ".png";
    
    } else if (type == "weather") {
            document.getElementById('naturalWeather').innerHTML = weather.naturalCondition;
            document.getElementById('temp').innerHTML = weather.temperature + "°";
            sRiseTime = weather.sunriseTime;
            sSetTime = weather.sunsetTime;
            document.getElementById('condition').innerHTML = weather.conditionCode + " and" + weather.condition;
        } 
    }