
type Props = {
  title: string;
}
export const MenuItem = ({ title }: Props) => {
  return (
    <div className="hover:[text-shadow:_0_0_4px_#ffd3338f] hover:text-ct-highlight-color">
      {title}
    </div>
  )
}
