const loadAi = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayAi(data.data.tools);
}
const displayAi = aiList =>{
  const aiContainer = document.getElementById('ai-container');
  // display 6 ai only
  aiList = aiList.slice(0,6);
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
              <small class="text-muted">Last updated 3 mins ago</small> </div>
               <div> <button id="btn-details" type="button" class="btn btn-light">Light</button> </div>
              </div>
            </div>
            `
            aiContainer.appendChild(aiDiv);
  });
} 

// document.getElementById('btn-see-more').addEventListener('click',function(){
//   const 
// })
loadAi();