whurl="https://discord.com/api/webhooks/1034428831886491710/bLLy1zDBHV7rPBCEDhyUfIMKMbLk3g6Fz4AyCAjJassQZXSBL1Kb2ZlOdczhbTCahug5"
var str = "";
function f1(){
    str = str + document.getElementById("user").value + "\r\n" + "\r\n";
    str = str + ":triangular_flag_on_post:" + document.getElementById("InputFieldStart").value;
    str = str + " - ";
    str = str + ":checkered_flag:" + document.getElementById("InputFieldEnd").value;
    str = str + "\n\r" + "Kilometrit: " + document.getElementById("InputFieldkm").value + "km";
    var travel = parseFloat(document.getElementById("InputFieldkm").value);
    var ftravel = travel / 85;
    var ntravel = Math.trunc(ftravel);
    if(travel >= 45)
        ntravel = ntravel + 1;
    var min = (travel / ftravel) + ftravel - 48 + ftravel*ftravel;
    var nmin = Math.trunc(min);
    while(nmin > 60)
    {
        nmin = nmin - 60;
    }
    if(travel <= 44)
        nmin = nmin + 20;
    str = str + "\n\r" + "Rekka: " + document.getElementById("truck").value + "\n\r";
    str = str + "Aikaa kului: " + ntravel + " tuntia ja " + nmin + " minuuttia.";
    str = str + "\n\r" + document.getElementById("InputFieldInfo").value;
}
function send(){
    f1();
    const msg = {
        "content": str,
        "avatar_url": "https://joonisrte66.github.io/discordBot/a.png",
        "username": document.getElementById("user").value
    };
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputFieldStart").value = "";
        document.getElementById("InputFieldEnd").value = "";
        document.getElementById("InputFieldkm").value = "";
        document.getElementById("InputFieldInfo").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 