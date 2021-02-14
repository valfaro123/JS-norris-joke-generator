document.querySelector('.get-jokes').addEventListener('click',getJokes);

//function to grab jokes
function getJokes(e){
    //grab amount of jokes
    const num = document.querySelector('input[type="number"]').value;
   
    //create request
    const xhr= new XMLHttpRequest();

    //grab jokes from api
    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`, true);
    xhr.onload=function(){
        //if success...
        if(this.status=== 200){
            //...grab data from JSON
            const response = JSON.parse(this.responseText);
            let output= '';

            //if success...
            if(response.type === 'success'){
                //loop through and append joke to output
                response.value.forEach(function(joke){
                    output+= `<li>${joke.joke}</li>`
                })
                
            }else{
                //else output error
                output += '<li>Something went wrong<li>';
            }
            //add output to html 
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // send 
    xhr.send();
    e.preventDefault();
}