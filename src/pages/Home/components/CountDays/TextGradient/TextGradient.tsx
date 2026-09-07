export const TextGradient = ({ text }: { text: string }) => {
  return (
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-ct-highlight-color to-blue-500 text-3xl font-bold mb-8">
      {text}
    </div>
  )
}