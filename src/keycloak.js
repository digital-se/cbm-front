import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'https://kc.piratasdoraio.com/auth',
    realm: 'Testes',
    clientId: 'front-react'
}
{/*
    const keycloakConfig = 
    {
    "realm": "master",
    "auth-server-url": "https://sandbox-safepro.cbm.se.gov.br/auth/",
    "ssl-required": "external",
    "resource": "digital-se",
    "public-client": true,
    "confidential-port": 0
    }
 */}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
