const form = document.querySelector("#dic")
const meaning = document.querySelector("#meaning")



form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const val = document.querySelector("#word").value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;

    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error("Word not found!")
        }
        const data = await response.json();
        
        

        meaning.textContent = `- ${data[0].meanings[0].definitions[0].definition}`;
    } catch (error) {
        meaning.textContent = `Error: ${error.message}`
    }
    
    

})