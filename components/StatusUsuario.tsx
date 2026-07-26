type Props = {
  isOnline: boolean;
}

export default function StatusUsuario({ isOnline }: Props) {
  return (
    <span className={isOnline ? "text-green-600 font-bold" : "text-gray-500"}>
      {isOnline ? "🟢 Online" : "⚪ Offline"}
    </span>
  )
}