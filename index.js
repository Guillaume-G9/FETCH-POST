let campaignName = document.querySelector("#campaign");
let websiteUrl = document.querySelector("#website");
let clientName = document.querySelector("#name");
let email = document.querySelector("#email");
let inputPost = document.querySelector("#get-text")

async function post(){
    try {
        const response = await fetch('https://fomoapi.p.rapidapi.com/', {
         method: 'POST',
         headers: {
           'content-type':'application/json',
           'x-rapidapi-host':'fomoapi.p.rapidapi.com',
           'x-rapidapi-key':'99ed28ae2amshd0e344647972e02p17576bjsndea49b53a920'
           },
           body: JSON.stringify({
            idCampaign: campaignName.value,
            urlWebsite: website.value,
            leadName: clientName.value,
            leadEmail: email.value
            })
         });
         const data = await response.json();
       } catch(error) {
           alert("POST ERROR!")
         } 
      getPost();
    }

const getPost = async () => {
    try {
        const response = await fetch('https://fomoapi.p.rapidapi.com/?id=Guillaume',{
            method: 'GET',
            headers: {
              'content-type':'application/json',
              'x-rapidapi-host':'fomoapi.p.rapidapi.com',
              'x-rapidapi-key':'99ed28ae2amshd0e344647972e02p17576bjsndea49b53a920'
              }})
        
         const data = await response.json();
         console.log(data)
        inputPost.innerHTML = `
        <div>
          <p>CLIENT REQUEST:</p><br>
          <ul>
            <li>${data.keys[0].metadata.leadName}</li>
            <li>${data.keys[0].metadata.leadEmail}</li>
            <li>${data.keys[0].metadata.city}</li>
          </ul>
         </div>`
       } catch(error) {
          console.log(error)
         } 
    }

    getPost()