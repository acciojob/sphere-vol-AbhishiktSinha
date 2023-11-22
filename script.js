const formElement = document.querySelector("#MyForm");
function volume_sphere() {
    //Write your code here
	const radius = Number(formElement.radius.value);
	const volume = ((4 * Math.PI * radius**3) / 3.0).toFixed(4);
	
	formElement.volume.value= volume;
		
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
formElement.addEventListener("submit", (event)=>{
	event.preventDefault();
})