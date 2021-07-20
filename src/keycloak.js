import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'https://kc.piratasdoraio.com/auth',
    realm: 'Testes',
    clientId: 'front-react'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
