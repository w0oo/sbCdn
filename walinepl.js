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
          headers.append('Authorization', '1bJbwlqBfnggmOMEZqXT5XusaIwqiZjCDs7r1Ob5');
          headers.append('Accept', 'application/json');

          return fetch('https://pic.xywm.ltd/api/v1', {
            method: 'POST',
            headers: headers,
            body: formData,
          })
            .then((resp) => resp.json())
            .then((resp) => resp.data.links.url);
        },
      });
