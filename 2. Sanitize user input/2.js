let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return e.replace(reg, (match)=>(map[match]));
})

// you can also use npm install --save sanitize-html