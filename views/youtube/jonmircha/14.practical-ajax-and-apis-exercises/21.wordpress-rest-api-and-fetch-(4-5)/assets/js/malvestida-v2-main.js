fetch("https://malvestida.com/wp-json/wp/v2").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: {namespace: "wp/v2", routes: {...}, _links: {...}}
});