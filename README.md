# Api Luna - By Miko

- Developing

------------------

## —◉ APIs online:
- API : [https://api-luna.vercel.app/status](https://api-luna.vercel.app/status)

------------------

## —◉ Available Features:

<details>
<summary>Downloaders:</summary>

### YT downloader v1:
- **audio:**
  - Use: `https://api-luna.vercel.app/api/v1/ytmp3?url=${url}`
  - Example: [https://api-luna.vercel.appe/api/v1/ytmp3?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/v1/ytmp3?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)
- **video:**
  - Use: `https://api-luna.vercel.app/api/v1/ytmp4?url=${url}`
  - Example: [https://api-luna.vercel.app/api/v1/ytmp4?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/v1/ytmp4?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)

### YT downloader v2:
- **audio:**
  - Use: `https://api-luna.vercel.app/api/v2/ytmp3?url=${url}`
  - Example: [https://api-luna.vercel.app/api/v2/ytmp3?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/v2/ytmp3?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)
- **video:**
  - Use: `https://api-luna.vercel.app/api/v2/ytmp4?url=${url}`
  - Example: [https://api-luna.vercel.app/api/v2/ytmp4?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/v2/ytmp4?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)

### YTDL:
- **info + audio + video:**
  - Use: `https://api-luna.vercel.app/api/ytdl?url=${url}`
  - Example: [https://api-luna.vercel.app/api/ytdl?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/ytdl?url=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)
 
### YTPlay:
- **info + audio + video:**
  - Use: `https://api-luna.vercel.app/api/ytplay?text=${text || url}`
  - Example: [https://api-luna.vercel.app/api/ytplay?text=begin%20you](https://api-luna.vercel.app/api/ytplay?text=begin%20you)
  - Example: [https://api-luna.vercel.app/api/ytplay?text=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p](https://api-luna.vercel.app/api/ytplay?text=https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvSOkDk7p)

### SpotifyDL:
- **audio**
  - Use: `https://api-luna.vercel.app/api/spotifydl?text=${text || url}`
  - Example: [https://api-luna.vercel.app/api/spotifydl?text=maneskin%20beggin](https://api-luna.vercel.app/api/spotifydl?text=maneskin%20beggin)
  - Example: [https://api-luna.vercel.app/api/spotifydl?text=https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e](https://api-luna.vercel.app/api/spotifydl?text=https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e)
 
### SpotifyInfo:
- **info + audio:**
  - Use: `https://api-luna.vercel.app/api/spotifyinfo?text=${text || url}`
  - Example: [https://api-luna.vercel.app/api/spotifyinfo?text=begin%20you](https://api-luna.vercel.app/api/spotifyinfo?text=begin%20you)
  - Example: [https://api-luna.vercel.app/api/spotifyinfo?text=https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e](https://api-luna.vercel.app/api/spotifyinfo?text=https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e)


### InstagramDL V1:
- **video, image, reel, publication, story**
  - Use: `https://api-luna.vercel.app/api/v1/igdl?url=${url}`
  - Example: [https://api-luna.vercel.app/api/v1/igdl?url=https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link](https://api-luna.vercel.app/api/v1/igdl?url=https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link)

### InstagramDL V2:
- **video, image, reel, publication, story**
  - Use: `https://api-luna.vercel.app/api/v2/igdl?url=${url}`
  - Example: [https://api-luna.vercel.app/api/v2/igdl?url=https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link](https://api-luna.vercel.app/api/v2/igdl?url=https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link)
  
### TikTokDL:
- Use: `https://api-luna.vercel.app/api/tiktok?url=${url}`
- Example: [https://api-luna.vercel.app/api/tiktok?url=https://vm.tiktok.com/ZMjPXawEV](https://api-luna.vercel.app/api/tiktok?url=https://vm.tiktok.com/ZMjPXawEV)

### TTImg (TikTok image downloader):
- Use: `https://api-luna.vercel.app/api/ttimg?url=${url}`
- Example: [https://api-luna.vercel.app/api/ttimg?url=https://vm.tiktok.com/ZM2cqBRVS](https://api-luna.vercel.app/api/ttimg?url=https://vm.tiktok.com/ZM2cqBRVS)

### FacebookDL:
- Use: `https://api-luna.vercel.app/api/facebook?url=${url}`
- Example: [https://api-luna.vercel.app/api/facebook?url=https://fb.watch/fOTpgn6UFQ](https://api-luna.vercel.app/api/facebook?url=https://fb.watch/fOTpgn6UFQ)

</details>

<details>
<summary>Searchs:</summary>

### YTSearch:
  - Use: `https://api-luna.vercel.app/api/ytsearch?text=${texto}`
  - Example: [https://api-luna.vercel.app/api/ytsearch?text=begin%20you](https://api-luna.vercel.app/api/ytsearch?text=begin%20you)

### SpotifySearch:
  - Use: `https://api-luna.vercel.app/api/spotifysearch?text=${text}`
  - Example: [https://api-luna.vercel.app/api/spotifysearch?text=maneskin%20beggin](https://api-luna.vercel.app/api/spotifysearch?text=maneskin%20beggin)

</details>

<details>
<summary>Random image:</summary>

### nsfw:
- **nsfwloli:**
  - Use: [https://api-luna.vercel.app/api/nsfw/nsfwloli](http://api-luna.vercel.app/api/nsfw/nsfwloli)

</details>

<details>
<summary>Tools:</summary>

### ChatGPT:
- **Sin lenguaje:**
  - Use: `https://api-luna.vercel.app/api/chatgpt?text=${text}`
  - Example: [https://api-luna.vercel.app/api/chatgpt?text=Hola](https://api-luna.vercel.app/api/chatgpt?text=Hola)
- **With language:**
  - Use: `https://api-luna.vercel.app/api/chatgpt?text=${text}&lenguaje=${lenguaje}`
  - Example: [https://api-luna.vercel.app/api/chatgpt?text=Hola&lenguaje=es](https://api-luna.vercel.app/api/chatgpt?text=Hola&lenguaje=es)
  - Example: [https://api-luna.vercel.app/api/chatgpt?text=Hola&lenguaje=en](https://api-luna.vercel.app/api/chatgpt?text=Hola&lenguaje=en)

### TempMail:
- **Get mail:**
  - Use: `https://api-luna.vercel.app/api/tempmail/getmail`
  - Example: [https://api-luna.vercel.app/api/tempmail/getmail](https://api-luna.vercel.app/api/tempmail/getmail)
- **Get messages:**
  - Use: `https://api-luna.vercel.app/api/tempmail/getmessages?mail=${correo}`
  - Example: [https://api-luna.vercel.app/api/tempmail/getmessages?mail=miusuario@ejemplo.com](https://api-luna.vercel.app/api/tempmail/getmessages?mail=miusuario@ejemplo.com)

</details>


## —◉ Collaborators
<a href="https://github.com/Shizu-SH"><img src="https://github.com/Shizu-SH.png" width="100" height="100" alt="Shizu-SH"/></a>
<a href="https://github.com/BrunoSobrino"><img src="https://github.com/BrunoSobrino.png" width="100" height="100" alt="Shizu-SH"/></a>
<a href="https://github.com/Miko7799 "><img src="https://github.com/Miko7799.png" width="100" height="100" alt="Shizu-SH"/></a>

## —◉ Editor & owner
<a href="https://github.com/Miko7799"><img src="https://github.com/Miko7799.png" width="150" height="150" alt="Miko7799"/></a>
- Api Luna - By Miko
