const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '608baa020820bf37e26550949ee26393', //No copy keyapi please (No copiar apikey por favor, utilizar el suyo generando en TMDB)
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;