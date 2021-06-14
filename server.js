const http = require('http');
const api_url = `${process.env.URL}?apikey=${process.env.API_KEY}`;
const { URL,URLSearchParams } = require('url');

const  getMovieByTitle = (title) => {
    return new Promise((resolve, reject) => {
        http.get(`${api_url}&t=${title}`, (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed
                                    Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error(`Invalid content-type
                                    received ${contentType}`);
            }
            if (error) {
                reject(error.message);
                res.resume();
                return;
            }
            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    console.error(error.message)
                }
            });
        });
    })
}

const server = http.createServer(async (req, res) => {
    let url =  new URL(`${req.url}`,`${process.env.APP_URL}`);
    queryObject = url.searchParams.keys();
    let data;


//    if (queryObject.get('title')){
            try {
                data = await getMovieByTitle("batman");
                res.writeHead(200, { 'Content-Type' : 'application/json' });
                res.end(JSON.stringify(data));
            } catch (error) {
                console.log(error);
            }
//    }
       
});


server.on("listening", (err, socket) => {
    console.log("Listening on port 80");
});

server.listen(8080);
