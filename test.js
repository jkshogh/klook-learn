      const render = (data) =>  {
        let title = "";
        let subTitle = "";
        let imgUrl = "";
        // numberOfitems = data.length 
        for (let i = 0; i < 6; i++) {
            title = data[i].data.title;
            subTitle = data[i].data.sub_title;
            imgUrl = data[i].data.img_url;
            console.log(title);
            console.log(subTitle);
            console.log(imgUrl);
            document.getElementById('activities').innerHTML = document.getElementById('activities').innerHTML + 
            `<div>
            <img
              src=${imgUrl}
              class="locimg"
            />
            <div class="loc">${title}</div>
            <div class="noact">${subTitle}</div>
          </div>`;
        }
    } 


// render (data);

      fetch('https://www.klook.com/v1/platformbffsrv/homepage/service/get_where_to_next?brand=&carrier=&city_id=2&country_id=2&roaming=&sim_region_code=&source=human&system_platform=desktop&k_lang=zh_HK&k_currency=HKD') 
        .then(response => {
          return response.json();
        })
        .then(data => {
        //   console.log(data);
        //   console.log(data.result.items)
          render(data.result.items)

        });

        