// Change text dynamically
function changeText() {
    const title = document.getElementById('page-title');
    title.textContent = "You've Just Changed the Title!";
  }
  
  // Change styles via JavaScript
  function changeStyle() {
    const paragraph = document.getElementById('intro-text');
    paragraph.classList.toggle('highlight');
  }
  
  // Add a new element
  function addElement() {
    const area = document.getElementById('dynamic-area');
    if (!document.querySelector('.new-box')) {
      const div = document.createElement('div');
      div.className = 'new-box';
      div.textContent = "🎉 A new element was added!";
      area.appendChild(div);
    }
  }
  
  // Remove the added element
  function removeElement() {
    const box = document.querySelector('.new-box');
    if (box) {
      box.remove();
    }
  }
  