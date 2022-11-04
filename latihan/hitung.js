function hitung() {
    let r = Number(document.getElementById("r").value);

    let luas = 4 * Math.PI * Math.pow(r,2);
    let volume = (4/3) * 3.14 * Math.pow(r,3);

    document.getElementById("luas").innerHTML = luas;
    document.getElementById("volume").innerHTML = volume;
}