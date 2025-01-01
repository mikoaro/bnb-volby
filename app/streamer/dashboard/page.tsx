'use state'
import { StatsCard } from '../../components/stats-card'
import { TransactionList } from '../../components/transaction-list'
import Header from '@/app/components/Header'

export default function Dashboard() {
  return (
<div className="min-h-screen">
      {/* <Header /> */}
    <main className="container mx-auto p-6  py-20">
        <section className='flex justify-between gap-10 rounded-2xl'>
            <div className="w-1/2 border p-10 rounded-2xl shadow-md">
                
                <div className="flex gap-4 mb-6 bg-green mt-14">
                    <div className="w-12 h-12 bg-orange-200 rounded-lg" />
                        <div>
                            <h1 className="text-xl">
                                Hey <span className="text-purple-500">anteqkois</span>!
                            </h1>
                            <p className="text-gray-400">Connected wallet: 0x69E9 ... 3271</p>
                        </div>
                    </div>
                </div>
            
                <div className='flex gap-5 w-1/2'>
                        <div className="flex flex-col gap-5 w-full text-center">
                            <StatsCard 
                                title="All tips amount" 
                                value="13 092" 
                            />
                            <StatsCard 
                                title="Showed messages" 
                                value="13 078" 
                            />
                        </div>
                        <div className="flex flex-col gap-5 w-full text-center">
                            <StatsCard 
                                title="Tips today" 
                                value="92" 
                            />
                            <StatsCard 
                                title="Handled tokens by you" 
                                value="12" 
                            />
                        </div>
                </div>
        </section> 
        <TransactionList />
    </main>
</div>
  )
}

