import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCTable from '../components/cmc-table/cmcTable'
import SwapCryptoModal from '../components/swapCryptoModal'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>

        <Header />

        <SwapCryptoModal />

        <div className='mt-10' />

        <Trending />

        <div className='mt-20' />

        <CMCTable />

    </div>
  )
}

export default Home
