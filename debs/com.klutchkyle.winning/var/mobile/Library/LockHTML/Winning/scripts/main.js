function mainUpdate(type){
    if(type == "battery"){
        var chargeText = (batteryCharging) ? "Charging" : "Not Charging";
        var State = (batteryCharging);
        var Level = Math.ceil((batteryPercent) / 10) * 10;
        document.getElementById("batteryImg").src = "imgs/" + State + Level + ".png";
    
    } else if (type == "statusbar") {
        var wifiStat = (wifiName)
        var wifiConnect = 0;
        
        if (wifiStat == "NA") { //Not Connected to Wifi
            wifiConnect = 0;
            var sBars = signalBars;
            document.getElementById("wMtr").src = "imgs/sbar" + signalBars + ".png";
            document.getElementById("sMtr").style.visibility = "Hidden";
        } else { //Connected to Wifi
            wifiConnect = 1
            document.getElementById("wMtr").src = "imgs/wifiBars" + wifiBars + ".png";
            document.getElementById("wMtr").style.visibility = "Visible";
            document.getElementById("sMtr").style.visibility = "Visible";
            document.getElementById("sMtr").src = "imgs/sbar" + signalBars + ".png";

        }
    
    } 
}
