/*

    1.  set username
    2.  Click F12
    3.  Go to console
    4.  Paste the following code and enter

*/

var interval =  () =>{
fetch('/clicked/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({'clicks' : '1000', 'uuid' : localStorage.getItem("uuid"), 'username' : localStorage.getItem("username")})
      }) 
      .then(response => response.json())
      .then(data => {
        console.log(data['clicks']);
        document.getElementById('myClicks').innerHTML = data['clicks'].toLocaleString();
        window.setTimeout(() => {
          interval();
        }, 2000);
        
      })
};
interval();
