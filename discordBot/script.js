whurl="https://discord.com/api/webhooks/1034428831886491710/bLLy1zDBHV7rPBCEDhyUfIMKMbLk3g6Fz4AyCAjJassQZXSBL1Kb2ZlOdczhbTCahug5"
var str = "";
function f1(){
    str = str + document.getElementById("user").value + "\r\n" + "\r\n";
    str = str + document.getElementById("InputFieldStart").value;
    str = str + " - ";
    str = str + document.getElementById("InputFieldEnd").value;
    str = str + "\n\r" + "Kilometrit: " + document.getElementById("InputFieldkm").value + "km";
    str = str + "\n\r" + "Ajetut kilometrit: " + document.getElementById("InputFieldakm").value + "km";
    var travel = parseFloat(document.getElementById("InputFieldakm").value);
    var ftravel = travel / 65;
    var ntravel = Math.trunc(ftravel);
    var min = (travel / ftravel) + ftravel - 48 + ftravel*ftravel;
    var nmin = Math.trunc(min);
    str = str + "\n\r" + "Rekka: " + document.getElementById("truck").value + "\n\r";
    str = str + "Aikaa kului: " + ntravel + " tuntia ja " + nmin + " minuuttia.";
    str = str + "\n\r" + document.getElementById("InputFieldInfo").value;
}
function send(){
    f1();
    const msg = {
        "content": str,
        "username": document.getElementById("user").value
    };
    console.log(msg)
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
        document.getElementById("InputFieldakm").value = "";
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