document.getElementById('submit').addEventListener('click', function(){
    let verifyUser = document.getElementById('userName').value;
    let verifyPassword = document.getElementById('Password').value;
    if(verifyUser =="mujahid" && verifyPassword == 123){
      const display = document.getElementById('some');
      display.style.display="block";
      document.getElementById('notification').innerHTML = ' ';
    }else{
      document.getElementById('notification').innerHTML = 'incorrect';
      document.getElementById('userName').value="";
      document.getElementById('Password').value="";
    }
    })
    
    document.getElementById('close').addEventListener('click', function(){
      const display = document.getElementById('some');
      display.style.display="none";
      const none =  document.getElementById('none');
      none.style.display="block";
    })