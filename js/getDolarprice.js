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

getDolarPrice().then((data)=> document.getElementById("dolarPrice").innerHTML = "R$ " + data.USDBRL.bid);
getBRLPrice().then((data)=> document.getElementById("brlPrice").innerHTML = "U$D " + data.BRLUSD.bid);
