function input() {
    let a = document.getElementById("inp").value;
    let d = a.toUpperCase();
    let p1 = document.getElementById("p1");
    p1.innerText = (`UPPERCASE: ${d}`);

    let b = document.getElementById("inp").value;
    let c = b.toLowerCase();
    let p2 = document.getElementById("p2");
    p2.innerText = (`LOWERCASE: ${c}`);
}