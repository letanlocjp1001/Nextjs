import Link from 'next/link'

function ClientsPage() {
  const clients = [
    {
      id: 'loc',
      name: 'Le Tan Loc',
    },
    {
      id: 'dung',
      name: 'Tran Ngoc Dang Dung',
    },
    {
      id: 'tai',
      name: 'Le Tan Tai',
    },
  ]

  return (
    <div>
      <h1>The Clients Pages</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
