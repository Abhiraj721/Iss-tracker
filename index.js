
        function kick(){
            let mybutton=document.querySelector(".api");
            mybutton.addEventListener("click",main());
        }
            function main(){
                console.log("button is pressed");
                sendreuqest();
            }
          async function sendreuqest(){
                let API_KEY="http://api.open-notify.org/iss-now.json";
                let START_DATE="2015-09-07";
                let END_DATE="2015-09-8";

                console.log("https://api.nasa.gov/neo/rest/v1/feed?start_date=" +START_DATE+"&end_date=2015-09-8&api_key=DEMO_KEY");
                let requests=await fetch("http://api.open-notify.org/iss-now.json");
                console.log(requests);
                let data=await requests.json();
                console.log(data);
                final(data);
            }
            function final(data){
                document.querySelector(".container").innerHTML+="<h1>"+data.iss_position.longitude+"</h1>";

      
            }
