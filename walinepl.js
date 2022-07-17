const waline = Waline.init({
    el: '#waline',
    serverURL: 'https://minefile-zyfxz.vercel.app',
    emoji: ['https://unpkg.com/@waline/emojis@1.0.1/bilibili'],
    dark: 'auto',
    lang: 'zh-CN',
    login: 'force',
    imageUploader : function(file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('strategy_id', 5);
      return fetch('https://imgs.top/api/v1/upload', {
        headers: {
          'Authorization': 'Bearer 312|nz2LM3xt5fMyw6EwGITRGIm655ZPRZSQrVlGIB8e'
        },
        method: 'POST',
      body: formData
      }).then(resp => resp.json()).then(resp => resp.data.links.url);
    },
    copyright: false,
  });
