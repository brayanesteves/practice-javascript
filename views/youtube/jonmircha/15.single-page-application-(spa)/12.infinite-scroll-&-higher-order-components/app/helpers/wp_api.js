// https://developer.wordpress.org/rest-api/

const NAME                 = "malvestida";
const DOMAIN               = `https://${NAME}.com`;
const SITE                 = `${DOMAIN}/wp-json`;
const API_WP               = `${SITE}/wp/v2`;
const PER_PAGE             = 9;
const POSTS                = `${API_WP}/posts`;
const POSTS_EMBED          = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const POSTS_EMBED_PER_PAGE = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const SEARCH               = `${API_WP}/search?_embed&search=`;
const SEARCH_PER_PAGE      = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POSTS_EMBED,
    POSTS_EMBED_PER_PAGE,
    SEARCH,
    SEARCH_PER_PAGE,
    page,
};