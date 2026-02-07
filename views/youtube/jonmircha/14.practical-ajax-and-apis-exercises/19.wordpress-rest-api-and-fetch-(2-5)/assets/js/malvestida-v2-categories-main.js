fetch("https://malvestida.com/wp-json/wp/v2/categories").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: (10) [{...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}, {...}]
});