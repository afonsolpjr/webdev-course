const options = {
    hostname: "hostname",
    path: "/",
    method: "GET",
}

const request = https.request(options,(response) => {
    let data="";
    // What to do with chunks of data coming in?
    response.on("data",(chunk)=>{
        data +=chunk;
    });

    //What to do when it ends fetching data?
    response.on("end",()=>{
        try{
        
        }
        catch(error)
        {
        
        }
    });
  });
    
// What to do on error?
request.on("error", (error) =>{
//res.status(500).send("Failed...");
});

request.end();