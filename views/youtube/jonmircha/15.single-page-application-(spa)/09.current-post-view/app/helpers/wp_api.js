// https://developer.wordpress.org/rest-api/

const NAME                 = "malvestida";
const DOMAIN               = `https://${NAME}.com`;
const SITE                 = `${DOMAIN}/wp-json`;
const API_WP               = `${SITE}/wp/v2`;
const POSTS                = `${API_WP}/posts`;
const POSTS_EMBED          = `${API_WP}/posts?_embed`;
const POSTS_EMBED_PER_PAGE = `${POSTS}?_embed&per_page=5&page=10`;
const SEARCH               = `${API_WP}/search?_embed&search=`;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POSTS_EMBED,
    POSTS_EMBED_PER_PAGE,
    SEARCH
};