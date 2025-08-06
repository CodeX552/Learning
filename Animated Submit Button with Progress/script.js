let btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    btn.setAttribute('class', 'submit process');
    btn.innerHTML = 'Processing';
    setTimeout(() => {
        btn.setAttribute('class', 'submit submitted');
        btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Submitted
     `;
    }, 5000);
});