document.getElementById('convertBtn').addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Inject the conversion script into the page
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        window.print();
      }
    });
  } catch (error) {
    console.error('Error converting to PDF:', error);
    alert('Error converting to PDF. Please try again.');
  }
});
