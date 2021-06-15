const http = require('http');
const api_url = `${process.env.URL}?apikey=${process.env.API_KEY}`;
const { URL } = require('url');

const movieCalls = {
    getMovieByIMDBID: (options) => {
        return new Promise((resolve, reject) => {
            http.get(`${api_url}&i=${options.id}`, (res) => {
                const { statusCode } = res;
                const contentType = res.headers['content-type'];

                let error;
                if (statusCode !== 200) {
                    error = reject(new Error(`Request Failed
                                        Status Code: ${statusCode}`));
                } else if (!/^application\/json/.test(contentType)) {
                    error = reject(new Error(`Invalid content-type
                                        received ${contentType}`));
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
                    const parsedData = JSON.parse(data);
                    if (parsedData.Response === "False")
                        reject(parsedData.Error);
                    resolve(parsedData);
                });
            });
        });
    },
    getMovieByTitle: (options) => {
        return new Promise((resolve, reject) => {
            let targetAPI = `${api_url}&t=${options.title}`;
            targetAPI = Object.keys(options).includes('year') ? `${api_url}&t=${options.title}&y=${options.year}` : targetAPI;
            http.get(targetAPI, (res) => {
                const { statusCode } = res;
                const contentType = res.headers['content-type'];

                let error;
                if (statusCode !== 200) {
                    error = reject(new Error(`Request Failed
                                        Status Code: ${statusCode}`));
                } else if (!/^application\/json/.test(contentType)) {
                    error = reject(new Error(`Invalid content-type
                                        received ${contentType}`));
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
                    const parsedData = JSON.parse(data);
                    if (parsedData.Response === "False")
                        reject(parsedData.Error);
                    resolve(parsedData);
                });
            });
        });
    },
    searchMovies: (options) => {
        return new Promise((resolve, reject) => {
            let targetAPI = `${api_url}&s=${options.title}`;
            if (Object.keys(options).includes('year')) {
                targetAPI = `${api_url}&s=${options.title}&y=${options.year}`;
            }

            http.get(targetAPI, (res) => {
                const { statusCode } = res;
                const contentType = res.headers['content-type'];

                let error;
                if (statusCode !== 200) {
                    error = reject(new Error(`Request Failed
                    Status Code: ${statusCode}`));
                } else if (!/^application\/json/.test(contentType)) {
                    error = reject(new Error(`Invalid content-type
                    received ${contentType}`));
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

                    const parsedData = JSON.parse(data);
                    if (parsedData.Response === "False") {
                        reject(parsedData.Error);
                    }
                    resolve(parsedData);
                });
            });
        })
    }
}

const server = http.createServer(async (req, res) => {
    let url = new URL(`${req.url}`, `${process.env.APP_URL}`);
    const queryObject = url.searchParams
    let options = {};
    let data;

    url.searchParams.forEach((value, name, _searchParams) => {
        if (name === 'year' || name === 'id') {
            if (isNaN(value)) {
                res.writeHead(400, { 'Content-Type': 'text/html' });
                res.end(`Invalid input, ${name} should be a number`);
                return;
            }
        }
    });
    switch (url.pathname) {
        case '/api/search/':
            try {
                options.title = queryObject.get('title');
                options.year = queryObject.has('year') ? queryObject.get('year') : delete options.year;
                data = await movieCalls.searchMovies(options);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(error)
            }
            break;
        case '/api/title/':
            try {
                options.title = queryObject.get('title');
                options.year = queryObject.has('year') ? queryObject.get('year') : delete options.year;
                data = await movieCalls.getMovieByTitle(options);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(error);
            }
            break;
        case '/api/imdbid/':
            try {
                options.id = queryObject.get('id');
                options.year = queryObject.has('year') ? queryObject.get('year') : delete options.year;
                data = await movieCalls.getMovieByIMDBID(options);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(error);
            }
            break;
        default:
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('Please check out the docs on how to use this API.');
            break;
    }
});


server.on("listening", (_err, _socket) => {
    console.log("Listening on port 80");
});

server.listen(8080);
