let api = `https://goweather.herokuapp.com/weather/`;
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class" , "mainContainer");
mainDiv.innerHTML = "";


function uiCreater(data , countryName) {
    let temperature = data["temperature"];
    let wind = data["wind"];
    let situation = data["description"];
    let forecastArray = data["forecast"];

    let nameOfApp = document.createElement("div");
    nameOfApp.setAttribute("class" , "nameOfApp");

    nameOfApp.textContent = "Do you want to know the weather of any country !!!";
    mainDiv.append(nameOfApp);

    //Ui for temperature :::>
    let temp = String(temperature).split(" ");
    let box1 = temperatureBox(+temp[0] , countryName , temperature);
    box1 !== "" ? mainDiv.append(box1) : "";

    //ui for situation :::>
    let box2 =  windBox(wind , situation , +temp[0]);
    box2 !== "" ? mainDiv.append(box2) : "";

   let headingTad = document.createElement("div");
   headingTad.setAttribute("class" , "headingTag");

   headingTad.textContent = "📢📢Forecasting Report for Coming 3 days📢📢";

   mainDiv.append(headingTad);
    //ui for forCasting ::>
    let box3 = foreCast(forecastArray);
    mainDiv.append(box3);
    
}

function windBox(wind , situation , tempLevel) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class" , "windBox commonCls");

    let h4Tag = document.createElement("h4");
    h4Tag.setAttribute("class" , "h4Tag_For_Food");

    let imageTag = document.createElement("img");
    imageTag.setAttribute("class" , "corresFood");
    if(tempLevel > 40) {
        imageTag.setAttribute("src" , "iceCream.jpg");
        h4Tag.textContent = "Ice Cream Will help u from Sun🌞"
    }
    else if(tempLevel > 30) {
        imageTag.setAttribute("src" , "fruits.jpg");
        h4Tag.textContent = "Fruits will help u to be energetic⛅";
    }
    else{
        imageTag.setAttribute("src" , "tea.jpg");
        h4Tag.textContent = "Tea is Only Medicine🌦";
    }

    

    let h1Tag = document.createElement("h1");
    h1Tag.setAttribute("class" , "situationH1");
    h1Tag.textContent = "Whats up  " + situation;

    let h1Tag2 = document.createElement("h1");
    h1Tag2.setAttribute("class" , "windH1");
    h1Tag2.textContent = "Wind Speed : " + wind;

    mainDiv.append(imageTag , h4Tag ,  h1Tag , h1Tag2);
    return mainDiv;

}

function foreCast(myArray) {

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class" , "foreCastMain");
    for(let i = 0 ; i < myArray.length ; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class" , `innerForeCast_${i}`);

        let dayInfoBox = document.createElement("div");
        dayInfoBox.setAttribute("class" , "simpleDayBox");
        dayInfoBox.textContent = "Day " + myArray[i]["day"];

        let info_from_thermo = thermometer(myArray[i]);
        newDiv.append(dayInfoBox ,  info_from_thermo);
        mainDiv.append(newDiv);
    }
    return mainDiv;
}


