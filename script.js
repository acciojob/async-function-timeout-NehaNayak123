//your JS code here. If required.
const text=document.getElementById("text");
const delay=document.getElementById("delay");
const submit=document.getElementById("btn");
const output=document.getElementById("output");

submit.addEventListener("click", async ()=>{
	setTimeout(()=>{
		output.textContent=`${text.value}`
		text.value=""
		delay.value=""
	},delay.value)
})


