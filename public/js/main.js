 
const cityName =  document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "")
        {
            city_name.innerText = `Pls write the name before Search`;
            datahide.classList.add('data_hide');

    }else{   
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a95a3f23860dfeba66c9140278697777`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const temmode = arrData[0].weather[0].main;


            if (temmode == "Clear") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (temmode == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (temmode == "Rainy") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
              }
              datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Pls write city name Properly`;
            datahide.classList.add('data_hide');
        }

       
    }

    
}

submitBtn.addEventListener('click',getinfo);