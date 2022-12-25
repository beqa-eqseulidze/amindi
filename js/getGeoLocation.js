
export function setGeoLocation(){
        if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
            sessionStorage.setItem('lat',position.coords.latitude);
            sessionStorage.setItem('lon',position.coords.longitude); 
        },
        function(){                        
            sessionStorage.setItem('lat',41.5653247);
            sessionStorage.setItem('lon',44.9784606);
            })                     
         }
        else{
            sessionStorage.setItem('lat',41.5653247);
            sessionStorage.setItem('lon',44.9784606);
        }
       
    }  

