type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function CardSection({ children, className = "" }: Props) {
  return (
    <section className="py-24 bg-neutral-50">
      <div
        className={`mx-auto max-w-7xl rounded-3xl bg-white px-8 py-16 shadow-sm ${className}`}
      >
        {children}
      </div>
    </section>
  )
}