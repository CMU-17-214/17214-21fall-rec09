import * as http from 'http' 

const api_key = ""
const ml_options = {
    hostname: "https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs",
    path: '/',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Key " + api_key
    },
    body: `{
        "inputs": [
          {
            "data": {
              "image": {
                "url": "https://i.imgur.com/ROLJaSi.jpeg"
              }
            }
          }
        ]
      }`
}

const demo_options = {
    hostname: "feature.isri.cmu.edu",
    port: 3003,
    path: '/',
    method: 'GET'
}


function runWebAPIRequest(options: any) {
    const req = http.request(options, res => {
        //callback for nonerror results
        console.log(`statusCode: ${res.statusCode}`)

        //result is a stream and hence requires another callback to read data
        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    //set up callback for error
    req.on('error', error => {
        console.error(error)
    })

    //finishes sending the request
    req.end()
}

runWebAPIRequest(ml_options)
