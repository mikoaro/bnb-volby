import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string | number
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-white/5 border">
      <CardContent className="p-6">
        <div className="text-4xl font-bold mb-2">
          {value}
        </div>
        <CardTitle className="text-gray-400 font-normal">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  )
}

