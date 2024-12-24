
  function toggleContent(contentId) {
    const contentSections = document.querySelectorAll('.container[id$="Content"]');
    contentSections.forEach(section => {
      if (section.id === contentId) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  }

