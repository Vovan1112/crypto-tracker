const API_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-LvBq1pjSTY6AEmUjQSfVURov';
import { doc, getDoc, updateDoc, getFirestore } from "firebase/firestore";



export const getAllCurrencies = {
    async getAll(){
        const data = await fetch(`${API_URL}/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`,
        {
            cache: 'no-cache'
        });
        return data.json()
    }
}

export const getByIdCurrency = {
    async getById(id: string){
        const data = await fetch(`${API_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`,
        {
            cache: 'no-cache'
        });
        return data.json()
    }
}


export const fetchFavoriteCurrencies = async (userId: string) => {
  const userDocRef = doc(getFirestore(), "users", userId);
  const userDocSnapshot = await getDoc(userDocRef);
  return userDocSnapshot.exists() ? userDocSnapshot.data()?.favoriteCurrencies || [] : [];
}


export const addCurrencyToFavorites = async (userId: string, currencyId: string): Promise<boolean> => {
    const firestore = getFirestore();
    const userDocRef = doc(firestore, "users", userId);
    
    try {
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const favoriteCurrencies = userData?.favoriteCurrencies || [];
  
        if (!favoriteCurrencies.includes(currencyId)) {
          favoriteCurrencies.push(currencyId);
          await updateDoc(userDocRef, { favoriteCurrencies });
          console.log(`Currency with ID ${currencyId} added to favorites`);
          return true;
        } else {
          console.warn(`Currency with ID ${currencyId} is already in favorites`);
        }
      } else {
        console.error("User document does not exist!");
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  
    return false;
  };


