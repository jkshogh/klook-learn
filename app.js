const render = (data) => {

    for (let i =0; i < 6; i++) {
        const title = data[i].data.title;
        const subTitle = data[i].data.sub_title;
        const imgUrl = data[i].data.img_url;

        const newCard = document.createElement('div');
        newCard.innerHTML = 
        ` <div class="hk">
            <img
              src=${imgUrl}
              alt="hkpic"
              class="locimg"
            />
            <div class="loc" id="loc1">${title}</div>
            <div class="noact" id="act1">${subTitle}</div>
          </div>`;
        
        document.getElementById("activities").append(newCard);
    }
}

// fetch(
//   "https://www.klook.com/v1/platformbffsrv/homepage/service/get_where_to_next?brand=&carrier=&city_id=2&country_id=2&roaming=&sim_region_code=&source=human&system_platform=desktop&k_lang=zh_HK&k_currency=HKD",
// )
//   .then((response) => {
//     response.json().then((data) => {
//         render(data.result.items);
//     });
//   })
//   ;


  const newRender = async () =>{
    const response = await fetch(
  "https://www.klook.com/v1/platformbffsrv/homepage/service/get_where_to_next?brand=&carrier=&city_id=2&country_id=2&roaming=&sim_region_code=&source=human&system_platform=desktop&k_lang=zh_HK&k_currency=HKD"
)
    const result = await response.json()
    const data = result.result.items
    render(data) 
  }

  newRender();

