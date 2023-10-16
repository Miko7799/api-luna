const express = require('express');
const app = express();
const cors = require('cors');
const chalk = require('chalk');
const port = 3036;
const port2 = 40016;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const axios = require('axios');
const favicon = require('serve-favicon');
const visitors = new Set(); 
let totalRequests = 0;
let totalVisitors = 0;

var allowedOrigins = ['https://api-luna.vercel.app'];

app.set('trust proxy', 1)

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback((msg));
        }
        return callback(null, true);
    }
}));

// Funciones

const home = require('./routes/home');
const docs = require('./routes/docs');
const ttimg = require('./routes/ttimg');
const ytmp3 = require('./routes/ytmp3');
const ytmp4 = require('./routes/ytmp4');
const ytmp3_2 = require('./routes/ytmp3_2');
const ytmp4_2 = require('./routes/ytmp4_2');
const nsfwass = require('./routes/nsfwass');
const nsfwbdsm = require('./routes/nsfwbdsm');
const nsfwcum = require('./routes/nsfwcum');
const nsfwero = require('./routes/nsfwero');
const nsfwfemdom = require('./routes/nsfwfemdom');
const nsfwfoot = require('./routes/nsfwfoot');
const nsfwglass = require('./routes/nsfwglass');
const nsfwloli = require('./routes/nsfwloli');
const nsfworgy = require('./routes/nsfworgy');
const nsfwtrapito = require('./routes/nsfwtrapito');
const nsfwyaoi = require('./routes/nsfwyaoi');
const nsfwyuri = require('./routes/nsfwyuri');
const tiktokdl = require('./routes/tiktok');
const ytsearch = require('./routes/ytsearch');
const ytdl = require('./routes/ytdl');
const ytplay = require('./routes/ytplay');
const spotifydl = require('./routes/spotifydl');
const spotifyinfo = require('./routes/spotifyinfo');
const spotifysearch = require('./routes/spotifysearch');
const chatgpt = require('./routes/chatgpt');
const igdl1 = require('./routes/igdl');
const igdl2 = require('./routes/igdl2');
const getmail = require('./routes/correos-getMail');
const getmessages = require('./routes/correos-getMessages');
const toanime = require('./routes/toanime');
const facebook = require('./routes/facebook');
const gawrgura = require('./routes/gawrgura');
const packmen = require('./routes/packmen');
const packgirl = require('./routes/packgirl');
const videoxxx = require('./routes/videoxxx');
const videoxxxlesbi = require('./routes/videoxxxlesbi');
const xnxxdl = require('./routes/xnxxdl');
const xnxxsearch = require('./routes/xnxxsearch');
const booty = require('./routes/a-booty');
const ecchi = require('./routes/nsfwecchi');
const hentai = require('./routes/nsfwhentai');
const furro = require('./routes/a-furro');
const imglesbi = require('./routes/a-imagenlesbians');
const panties = require('./routes/a-panties');
const pechos = require('./routes/a-pechos');
const pene = require('./routes/a-pene');
const porno = require('./routes/a-porno');
const tetas = require('./routes/a-tetas');
const apirouter = require('./routes/anime-apis');


