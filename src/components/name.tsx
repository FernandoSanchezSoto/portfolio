interface NameProps {
  firstName: string;
  lastName: string;
}

export function Name({ firstName, lastName }: NameProps) {
  return (
    <div>
      <h1 className="text-8xl md:text-9xl font-bold text-white cursor-default leading-none">
        {firstName}
      </h1>
      <h1 className="text-8xl md:text-9xl font-bold text-transparent cursor-default leading-none"
        style={{ WebkitTextStroke: '1px rgba(240,240,248,0.3)' }}>
        {lastName}
      </h1>
    </div>
  )
}
