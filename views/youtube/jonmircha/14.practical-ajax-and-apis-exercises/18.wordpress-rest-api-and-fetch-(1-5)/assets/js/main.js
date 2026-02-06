fetch("https://malvestida.com/wp-json").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: {name: "MALVESTIDA", description: "", url: "https://malvestida.com", home: "https://malvestida.com", gmt_offset: -5, ...}
});