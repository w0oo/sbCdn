Waline.init({
      el: '#waline',
      serverURL: 'https://minefile-zyfxz.vercel.app',
      
      emoji: [
      'https://unpkg.com/@waline/emojis@1.0.1/bilibili',
      ],

      login: 'force',
     
      imageUploader: function (file) {
          let formData = new FormData();
          let headers = new Headers();

          formData.append('file', file);
          headers.append('Authorization', '');
          headers.append('Accept', 'application/json');

          return fetch('https://img.rickroll.cc/api/v1/upload', {
            method: 'POST',
            headers: headers,
            body: formData,
          })
            .then((resp) => resp.json())
            .then((resp) => resp.data.links);
        },
      });
