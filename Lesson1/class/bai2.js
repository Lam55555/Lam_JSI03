const fetchData = async  () =>{
    try{
        const response =  await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json;
for( var post = 0; i<5; i++){
    let imgElement = document.createElement("img");
    imgElement.src = data[post].thumbnailUrl;
    // imgElement.textContent = post.imgElement
    dataElement.appendChild(imgElement)
}
        
    }
    catch(e){}
    };
fetchData();