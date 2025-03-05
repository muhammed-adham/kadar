const updateBootstrapClasses = (dir) => {
    const elements = document.querySelectorAll('[class*="m-"], [class*="p-"]');
    
    elements.forEach(el => {
      el.classList.forEach(cls => {
        if (dir === 'rtl') {
          if (cls.startsWith('ms-')) {
            el.classList.replace(cls, cls.replace('ms-', 'me-'));
          } else if (cls.startsWith('me-')) {
            el.classList.replace(cls, cls.replace('me-', 'ms-'));
          }
          if (cls.startsWith('ps-')) {
            el.classList.replace(cls, cls.replace('ps-', 'pe-'));
          } else if (cls.startsWith('pe-')) {
            el.classList.replace(cls, cls.replace('pe-', 'ps-'));
          }
        } else {
          if (cls.startsWith('me-')) {
            el.classList.replace(cls, cls.replace('me-', 'ms-'));
          } else if (cls.startsWith('ms-')) {
            el.classList.replace(cls, cls.replace('ms-', 'me-'));
          }
          if (cls.startsWith('pe-')) {
            el.classList.replace(cls, cls.replace('pe-', 'ps-'));
          } else if (cls.startsWith('ps-')) {
            el.classList.replace(cls, cls.replace('ps-', 'pe-'));
          }
        }
      });
    });
  };