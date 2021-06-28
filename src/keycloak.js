import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'https://kc.piratasdoraio.com/auth',
    realm: 'Testes',
    clientId: 'react-app'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
