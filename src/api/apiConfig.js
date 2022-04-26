const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c17939783e24fd802dec74eb921f108f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;