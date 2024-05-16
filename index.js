
const url = "https://api.openweathermap.org/data/2.5/weather?";
const key="6735bbeb4134d043e9d1d0dd4075a14e"  

let input= document.querySelector(".search input")
let search_btn = document.querySelector(".search button")

search_btn.addEventListener("click",()=>{

    let city=input.value;
    input.value="";
    todo(city);
})


async function todo(city) {
    try {
        const response = await fetch(`${url}q=${city}&appid=${key}&units=metric`);
        
        if(response.status == 404) {
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }

        else{
        const data = await response.json();
        console.log(data);
        setdata(data)
        }
        
    } catch (error) {
        console.error('Error fetching weather data:',error);
    }
}

function setdata(data){

    let temp = document.querySelector(".temp");
    temp.textContent=Math.round(data.main.temp)+"°C";

    let city = document.querySelector(".city-name");
    city.textContent=data.name;

    let humudity=document.querySelector(".humidity");
    humudity.textContent=data.main.humidity

    let wind=document.querySelector(".wind");
    wind.textContent=data.wind.speed+"km/h";

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    let icon= document.querySelector(".weather-icon")
    console.log(icon);

    if(data.weather[0].main=="Snow"){
        icon.src="images/snow.png";
    }

    else if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }

    else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png";
    }

    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png";
    }

    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    }

    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }

    else{
        icon.src="images/rain.png";
    }

    
}
