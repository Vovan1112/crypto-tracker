const API_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-LvBq1pjSTY6AEmUjQSfVURov';


export const getAllCurrencies = {
    async getAll(){
        const data = await fetch(`${API_URL}/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`,
        {
            cache: 'no-cache'
        });
        return data.json()
    }
}



