'use client'
import React, { useEffect, useState } from 'react';
import FormattedNumber, {formatNumberToTwoDecimals} from '@/services/formatter.service';
import { ICurrency } from "@/interfaces/currency.interface";
import { getAllCurrencies } from "@/services/currency.service";
import { doc, updateDoc, getFirestore, getDoc } from 'firebase/firestore';
import { auth } from "@/app/firebase";
import SectionWithOnceCurrency from './SectionWithOnceCurrency';


export default function SectionWithTable() {

  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  // const firestore = getFirestore();

  // const handleRowClick = async (currencyId: string) => {
  //   const user = auth.currentUser;
  //   if (!user) {
  //     console.error('No authenticated user found');
  //     return;
  //   }

  //   const userDocRef = doc(firestore, 'users', user.uid);

  //   try {
  //     const userDocSnapshot = await getDoc(userDocRef);

  //     if (userDocSnapshot.exists()) {
  //       const userData = userDocSnapshot.data();

  //       const favoriteCurrencies = userData?.favoriteCurrencies || [];

  //       if (!favoriteCurrencies.includes(currencyId)) {
  //         favoriteCurrencies.push(currencyId);
  //         await updateDoc(userDocRef, {
  //           favoriteCurrencies: favoriteCurrencies,
  //         });

  //         console.log(`Currency with ID ${currencyId} added to favorites`);
  //       } else {
  //         console.log(`Currency with ID ${currencyId} is already in favorites`);
  //       }
  //     } else {
  //       console.error('Document does not exist!');
  //     }
  //   } catch (error) {
  //     console.error('Error updating favorite currencies:', error);
  //   }
  // };




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
                    <SectionWithOnceCurrency item={item} key={item.id}/>
                   ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          ) 
}