const loadAi = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayAi(data.data.tools);
}
const displayAi = aiList =>{
  const aiContainer = document.getElementById('ai-container');
  aiList.forEach(ai => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col');
    aiDiv.innerHTML = `
    <div class="card h-100">
              <img src="${ai.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            `
            aiContainer.appendChild(aiDiv);
  });
} 
loadAi();