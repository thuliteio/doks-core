// Close mobile TOC details when clicking on a link
document.addEventListener('click', function (e) {
  // Check if the clicked element is a link within the mobile TOC
  const tocMobile = e.target.closest('.toc-mobile');
  if (tocMobile && e.target.tagName === 'A') {
    // Find the details element within the mobile TOC
    const details = tocMobile.querySelector('details');
    if (details && details.open) {
      // Close the details element
      details.open = false;
    }
  }
});
