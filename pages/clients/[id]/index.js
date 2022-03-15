import { useRouter } from 'next/router'

function ClientProjectsPage() {
  const router = useRouter()

  console.log(router.query)

  const loadProjectHandler = () => {
    // router.push('/clients/tai/projecta')
    router.push({
      pathname: '/clients/[id]/[clientproject]',
      query: { id: 'tai', clientproject: 'projecta' },
    })
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
export default ClientProjectsPage
