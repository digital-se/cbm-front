import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

const ProtectedPage = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    initialized ?
      (<div>
        <h1>Pagina Protegida</h1>
        {!!keycloak.authenticated && <pre className="json-wrapper">{JSON.stringify(keycloak, undefined, 2)}</pre>}
        {keycloak && !keycloak.authenticated && <p>Precisa Logar</p>}
      </div>)
      : <div>KeyCloak inicializando !!!!!!!!!</div>
  )
}

export default ProtectedPage