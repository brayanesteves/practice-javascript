fetch("https://wordpress.org/wp-json").then((res) => res.ok ? res.json() : Promise.reject(res)).then((json) => {
    // console.log(json); // For Example. Output: {name: "WordPress.org", description: "Blog Tool and Publishing Platform", url: "https://wordpress.org", home: "https://wordpress.org", gmt_offset: 0, ...}
});