const express = require('express'); 
 const router = express.Router(); 
 const axios = require('axios'); 
const Jimp = require('jimp');
const FormData = require('form-data');
const baseUrl = 'https://tools.betabotz.org';

  
 router.get('/', async (req, res) => { 
   try { 
     res.setHeader('Content-Type', 'application/json'); 
   const URL = req.query.url;
     const image = await Jimp.read(URL);
      const buffer = await new Promise((resolve, reject) => {
    image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
      if (err) {
        reject('Terjadi Error Saat Mengambil Data......');
      } else {
        resolve(buf);
      }
    });
  });
  const form = new FormData();
  form.append('image', buffer, { filename: 'toanime.jpg' });
  
  try {
    const { data } = await axios.post(`${baseUrl}/ai/toanime`, form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
      },
    });
    var res = {
      image_data: data.result,
      image_size: data.size
    };
    return res;
  } catch (error) {
    console.error('Identifikasi Gagal:', error);
    return 'Identifikasi Gagal';
  }
     const dataimg = image.image_data; 
     const imageUrl = dataimg
     const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' }); 
     const imageBuffer = Buffer.from(imageResponse.data, 'binary'); 
     res.setHeader('Content-Type', 'image/jpeg'); 
     res.send(imageBuffer); 
   } catch (error) { 
     console.error(error); 
     res.status(500).send('An error occurred'); 
   } 
 }); 
  
 module.exports = router;
 
