'use client'

import { store } from "@/store/store"
import { SectionWithBackground } from "./components/SectionWithBackground"
import SectionWithTable from "./components/SectionWithTable"
import { Provider } from 'react-redux'

export const Dashboard = () => {
    return (
        <>
        <Provider store={store}>
        <SectionWithBackground />
        <SectionWithTable />
        </Provider>
        </>
    )
}