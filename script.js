console.log("✅ script.js loaded"); // debug check

function openModal(title, desc, stack, features) {
  console.log("📌 Opening modal for:", title); // debug check

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;

  // Fill Tech Stack
  let stackList = document.getElementById('modalStack');
  stackList.innerHTML = "";
  stack.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    stackList.appendChild(li);
  });

  // Fill Features
  let featureList = document.getElementById('modalFeatures');
  featureList.innerHTML = "";
  features.forEach(f => {
    let li = document.createElement("li");
    li.innerText = f;
    featureList.appendChild(li);
  });

  // Show Modal
  document.getElementById('projectModal').classList.add("show");
}

function closeModal() {
  document.getElementById('projectModal').classList.remove("show");
}

window.onclick = function(event) {
  if (event.target === document.getElementById('projectModal')) {
    closeModal();
  }
}