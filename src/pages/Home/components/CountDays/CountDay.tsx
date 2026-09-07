import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import { TextGradient } from './TextGradient/TextGradient'

// Đặt mốc thời gian cố định bên ngoài component để không bị re-instantiate khi re-render
const TARGET_DATE = new Date('2027-01-18T00:00:00').getTime()
const MS_PER_DAY = 1000 * 60 * 60 * 24

export const CountDay = () => {
  // useMemo giúp ghi nhớ kết quả tính toán
  const daysLeft = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Quy về đầu ngày để đếm chính xác số ngày tròn
    const diffTime = TARGET_DATE - today.getTime()
    return Math.max(0, Math.ceil(diffTime / MS_PER_DAY))
  }, [])

  return (
    <Marquee
      speed={120}
      className="flex gap-32"
    >
      <TextGradient text={`⚡Anh Nhị Đại Ka còn ${daysLeft} ngày⚡`} />
      <div className="mx-40"></div>
      <TextGradient text="💪 Cố lên các em đang chờ 💪" />
    </Marquee>
  )
}