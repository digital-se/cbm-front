import Keycloak from 'keycloak-js'
const keycloakConfig = {

    "realm": "master",
    "url": "https://sandbox-safepro.cbm.se.gov.br/auth/",
    "ssl-required": "external",
    "resource": "digital-se",
    "public-client": true,
    "confidential-port": 0,
    "clientId": "digital-se",

}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
