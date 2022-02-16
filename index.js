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
         alert("POST SUCCESSFULL!");
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
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
    }


getPost()