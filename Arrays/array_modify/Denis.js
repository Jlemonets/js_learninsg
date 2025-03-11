let styles = ["Jazz","Blues"];

console.log("original array:", styles);

function modify_the_style(styles) {
    let length = styles.length;
    let bitshift = length >> 1;
    let mid = bitshift + (length & 1);
    styles.push("Rock-n-Roll");
    console.log("added Rock-n-Roll:", styles);
    styles[mid] = "Classics";
    console.log("replaced with Classics:", styles);
    styles.shift();
    console.log("removed first element:", styles);
    styles.unshift("Rap", "Reggae");
    console.log("added Rap and Reggae:", styles);
};

modify_the_style(styles);