const waline = Waline.init({
        el: '#waline',
        serverURL: 'https://minefile-zyfxz.vercel.app',
        lang: 'zh-CN',
        login: 'force',
        emoji: ['https://unpkg.com/@waline/emojis@1.0.1/bilibili',],
        imageUploader: function (file) {
          let formData = new FormData();
          let headers = new Headers();

          formData.append('file', file);
          headers.append('Authorization', '188|JhcKLTntWgVIo4s7HlElnhvNS0OpEqFdjS4uRmQk');
          headers.append('Accept', 'application/json');

          return fetch('https://7bu.top/api/v1/upload', {
            method: 'POST',
            headers: headers,
            body: formData,
          })
            .then((resp) => resp.json())
            .then((resp) => resp.data.links.url);
        },
      });
