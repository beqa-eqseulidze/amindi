
export function getLocation(){
       if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(success,error,options)
        }else{
          sessionStorage.setItem('lat',41.5653247);
          sessionStorage.setItem('lon',44.9784606);
        }
  }


 const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(position) {   
    sessionStorage.setItem('lat',position.coords.latitude);
    sessionStorage.setItem('lon',position.coords.longitude); 
    sessionStorage.setItem('accur', position.coords.accuracy)
  }
  
  function error(err) {   
    sessionStorage.setItem('lat',41.5653247);
    sessionStorage.setItem('lon',44.9784606);
  }
  
  
          
          

