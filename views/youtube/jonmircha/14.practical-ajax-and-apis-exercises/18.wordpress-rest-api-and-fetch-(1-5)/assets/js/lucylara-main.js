fetch("https://lucylara.com/wp-json").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: {name: "Lucy Lara", description: "Conoce las reglas para romperlas", url: "https://lucylara.com", home: "https://lucylara.com", gmt_offset: -5, ...}
});