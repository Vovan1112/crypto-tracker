import { useState, useEffect } from "react";
import { auth } from "@/app/firebase";
import { SectionWithPopUpProps } from "@/interfaces/currency.interface";
import FormattedNumber, { formatNumberToTwoDecimals } from "@/services/formatter.service";
import { getFirestore } from "firebase/firestore";
import Loading from "@/app/loading";
import { addCurrencyToFavorites, fetchFavoriteCurrencies } from "@/services/currency.service";

const SectionWithPopUp: React.FC<SectionWithPopUpProps> = ({ item, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }
      try {
        const favoriteCurrencies = await fetchFavoriteCurrencies(user.uid);
        setIsFavorite(favoriteCurrencies.includes(item.id));
      } catch (error) {
        console.error("Ошибка при проверке избранного:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    checkFavoriteStatus();
  }, [user, item.id]);

  const handleAddToFavorite = async () => {
    if (!user) {
      console.error("No authenticated user found");
      return;
    }
  
    setIsLoading(true);
    
    try {
      const isAddedFavoriteCurrency = await addCurrencyToFavorites(user.uid, item.id);
      if (isAddedFavoriteCurrency) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error handling add to favorite:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
        {isLoading &&  <Loading />}
          <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
          <img src={item.image} alt={`${item.name} Icon`} className="w-16 h-16 mx-auto mb-4" />
          <p><strong>Price:</strong> <FormattedNumber number={item.current_price} /></p>
          <p><strong>Market Cap:</strong> <FormattedNumber number={item.market_cap} /></p>
          <p><strong>24h Change:</strong> {formatNumberToTwoDecimals(item.price_change_24h)}</p>
          
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Close
          </button>
          
          {user && !isFavorite && (
            <button
              onClick={handleAddToFavorite}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2"
            >
              Add to Favorite
            </button>
          )}
        </div>
    </div>
  );
};

export default SectionWithPopUp;
