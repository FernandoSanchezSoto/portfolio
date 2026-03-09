interface NameProps {
  firstName: string;
  lastName: string;
}

export function Name({ firstName, lastName }: NameProps) {
  return (
    <div>
      <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-white cursor-default leading-none">
        {firstName}
      </h1>
      <h1
        className="text-6xl sm:text-7xl md:text-9xl font-bold cursor-default leading-none"
        style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,240,248,0.3)' }}
      >
        {lastName}
      </h1>
    </div>
  )
}
