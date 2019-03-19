function mainUpdate(type){
    if(type == "battery"){
        var chargeText = (batteryCharging) ? "Charging" : "Not Charging";
        var State = (batteryCharging);
        var Level = Math.ceil((batteryPercent) / 10) * 10;
        document.getElementById("batteryImg").src = "imgs/" + State + Level + ".png";
    
    } else if (type == "weather") {
            document.getElementById('naturalWeather').innerHTML = weather.naturalCondition;
            document.getElementById('temp').innerHTML = weather.temperature + "°";
            document.getElementById('condition').innerHTML = weather.conditionCode + " and" + weather.condition;
            var condCode = weather.conditionCode;
            switch (condCode) {
                case 0:
                document.getElementById("weatherIcon").src = "imgs/0.png";
                break;
                case 1:
                document.getElementById("weatherIcon").src = "imgs/1.png";
                break;
                case 2:
                document.getElementById("weatherIcon").src = "imgs/1.png";
                break;
                case 3:
                document.getElementById("weatherIcon").src = "imgs/38.png";                
                break;
                case 4:
                document.getElementById("weatherIcon").src = "imgs/38.png";
                break;
                case 5:
                document.getElementById("weatherIcon").src = "imgs/5.png";
                console.log("5");
                break;
                case 6:
                document.getElementById("weatherIcon").src = "imgs/6.png";
                break;
                case 7:
                document.getElementById("weatherIcon").src = "imgs/5.png";
                break;
                case 8:
                document.getElementById("weatherIcon").src = "imgs/6.png";
                break;
                case 9:
                document.getElementById("weatherIcon").src = "imgs/9.png";
                break;
                case 10:
                document.getElementById("weatherIcon").src = "imgs/6.png";
                break;
                case 12:
                document.getElementById("weatherIcon").src = "imgs/40.png";
                break;
                case 13:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 14:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 15:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 16:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 17:
                document.getElementById("weatherIcon").src = "imgs/17.png";
                break;
                case 18:
                document.getElementById("weatherIcon").src = "imgs/17.png";
                break;
                case 19:
                document.getElementById("weatherIcon").src = "imgs/19.png";
                break;
                case 20:
                document.getElementById("weatherIcon").src = "imgs/20.png";
                break;
                case 21:
                document.getElementById("weatherIcon").src = "imgs/20.png";
                break;
                case 22:
                document.getElementById("weatherIcon").src = "imgs/20.png";
                break;
                case 23:
                document.getElementById("weatherIcon").src = "imgs/23.png";
                break;
                case 24:
                document.getElementById("weatherIcon").src = "imgs/23.png";
                break;
                case 25:
                document.getElementById("weatherIcon").src = "imgs/15.png";
                break;
                case 26:
                document.getElementById("weatherIcon").src = "imgs/26.png";
                break;
                case 27:
                document.getElementById("weatherIcon").src = "imgs/27.png";
                break;
                case 28:
                document.getElementById("weatherIcon").src = "imgs/28.png";
                break;
                case 29:
                document.getElementById("weatherIcon").src = "imgs/27.png";
                break;
                case 30:
                document.getElementById("weatherIcon").src = "imgs/28.png";
                break;
                case 31:
                document.getElementById("weatherIcon").src = "imgs/31.png";
                break;
                case 32:
                document.getElementById("weatherIcon").src = "imgs/32.png";
                break;
                case 33:
                document.getElementById("weatherIcon").src = "imgs/31.png";
                break;
                case 34:
                document.getElementById("weatherIcon").src = "imgs/32.png";
                break;
                case 35:
                document.getElementById("weatherIcon").src = "imgs/6.png";
                break;
                case 36:
                document.getElementById("weatherIcon").src = "imgs/36.png";
                break;
                case 37:
                document.getElementById("weatherIcon").src = "imgs/37.png";
                break;
                case 38:
                document.getElementById("weatherIcon").src = "imgs/38.png";
                break;
                case 39:
                document.getElementById("weatherIcon").src = "imgs/9.png";
                break;
                case 40:
                document.getElementById("weatherIcon").src = "imgs/40.png";
                break;
                case 41:
                document.getElementById("weatherIcon").src = "imgs/5.png";
                break;
                case 42:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 43:
                document.getElementById("weatherIcon").src = "imgs/16.png";
                break;
                case 44:
                document.getElementById("weatherIcon").src = "imgs/44.png";
                break;
                case 45:
                document.getElementById("weatherIcon").src = "imgs/45.png";
                break;
                case 46:
                document.getElementById("weatherIcon").src = "imgs/5.png";
                break;
                case 47:
                document.getElementById("weatherIcon").src = "imgs/47.png";
                break;
            }
        
        } 
    }



