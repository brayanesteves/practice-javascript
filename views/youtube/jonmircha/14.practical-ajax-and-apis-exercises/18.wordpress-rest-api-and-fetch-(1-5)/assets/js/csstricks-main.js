fetch("https://css-tricks.com/wp-json").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: {name: "CSS-Tricks", description: "Tips, Tricks, and Techniques on using Cascading Style Sheets.", url: "https://css-tricks.com", home: "https://css-tricks.com", gmt_offset: "-7", ...}
});