const loadAi = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayAi(data.data.tools);
}
const displayAi = (aiList) => {
  const aiContainer = document.getElementById('ai-container');
  // display 6 ai only
  // if(dataLimit && ai.length === 6){
  //   aiList = aiList.slice(0, 6);
  // }
    
  aiList.forEach(ai => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col');
    aiDiv.innerHTML = `
    <div class="card h-100">
        <img src="${ai.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Features <ol><li>${ai.features}</li></ol></p>
              </div>
      <div class="card-footer d-flex justify-content-between">
        <div><h5 class="card-title">${ai.name}</h5>
          <small class="text-muted">${ai.published_in
      }</small> 
        </div>
          <div> <button onclick="loadAiDetails('${ai.id}')" id="btn-details" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#aiDetailModal">Details</button> 
          </div>
          </div>
          </div>
            `
    aiContainer.appendChild(aiDiv);
  });
  toggleSpinner(false);
}



const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if (isLoading) {
    loaderSection.classList.remove('d-none');
  }
  else {
    loaderSection.classList.add('d-none');
  }
}
const loadAiDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayAiDetails(data.data);
}
const displayAiDetails = ai =>{
  console.log(ai);
    const modalContainer = document.getElementById('aiDetailModalContainer');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col card h-100 card-body">
    <h1 class="fs-3 text-start">${ai.description ? ai.description : 'No description'}</h1>
    <div class="d-flex">
    <div>
    <p>Features:
    <ul><li>${ai.features[1].feature_name}
    <li>${ai.features[2].feature_name}
    <li>${ai.features[3].feature_name}</ul></p>
  </div>
  <div>
    <p>Integrations<ul><li>${ai.integrations[0]}
    <li>${ai.integrations[1]}
    <li>${ai.integrations[2]}</ul></p>
      
    </div>
    <img src="${ai.image_link[0]}" class="card-img-top" alt="...">
    <p>${ai.input_output_examples[0].input}</p>
    <p>${ai.input_output_examples[0].output}</p>
    <div> ${ai.accuracy.description}</div>
    </div>
    </div>  
    `
    modalContainer.innerText = '';
    modalContainer.appendChild(div);
    
  }
  
loadAi();