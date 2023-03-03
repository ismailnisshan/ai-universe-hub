const loadApi = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayApi(data.data.tools)
}
const displayApi = api => {
    const apiContainer = document.getElementById('api-container');
    api.slice(0, 6).forEach(singledata => {
        console.log(singledata)
        const apiDiv = document.createElement('div');
        apiDiv.classList.add('col')
        apiDiv.innerHTML = `
        <div class="card p-4">
        <img  src="${singledata.image}" class="card-img-top img-fluid w-full  " alt="...">
        <div class="card-body">
            <h2 class="card-title fw-bolder">Features</h2>
            <div class="fw-semibold">
            <ul class="list-unstyled">
              <li class="mt-2 fs-5">1.${singledata.features[0]}</li>
              <li class="mt-2 fs-5">2.${singledata.features[1]}</li>
              <li class="mt-2 fs-5">3.${singledata.features[2] ? singledata.features[2] : 'No Data Found'}</li>
           </ul>
            </div>
            <div class="border-bottom mt-4 "> </div>
            <div class="d-flex align-items-center">
                <div class="d-flex flex-column">
                    <div class="mt-4">
                        <h3 class="fw-bold">${singledata.name}</h3>
                    </div>
                    <div class="mt-3 fw-semibold ">
                 <div class="d-flex gap-2"> 
                 <i class="fa-solid fa-calendar-days mt-1"></i> 
                 <p>${singledata.published_in}</p>
                 </div>
                 </div>
                </div>
                <div class="ms-auto  ">
                    <i  onclick="${showDetails(singledata.id)}" class="fa-solid fa-arrow-right border rounded-circle p-3 bg-danger-subtle  " data-bs-toggle="modal" data-bs-target="#apiDetails"></i>
            
                </div>
            </div>
        </div>
    </div>
            `;
        apiContainer.appendChild(apiDiv)
    });
};

// show all data
const showData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    const displayAllData = data => {
        const apiContainer = document.getElementById('api-container');
        data.slice(6, 12).forEach(data => {
            console.log(data)
            const apiDiv = document.createElement('div');
            apiDiv.classList.add('col')
            apiDiv.innerHTML = `
            <div class="card p-4">
            <img src="${data.image}" class="card-img-top img-fluid w-full  " alt="...">
            <div class="card-body">
                <h2 class="card-title fw-bolder">Features</h2>
                <div class="fw-semibold">
                <ul class="list-unstyled">
                  <li class="mt-2 fs-5">1.${data.features[0]}</li>
                  <li class="mt-2 fs-5">2.${data.features[1]}</li>
                  <li class="mt-2 fs-5">3.${data.features[2] ? data.features[2] : 'No Data Found'}</li>
               </ul>
                </div>
                <div class="d-flex align-items-center">
                    <div class="d-flex flex-column">
                        <div class="mt-4">
                            <h3 class="fw-bold">${data.name}</h3>
                        </div>
                        <div class="mt-3 fw-semibold ">
                         
                     <div class="d-flex gap-2"> 
                     <i class="fa-solid fa-calendar-days mt-1"></i> 
                     <p>${data.published_in}</p>
                     </div>
                     </div>
                    </div>
                    <div class="ms-auto   ">
                        <i onclick="${showDetails(data.id)}"  class="fa-solid fa-arrow-right border rounded-circle p-3 bg-danger-subtle  "></i>
                    </div>
                </div>
            </div>
        </div>
                `;
            apiContainer.appendChild(apiDiv)
        });
    };
    displayAllData(data.data.tools);
    const showBtn = document.getElementById('btn-show-all');
    showBtn.style.display = 'none';
};
const showDetails= id=>{
    // const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    // const res=await fetch(url);
    // const data=await res.json();
    // console.log(data)
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
     .then (res=>res.json())
     .then(data=>console.log(data))
}





loadApi();


