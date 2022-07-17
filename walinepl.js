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
      // formData.append('strategy_id', 0); // 可选策略ID
      return fetch('https://pic.xywm.ltd/api/v1/upload', {
        headers: {
          'Authorization': ''
        },
        method: 'POST',
      body: formData
      }).then(resp => resp.json()).then(resp => resp.data.links.url);
    },
    copyright: false,
  });
