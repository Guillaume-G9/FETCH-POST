let campaignName = document.querySelector("#campaign");
let websiteUrl = document.querySelector("#website");
let clientName = document.querySelector("#name");
let email = document.querySelector("#email");

async function post(){
    try {
        const response = await fetch('https://fomoapi.p.rapidapi.com/', {
         method: 'POST',
         headers: {
           'content-type':'application/json',
           'x-rapidapi-host':'fomoapi.p.rapidapi.com',
           'x-rapidapi-key':'b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c'
           },
           body: JSON.stringify({
            idCampaign: campaignName.value,
            urlWebsite: website.value,
            leadName: clientName.value,
            leadEmail: email.value
            })
         });
         const data = await response.json();
         alert("POST SUCCESSFULL!");
       } catch(error) {
           alert("POST ERROR!")
         } 
      getPost();
    }

const getPost = async () => {
    try {
        const response = await fetch('https://fomoapi.p.rapidapi.com/',{
            method: 'GET',
            headers: {
              'content-type':'application/json',
              'x-rapidapi-host':'fomoapi.p.rapidapi.com',
              'x-rapidapi-key':'b5b2ec9656msh285edf6f388e087p1f0c5ajsn3b5bb3db591c'
              }})
        
         const data = await response.json();
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
    }


getPost()