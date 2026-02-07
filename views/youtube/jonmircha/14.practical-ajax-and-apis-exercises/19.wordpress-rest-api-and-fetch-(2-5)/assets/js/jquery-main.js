fetch("https://jquery.com/wp-json").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: 
});