const getUptime = () => {
  const uptimeInSeconds = Math.floor(process.uptime());
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = uptimeInSeconds % 60;
  return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

// Subpaginas y usos

app.use((req, res, next) => {
  req.startTime = Date.now();
  totalRequests++;
  const userIp = req.ip; 
  if (!visitors.has(userIp)) {
    visitors.add(userIp); 
    totalVisitors++; 
  }
  next();
});

app.use('/', home);
app.use('/docs', docs);

app.use('/api/anime', apirouter);
app.use('/api/ttimg', ttimg);
app.use('/api/v1/ytmp3', ytmp3);
app.use('/api/v1/ytmp4', ytmp4);
app.use('/api/v2/ytmp3', ytmp3_2);
app.use('/api/v2/ytmp4', ytmp4_2);
app.use('/api/tiktok', tiktokdl);
app.use('/api/ytsearch', ytsearch);
app.use('/api/ytdl', ytdl);
app.use('/api/ytplay', ytplay);
app.use('/api/spotifydl', spotifydl);
app.use('/api/spotifyinfo', spotifyinfo);
app.use('/api/spotifysearch', spotifysearch);
app.use('/api/chatgpt', chatgpt);
app.use('/api/v1/igdl', igdl1);
app.use('/api/v2/igdl', igdl2);
app.use('/api/tempmail/getmail', getmail);
app.use('/api/tempmail/getmessages', getmessages);
app.use('/api/toanime', toanime);
app.use('/api/facebook', facebook);
app.use('/api/nsfw/nsfwass', nsfwass);
app.use('/api/nsfw/nsfwbdsm', nsfwbdsm);
app.use('/api/nsfw/nsfwcum', nsfwcum);
app.use('/api/nsfw/nsfwero', nsfwero);
app.use('/api/nsfw/nsfwfemdom', nsfwfemdom);
app.use('/api/nsfw/nsfwfoot', nsfwfoot);
app.use('/api/nsfw/nsfwglass', nsfwglass);
app.use('/api/nsfw/nsfwloli', nsfwloli);
app.use('/api/nsfw/nsfworgy', nsfworgy);
app.use('/api/nsfw/nsfwtrap', nsfwtrapito);
app.use('/api/nsfw/yaoi', nsfwyaoi);
app.use('/api/nsfw/yuri', nsfwyuri);
app.use('/api/nsfw/ecchi', ecchi);
app.use('/api/nsfw/hentai', hentai);
app.use('/api/adult/packgirl', packgirl);
app.use('/api/adult/packmen', packmen);
app.use('/api/adult/gawrgura', gawrgura);
app.use('/api/adult/videoxxx', videoxxx);
app.use('/api/adult/videoxxxlesbi', videoxxxlesbi);
app.use('/api/adult/booty', booty);
app.use('/api/adult/furro', furro);
app.use('/api/adult/imglesbian', imglesbi);
app.use('/api/adult/panties', panties);
app.use('/api/adult/pechos', pechos);
app.use('/api/adult/pene', pene);
app.use('/api/adult/porno', porno);
app.use('/api/adult/tetas', tetas);
app.use('/api/xnxxdl', xnxxdl);
app.use('/api/xnxxsearch', xnxxsearch);

app.use('/tmp', express.static('tmp'));
app.use(express.static('public'));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/status', (req, res) => {
  const uptime = getUptime();
  const averageResponseTime = Date.now() - req.startTime;
  totalRequests--; 
  const response = {
    uptime: uptime,
    latency: `${averageResponseTime} ms`,
    totalRequests: totalRequests,
    totalVisitors: totalVisitors,
    creator: 'Miko',
    phoneNumber: '+62 857 5582 7288'
  };
  const formattedResponse = JSON.stringify(response, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.end(formattedResponse);
});

app.disable("x-powered-by");

app.use(function(req, res, next) {
    res.status(404);
    const filePath = path.join(__dirname, 'public', '404.html');
    res.sendFile(filePath);
});

// Funciones automáticas 
const clearTmpFiles = () => {
  const tmpDir = './tmp';
  fs.readdir(tmpDir, (err, files) => {
    if (err) return console.error('Error reading temporary directory:', err);
    const filesToDelete = files.filter((file) => file !== 'file');
    if (filesToDelete.length > 0) {
      filesToDelete.forEach((file) => {
        const filePath = path.join(tmpDir, file);
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error('Error al eliminar el archivo:', unlinkErr);
          }
        });
      });
    } else {
      return;
    }
  });
};
setInterval(clearTmpFiles, 60000);

let previousCommitSHA = '';
let isError = false;
async function checkRepoUpdates() {
  if (isError) return;
  try {
    const response = await axios.get(`https://api.github.com/repos/BrunoSobrino/api/commits?per_page=1`);
    const { sha } = response.data[0];
    if (sha !== previousCommitSHA) {
      const stdout = execSync('git pull > /dev/null 2>&1');
      previousCommitSHA = sha;
    }
  } catch {
    isError = true;
    return;
  }
}
setInterval(checkRepoUpdates, 300000); //300000

// Log incial 
app.listen(port, function() {
    const line = chalk.yellow('==========================================');
    const serverUrl = 'http://localhost:' + port;
    const serverMessage = chalk.green.bold('| Server aktif: ') + chalk.blue.bold(serverUrl);
    const creatorMessage = chalk.magenta.bold('| Creator : Miko');
    const numberMessage = chalk.magenta.bold('| Number : 62882-2108-7236');
    const apiMessage = chalk.red.bold('|          "Api Rest Free"');
    console.log(chalk.yellow(line));
    console.log(apiMessage);
    console.log(chalk.yellow(line));
    console.log(serverMessage);
    console.log(chalk.yellow(line));
    console.log(creatorMessage);
    console.log(numberMessage);
    console.log(chalk.yellow(line));
});
app.listen(port2, function() {});
