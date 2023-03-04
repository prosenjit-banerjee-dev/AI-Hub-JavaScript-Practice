const loadAi = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayAi(data.data.tools.slice(0, 6));
}
const displayAi = (aiList) => {
  const aiContainer = document.getElementById('ai-container');
  // display 6 ai only
  aiContainer.innerHTML = '';
  aiList.forEach(ai => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col');
    aiDiv.innerHTML = `
    <div class="card h-100">
        <img src="${ai.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Features <ol>
        <li>${ai.features[0]}</li>
        <li>${ai.features[1]}</li>
        <li>${ai.features[2]}</li>
        </ol></p>
              </div>
      <div class="card-footer d-flex justify-content-between">
        <div><h5 class="card-title">${ai.name}</h5>
          <small class="text-muted">${ai.published_in
      }</small> 
        </div>
          <div> <button onclick="loadAiDetails('${ai.id}')" id="btn-details" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#aiDetailModal">Details</button> 
          </div>
          </div>
          </div>
            `
    aiContainer.appendChild(aiDiv);
  });
  toggleSpinner(false);
}

const showAllDataTogether = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayAi(data.data.tools);
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
loadAi();
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
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col-sm-6">
            <div class="card">
              <div>
                <h5 class="card-title">${ai.description}</h5>
              </div>
              <div class="row gap-4">
                <div class="col border border-warning-subtle rounded ">
                  <p class="text-danger">$10/month Basic</p>
                </div>
                <div class="col">
                  <p class="text-danger">$15/month Pro</p>
                </div>
                <div class="col">
                  <p class="text-danger">$Contact us Enterprise</p>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <p>Features:
                    <ul><li>${ai.features[1].feature_name}
                    <li>${ai.features[2].feature_name}
                    <li>${ai.features[3].feature_name}</ul></p>
                </div>
                <div>
                  <p>Integrations
                  <ul>
                  <li>${ai.integrations ? ai.integrations[0] : 'no data found'}</li>
                  <li>${ai.integrations ? ai.integrations[1] : 'no data found'}</li>
                  <li>${ai.integrations ? ai.integrations[2] : 'no data found'}</li>
                    </ul>
                    </p>
                </div>
              </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
              <div>
                <img src="${ai.image_link[0]}" class="card-img-top" alt="...">
                <button class="btn btn-danger">${ai.accuracy['score']}</button>
              </div>
              <div> 
                <p>${ai.input_output_examples ? ai.input_output_examples[0].input : 'no data found'}</p>
                <p>${ai.input_output_examples ? ai.input_output_examples[0].output : 'no data found'}</p>
              </div>

            </div>
        </div>   
      </div> 
    `
    modalContainer.innerText = '';
    modalContainer.appendChild(div);
    
  }
  