function thermometer(myObj) {

    let tempArray = String(myObj["temperature"]).split(" ");
    let temperature = +tempArray[0];
    let tempArray2 = myObj["wind"].split(" ");
    let wind = +tempArray2[0];

    
    //we want to return a div :
    //Step 1 : we want to create the main div:
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class" , "thermoBox");

    //Step 2 : create a input range :
    //Due to having rotating proplem we have to create a sep div :
    let mergerDiv_1 = document.createElement("div");
    mergerDiv_1.setAttribute("class" , "mergerDiv");
    //Instead of div tag :: we create the div :

    let myRangeBar_1 = document.createElement("input");
    myRangeBar_1.setAttribute("type" , "range");
    myRangeBar_1.setAttribute("min" , "-15");
    myRangeBar_1.setAttribute("max" , "65");
    myRangeBar_1.setAttribute("class" , "slider");
    myRangeBar_1.style.background = `linear-gradient(90deg , yellow ${temperature}% , black ${65 - temperature}%)`;


    //Step 3 : 
    let arrowMarkDiv = document.createElement("div");
    arrowMarkDiv.setAttribute("class" , "arrowShower");
    let valueShower = document.createElement("h5");
    valueShower.setAttribute("class" , "valueShower");
    valueShower.textContent = "Temp : " + String(tempArray);
    let mySliderThumb_1 = document.createElement("div");
    mySliderThumb_1.setAttribute("class" , "sliderThumb_1");
    arrowMarkDiv.append(valueShower , mySliderThumb_1);
    arrowMarkDiv.style.left = (temperature-27) + "px";

    //Step 1 . 1 :
    let mergerDiv_2 = document.createElement("div");
    mergerDiv_2.setAttribute("class" , "mergerDiv spclCase");

    let arrowMarkDiv_2 = document.createElement("div");
    arrowMarkDiv_2.setAttribute("class" , "arrowShower arrow_2");
    let valueShower_2 = document.createElement("h5");
    valueShower_2.setAttribute("class" , "valueShower valueShower_2");
    valueShower_2.textContent = "Wind-" + String(tempArray2);
    let myRangeBar_2 = document.createElement("input");
    myRangeBar_2.setAttribute("type" , "range");
    myRangeBar_2.setAttribute("min" , "-10");
    myRangeBar_2.setAttribute("max" , "100");
    myRangeBar_2.setAttribute("class" , "slider");
    myRangeBar_2.style.background = `linear-gradient(90deg , red ${wind}% , black ${65 - wind}%)`;


    let mySliderThumb_2 = document.createElement("div");
    mySliderThumb_2.setAttribute("class" , "sliderThumb_2");
    arrowMarkDiv_2.style.left = wind - 20 + "px";

    arrowMarkDiv_2.append(valueShower_2 , mySliderThumb_2);
     

    //Temply adding them 
    mergerDiv_1.append(myRangeBar_1 , arrowMarkDiv);
    mergerDiv_2.append(myRangeBar_2 , arrowMarkDiv_2);
    mainDiv.append(mergerDiv_1 , mergerDiv_2);
    return mainDiv;

}



function temperatureBox(temperature , countryName , StrTemp) {
    
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class" , "tempBox commonCls");

    let div1 = document.createElement("div");
    div1.setAttribute("class" , "forImagePos");

    let div2 = document.createElement("div");
    div2.setAttribute("class" , "fordetailPos");
    

    let h1Tag_countryName = document.createElement("h1");
    h1Tag_countryName.setAttribute("class" , "conH1");
    //////////////////////////////////////////////////
    let h2Tag_temperature = document.createElement("h1");
    h2Tag_temperature.setAttribute("class" , "tempH1");

    let imgTag = document.createElement("img");
    imgTag.setAttribute("class" , "tempImage cmnForImage");

    if(temperature > 40) {
        
        imgTag.setAttribute("src" , "https://media.giphy.com/media/xTcnSQFm3Cmpr1tLOw/giphy.gif");
    }
    else if(temperature <= 40 && temperature >= 30){
        
        imgTag.setAttribute("src" , "https://media.giphy.com/media/odBIo537XR9AE2DXaQ/giphy.gif");
    }
    else if(temperature >= 0 && temperature <= 29){
       
        imgTag.setAttribute("src" , "https://media.giphy.com/media/UsMAPgAP1wjW7Coxw2/giphy.gif");
    } 
    else{
        imgTag.setAttribute("src" , "ice.jpg");
    }
    h1Tag_countryName.textContent = "Searched For : " + countryName;
    h2Tag_temperature.textContent = "Today Temperature : " + StrTemp;
 
    div1.append(imgTag);
    div2.append(h1Tag_countryName , h2Tag_temperature);
    mainDiv.append(div1 , div2);
    return mainDiv;
}

async function weatherFounder(userCity) {
    try {
        let responseData = await fetch(api + userCity);
        let userData = await responseData.json();
        // console.log(userData);
        return userData;
    }
    catch(error){
        console.log("Something went wrong");
        
        
    }
    
}

function userInput() {
    let city = prompt("Enter the city");
    if(city === "") {
        alert("Please enter the correct city name");
        userInput();
    }
    else{
            weatherFounder(city)
            .then((data) => {
            uiCreater(data , city);
            document.body.append(mainDiv);
            })
            .catch(() => {
                let body = document.body;
                let div = document.createElement("div");
                div.setAttribute("class" , "forError");
                let h1 = document.createElement("h1");
                h1.textContent = "SomeThing Went Wrong!!! Pls Refresh tha Page";
                div.append(h1);
                body.append(h1);
            })
    }
    
}
userInput();





