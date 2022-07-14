Waline.init({
      el: '#waline',
      serverURL: 'https://minefile-zyfxz.vercel.app',
      
      emoji: [
      'https://unpkg.com/@waline/emojis@1.0.1/bilibili',
      ],
        
      string['nick'],

      imageUploader: function (file) {
          let formData = new FormData();
          let headers = new Headers();

          formData.append('file', file);
          headers.append('Authorization', '11bab3a0fddbc07c302a1a6cdd595e32');
          headers.append('Accept', 'application/json');

          return fetch('https://imgtp.com', {
            method: 'POST',
            headers: headers,
            body: formData,
          })
            .then((resp) => resp.json())
            .then((resp) => resp.data.links.url);
        },
      });
