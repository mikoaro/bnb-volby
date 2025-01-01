import { RefreshCcw, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Transaction {
  id: string
  sender: string
  amount: string
  date: string
  token: string
  description: string
}

export function TransactionList() {
  const transactions: Transaction[] = [
    {
      id: '1',
      sender: 'Faustino',
      amount: '86791665595956141.75232',
      date: 'Jan 06 2020, 17:01 (4 years ago)',
      token: 'sand (1479564466979354968064$)',
      description: 'Veritatis aperiam nesciunt vitae iste consequatur alias omnis blanditiis ducimus. Accusamus totam ut molestiae hic aspern...'
    },
    {
      id: '2',
      sender: 'Faustino',
      amount: '1393472822615870.91328',
      date: 'Jan 25 2020, 00:01 (4 years ago)',
      token: 'sand (31900862776674332.18048$)',
      description: 'Iste fugit blanditiis enim saepe perferendis minima velit vero mollitia. Delectus doloremque quisquam earum iste doloremq...'
    }
  ]

  return (
    <div className="rounded-2xl p-6 border mt-10 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Latest tips:</h2>
      <div className="space-y-6">
        {transactions.map((tx) => (
          <div key={tx.id} className="border p-5 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full" />
                <span className="text-purple-500">@{tx.sender}</span>
                <span>sent {tx.amount}</span>
                <span className="text-green-500">$sand</span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <RefreshCcw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Clock className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{tx.description}</p>
            <div className="text-purple-500">
              <h3 className="font-bold">Tip details:</h3>
              <p>Date: {tx.date}</p>
              <p>Token: {tx.token}</p>
            </div>
            <Button variant="link" className="text-purple-500 p-0 h-auto mt-2">
              display details
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

