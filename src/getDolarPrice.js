async function getDolarPrice() 
{
    let response = await
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    let data = await response.json()
    return data;
}

async function getBRLPrice() 
{
    let response = await
    fetch("https://economia.awesomeapi.com.br/json/last/BRL-USD")
    let data = await response.json()
    return data;
}

getDolarPrice().then((data)=> document.getElementById("dolarPrice").innerHTML = "R$ " + JSON.stringify(data).substring(157, 161));
getBRLPrice().then((data)=> document.getElementById("brlPrice").innerHTML = "U$D " + JSON.stringify(data).substring(155, 159));


