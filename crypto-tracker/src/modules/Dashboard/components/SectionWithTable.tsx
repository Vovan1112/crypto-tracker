'use client'
import React, { useEffect, useState } from 'react';
import FormattedNumber, {formatNumberToTwoDecimals} from '@/services/formatter.service';
import { ICurrency } from "@/interfaces/currency.interface";
import { getAllCurrencies } from "@/services/currency.service";
import { doc, updateDoc, getFirestore, getDoc } from 'firebase/firestore';
import { auth } from "@/app/firebase";


export default function SectionWithTable() {

  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const firestore = getFirestore();

  const handleRowClick = async (currencyId: string) => {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user found');
      return;
    }

    const userDocRef = doc(firestore, 'users', user.uid);

    try {
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();

        const favoriteCurrencies = userData?.favoriteCurrencies || [];

        if (!favoriteCurrencies.includes(currencyId)) {
          favoriteCurrencies.push(currencyId);
          await updateDoc(userDocRef, {
            favoriteCurrencies: favoriteCurrencies,
          });

          console.log(`Currency with ID ${currencyId} added to favorites`);
        } else {
          console.log(`Currency with ID ${currencyId} is already in favorites`);
        }
      } else {
        console.error('Document does not exist!');
      }
    } catch (error) {
      console.error('Error updating favorite currencies:', error);
    }
  };




  useEffect(() => {
    async function fetchData() {
      try {
        const currencyData = await getAllCurrencies.getAll();
        setCurrencies(currencyData);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    }

    fetchData();
  }, []);

        return (
            <div className="flex flex-col overflow-auto">
            <div className="inline-block min-w-full mx-auto">
              <div>
                <table className="min-w-full text-center text-sm font-light">
                  <thead
                    className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className="px-6 py-4">Position</th>
                      <th scope="col" className="px-6 py-4">Currency</th>
                      <th scope="col" className="px-6 py-4">Price</th>
                      <th scope="col" className="px-6 py-4">24H Change</th>
                      <th scope="col" className="px-6 py-4">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                   {currencies.map((item: ICurrency) => (
                    <tr key={item.name} onClick={() => handleRowClick(item.id)} className="border-b dark:border-neutral-500 font-medium">
                    <td className='whitespace-nowrap px-6 py-4 font-bold'>{item.market_cap_rank}</td>
                  <td className="whitespace-nowrap mt-4">
                    <div className='flex items-center justify-center'>
                    <img src={item.image} className='pr-2 w-10' alt="Bitcoin Icon"  />
                    <p className='text-xl text-gray-900 hover:text-blue-500 transition-colors cursor-default'>{item.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4"><FormattedNumber number={item.current_price}/></td>
                  <td className="whitespace-nowrap  px-6 py-4">{formatNumberToTwoDecimals(item.price_change_24h)}</td>
                  <td className="whitespace-nowrap  px-6 py-4"><FormattedNumber number={item.market_cap}/></td>                </tr>
                   ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          ) 
}