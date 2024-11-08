import { ICurrency } from "@/interfaces/currency.interface";
import FormattedNumber, { formatNumberToTwoDecimals } from "@/services/formatter.service";
import SectionWithPopUp from "./SectionWithPopUp";
import { useState } from "react";

export default function SectionWithOnceCurrency({ item }: ICurrency) {

    const [openModal, setOpenModal] = useState(false);

    const handleRowClick = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false);
      };

    return (
        <>
          <tr key={item.id} onClick={handleRowClick} className="border-b dark:border-neutral-500 font-medium cursor-pointer">
            <td className="whitespace-nowrap px-6 py-4 font-bold">{item.market_cap_rank}</td>
            <td className="whitespace-nowrap mt-4">
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  className="pr-2 w-10"
                  alt={`${item.name} Icon`}
                />
                <p className="text-xl text-gray-900 hover:text-blue-500 transition-colors cursor-pointer">{item.name}</p>
              </div>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <FormattedNumber number={item.current_price} />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {formatNumberToTwoDecimals(item.price_change_24h)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <FormattedNumber number={item.market_cap} />
            </td>
          </tr>
    
          {openModal && (
            <SectionWithPopUp item={item} onClose={handleCloseModal} />
          )}
        </>
      );
}
