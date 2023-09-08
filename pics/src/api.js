import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID pnKQ5Oyd5mXgzWsxr0Zw19Z00FUzidiAJsgXqbx3FVc'
        },
        params:{
            query: term
        }
    })

    return response.data.results;
};

export default searchImages;