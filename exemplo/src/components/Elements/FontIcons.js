import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

const FaCard = ({icon}) => {
    const iconName = icon.split('fa-')[1].substring(0,20)
    return (
        <Col xl={3} lg={4}>
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <em className={"fa-2x mr-2 "+ icon}></em>
                    <span>{iconName}</span>
                </div>
            </div>
        </Col>
    )
}

class FontIcons extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        <span>Icons</span>
                        <small>Font Awesome and Simple Line Icons gives you scalable vector icons that can instantly be customized</small>
                    </div>
                </div>
                <h4 className="page-header mt-0">Font Awesome 5</h4>
                <Row>
                    <FaCard icon="fab fa-500px"/>
                    <FaCard icon="fab fa-accessible-icon"/>
                    <FaCard icon="fab fa-accusoft"/>
                    <FaCard icon="fas fa-address-book"/>
                    <FaCard icon="far fa-address-book"/>
                    <FaCard icon="fas fa-address-card"/>
                    <FaCard icon="far fa-address-card"/>
                    <FaCard icon="fas fa-adjust"/>
                    <FaCard icon="fab fa-adn"/>
                    <FaCard icon="fab fa-adversal"/>
                    <FaCard icon="fab fa-affiliatetheme"/>
                    <FaCard icon="fab fa-algolia"/>
                    <FaCard icon="fas fa-align-center"/>
                    <FaCard icon="fas fa-align-justify"/>
                    <FaCard icon="fas fa-align-left"/>
                    <FaCard icon="fas fa-align-right"/>
                    <FaCard icon="fas fa-allergies"/>
                    <FaCard icon="fab fa-amazon"/>
                    <FaCard icon="fab fa-amazon-pay"/>
                    <FaCard icon="fas fa-ambulance"/>
                    <FaCard icon="fas fa-american-sign-language-interpreting"/>
                    <FaCard icon="fab fa-amilia"/>
                    <FaCard icon="fas fa-anchor"/>
                    <FaCard icon="fab fa-android"/>
                    <FaCard icon="fab fa-angellist"/>
                    <FaCard icon="fas fa-angle-double-down"/>
                    <FaCard icon="fas fa-angle-double-left"/>
                    <FaCard icon="fas fa-angle-double-right"/>
                    <FaCard icon="fas fa-angle-double-up"/>
                    <FaCard icon="fas fa-angle-down"/>
                    <FaCard icon="fas fa-angle-left"/>
                    <FaCard icon="fas fa-angle-right"/>
                    <FaCard icon="fas fa-angle-up"/>
                    <FaCard icon="fab fa-angrycreative"/>
                    <FaCard icon="fab fa-angular"/>
                    <FaCard icon="fab fa-app-store"/>
                    <FaCard icon="fab fa-app-store-ios"/>
                    <FaCard icon="fab fa-apper"/>
                    <FaCard icon="fab fa-apple"/>
                    <FaCard icon="fab fa-apple-pay"/>
                    <FaCard icon="fas fa-archive"/>
                    <FaCard icon="fas fa-arrow-alt-circle-down"/>
                    <FaCard icon="far fa-arrow-alt-circle-down"/>
                    <FaCard icon="fas fa-arrow-alt-circle-left"/>
                    <FaCard icon="far fa-arrow-alt-circle-left"/>
                    <FaCard icon="fas fa-arrow-alt-circle-right"/>
                    <FaCard icon="far fa-arrow-alt-circle-right"/>
                    <FaCard icon="fas fa-arrow-alt-circle-up"/>
                    <FaCard icon="far fa-arrow-alt-circle-up"/>
                    <FaCard icon="fas fa-arrow-circle-down"/>
                    <FaCard icon="fas fa-arrow-circle-left"/>
                    <FaCard icon="fas fa-arrow-circle-right"/>
                    <FaCard icon="fas fa-arrow-circle-up"/>
                    <FaCard icon="fas fa-arrow-down"/>
                    <FaCard icon="fas fa-arrow-left"/>
                    <FaCard icon="fas fa-arrow-right"/>
                    <FaCard icon="fas fa-arrow-up"/>
                    <FaCard icon="fas fa-arrows-alt"/>
                    <FaCard icon="fas fa-arrows-alt-h"/>
                    <FaCard icon="fas fa-arrows-alt-v"/>
                    <FaCard icon="fas fa-assistive-listening-systems"/>
                    <FaCard icon="fas fa-asterisk"/>
                    <FaCard icon="fab fa-asymmetrik"/>
                    <FaCard icon="fas fa-at"/>
                    <FaCard icon="fab fa-audible"/>
                    <FaCard icon="fas fa-audio-description"/>
                    <FaCard icon="fab fa-autoprefixer"/>
                    <FaCard icon="fab fa-avianex"/>
                    <FaCard icon="fab fa-aviato"/>
                    <FaCard icon="fab fa-aws"/>
                    <FaCard icon="fas fa-backward"/>
                    <FaCard icon="fas fa-balance-scale"/>
                    <FaCard icon="fas fa-ban"/>
                    <FaCard icon="fas fa-band-aid"/>
                    <FaCard icon="fab fa-bandcamp"/>
                    <FaCard icon="fas fa-barcode"/>
                    <FaCard icon="fas fa-bars"/>
                    <FaCard icon="fas fa-baseball-ball"/>
                    <FaCard icon="fas fa-basketball-ball"/>
                    <FaCard icon="fas fa-bath"/>
                    <FaCard icon="fas fa-battery-empty"/>
                    <FaCard icon="fas fa-battery-full"/>
                    <FaCard icon="fas fa-battery-half"/>
                    <FaCard icon="fas fa-battery-quarter"/>
                    <FaCard icon="fas fa-battery-three-quarters"/>
                    <FaCard icon="fas fa-bed"/>
                    <FaCard icon="fas fa-beer"/>
                    <FaCard icon="fab fa-behance"/>
                    <FaCard icon="fab fa-behance-square"/>
                    <FaCard icon="fas fa-bell"/>
                    <FaCard icon="far fa-bell"/>
                    <FaCard icon="fas fa-bell-slash"/>
                    <FaCard icon="far fa-bell-slash"/>
                    <FaCard icon="fas fa-bicycle"/>
                    <FaCard icon="fab fa-bimobject"/>
                    <FaCard icon="fas fa-binoculars"/>
                    <FaCard icon="fas fa-birthday-cake"/>
                    <FaCard icon="fab fa-bitbucket"/>
                    <FaCard icon="fab fa-bitcoin"/>
                    <FaCard icon="fab fa-bity"/>
                    <FaCard icon="fab fa-black-tie"/>
                    <FaCard icon="fab fa-blackberry"/>
                    <FaCard icon="fas fa-blender"/>
                    <FaCard icon="fas fa-blind"/>
                    <FaCard icon="fab fa-blogger"/>
                    <FaCard icon="fab fa-blogger-b"/>
                    <FaCard icon="fab fa-bluetooth"/>
                    <FaCard icon="fab fa-bluetooth-b"/>
                    <FaCard icon="fas fa-bold"/>
                    <FaCard icon="fas fa-bolt"/>
                    <FaCard icon="fas fa-bomb"/>
                    <FaCard icon="fas fa-book"/>
                    <FaCard icon="fas fa-book-open"/>
                    <FaCard icon="fas fa-bookmark"/>
                    <FaCard icon="far fa-bookmark"/>
                    <FaCard icon="fas fa-bowling-ball"/>
                    <FaCard icon="fas fa-box"/>
                    <FaCard icon="fas fa-box-open"/>
                    <FaCard icon="fas fa-boxes"/>
                    <FaCard icon="fas fa-braille"/>
                    <FaCard icon="fas fa-briefcase"/>
                    <FaCard icon="fas fa-briefcase-medical"/>
                    <FaCard icon="fas fa-broadcast-tower"/>
                    <FaCard icon="fas fa-broom"/>
                    <FaCard icon="fab fa-btc"/>
                    <FaCard icon="fas fa-bug"/>
                    <FaCard icon="fas fa-building"/>
                    <FaCard icon="far fa-building"/>
                    <FaCard icon="fas fa-bullhorn"/>
                    <FaCard icon="fas fa-bullseye"/>
                    <FaCard icon="fas fa-burn"/>
                    <FaCard icon="fab fa-buromobelexperte"/>
                    <FaCard icon="fas fa-bus"/>
                    <FaCard icon="fab fa-buysellads"/>
                    <FaCard icon="fas fa-calculator"/>
                    <FaCard icon="fas fa-calendar"/>
                    <FaCard icon="far fa-calendar"/>
                    <FaCard icon="fas fa-calendar-alt"/>
                    <FaCard icon="far fa-calendar-alt"/>
                    <FaCard icon="fas fa-calendar-check"/>
                    <FaCard icon="far fa-calendar-check"/>
                    <FaCard icon="fas fa-calendar-minus"/>
                    <FaCard icon="far fa-calendar-minus"/>
                    <FaCard icon="fas fa-calendar-plus"/>
                    <FaCard icon="far fa-calendar-plus"/>
                    <FaCard icon="fas fa-calendar-times"/>
                    <FaCard icon="far fa-calendar-times"/>
                    <FaCard icon="fas fa-camera"/>
                    <FaCard icon="fas fa-camera-retro"/>
                    <FaCard icon="fas fa-capsules"/>
                    <FaCard icon="fas fa-car"/>
                    <FaCard icon="fas fa-caret-down"/>
                    <FaCard icon="fas fa-caret-left"/>
                    <FaCard icon="fas fa-caret-right"/>
                    <FaCard icon="fas fa-caret-square-down"/>
                    <FaCard icon="far fa-caret-square-down"/>
                    <FaCard icon="fas fa-caret-square-left"/>
                    <FaCard icon="far fa-caret-square-left"/>
                    <FaCard icon="fas fa-caret-square-right"/>
                    <FaCard icon="far fa-caret-square-right"/>
                    <FaCard icon="fas fa-caret-square-up"/>
                    <FaCard icon="far fa-caret-square-up"/>
                    <FaCard icon="fas fa-caret-up"/>
                    <FaCard icon="fas fa-cart-arrow-down"/>
                    <FaCard icon="fas fa-cart-plus"/>
                    <FaCard icon="fab fa-cc-amazon-pay"/>
                    <FaCard icon="fab fa-cc-amex"/>
                    <FaCard icon="fab fa-cc-apple-pay"/>
                    <FaCard icon="fab fa-cc-diners-club"/>
                    <FaCard icon="fab fa-cc-discover"/>
                    <FaCard icon="fab fa-cc-jcb"/>
                    <FaCard icon="fab fa-cc-mastercard"/>
                    <FaCard icon="fab fa-cc-paypal"/>
                    <FaCard icon="fab fa-cc-stripe"/>
                    <FaCard icon="fab fa-cc-visa"/>
                    <FaCard icon="fab fa-centercode"/>
                    <FaCard icon="fas fa-certificate"/>
                    <FaCard icon="fas fa-chalkboard"/>
                    <FaCard icon="fas fa-chalkboard-teacher"/>
                    <FaCard icon="fas fa-chart-area"/>
                    <FaCard icon="fas fa-chart-bar"/>
                    <FaCard icon="far fa-chart-bar"/>
                    <FaCard icon="fas fa-chart-line"/>
                    <FaCard icon="fas fa-chart-pie"/>
                    <FaCard icon="fas fa-check"/>
                    <FaCard icon="fas fa-check-circle"/>
                    <FaCard icon="far fa-check-circle"/>
                    <FaCard icon="fas fa-check-square"/>
                    <FaCard icon="far fa-check-square"/>
                    <FaCard icon="fas fa-chess"/>
                    <FaCard icon="fas fa-chess-bishop"/>
                    <FaCard icon="fas fa-chess-board"/>
                    <FaCard icon="fas fa-chess-king"/>
                    <FaCard icon="fas fa-chess-knight"/>
                    <FaCard icon="fas fa-chess-pawn"/>
                    <FaCard icon="fas fa-chess-queen"/>
                    <FaCard icon="fas fa-chess-rook"/>
                    <FaCard icon="fas fa-chevron-circle-down"/>
                    <FaCard icon="fas fa-chevron-circle-left"/>
                    <FaCard icon="fas fa-chevron-circle-right"/>
                    <FaCard icon="fas fa-chevron-circle-up"/>
                    <FaCard icon="fas fa-chevron-down"/>
                    <FaCard icon="fas fa-chevron-left"/>
                    <FaCard icon="fas fa-chevron-right"/>
                    <FaCard icon="fas fa-chevron-up"/>
                    <FaCard icon="fas fa-child"/>
                    <FaCard icon="fab fa-chrome"/>
                    <FaCard icon="fas fa-church"/>
                    <FaCard icon="fas fa-circle"/>
                    <FaCard icon="far fa-circle"/>
                    <FaCard icon="fas fa-circle-notch"/>
                    <FaCard icon="fas fa-clipboard"/>
                    <FaCard icon="far fa-clipboard"/>
                    <FaCard icon="fas fa-clipboard-check"/>
                    <FaCard icon="fas fa-clipboard-list"/>
                    <FaCard icon="fas fa-clock"/>
                    <FaCard icon="far fa-clock"/>
                    <FaCard icon="fas fa-clone"/>
                    <FaCard icon="far fa-clone"/>
                    <FaCard icon="fas fa-closed-captioning"/>
                    <FaCard icon="far fa-closed-captioning"/>
                    <FaCard icon="fas fa-cloud"/>
                    <FaCard icon="fas fa-cloud-download-alt"/>
                    <FaCard icon="fas fa-cloud-upload-alt"/>
                    <FaCard icon="fab fa-cloudscale"/>
                    <FaCard icon="fab fa-cloudsmith"/>
                    <FaCard icon="fab fa-cloudversify"/>
                    <FaCard icon="fas fa-code"/>
                    <FaCard icon="fas fa-code-branch"/>
                    <FaCard icon="fab fa-codepen"/>
                    <FaCard icon="fab fa-codiepie"/>
                    <FaCard icon="fas fa-coffee"/>
                    <FaCard icon="fas fa-cog"/>
                    <FaCard icon="fas fa-cogs"/>
                    <FaCard icon="fas fa-coins"/>
                    <FaCard icon="fas fa-columns"/>
                    <FaCard icon="fas fa-comment"/>
                    <FaCard icon="far fa-comment"/>
                    <FaCard icon="fas fa-comment-alt"/>
                    <FaCard icon="far fa-comment-alt"/>
                    <FaCard icon="fas fa-comment-dots"/>
                    <FaCard icon="far fa-comment-dots"/>
                    <FaCard icon="fas fa-comment-slash"/>
                    <FaCard icon="fas fa-comments"/>
                    <FaCard icon="far fa-comments"/>
                    <FaCard icon="fas fa-compact-disc"/>
                    <FaCard icon="fas fa-compass"/>
                    <FaCard icon="far fa-compass"/>
                    <FaCard icon="fas fa-compress"/>
                    <FaCard icon="fab fa-connectdevelop"/>
                    <FaCard icon="fab fa-contao"/>
                    <FaCard icon="fas fa-copy"/>
                    <FaCard icon="far fa-copy"/>
                    <FaCard icon="fas fa-copyright"/>
                    <FaCard icon="far fa-copyright"/>
                    <FaCard icon="fas fa-couch"/>
                    <FaCard icon="fab fa-cpanel"/>
                    <FaCard icon="fab fa-creative-commons"/>
                    <FaCard icon="fab fa-creative-commons-by"/>
                    <FaCard icon="fab fa-creative-commons-nc"/>
                    <FaCard icon="fab fa-creative-commons-nc-eu"/>
                    <FaCard icon="fab fa-creative-commons-nc-jp"/>
                    <FaCard icon="fab fa-creative-commons-nd"/>
                    <FaCard icon="fab fa-creative-commons-pd"/>
                    <FaCard icon="fab fa-creative-commons-pd-alt"/>
                    <FaCard icon="fab fa-creative-commons-remix"/>
                    <FaCard icon="fab fa-creative-commons-sa"/>
                    <FaCard icon="fab fa-creative-commons-sampling"/>
                    <FaCard icon="fab fa-creative-commons-sampling-plus"/>
                    <FaCard icon="fab fa-creative-commons-share"/>
                    <FaCard icon="fas fa-credit-card"/>
                    <FaCard icon="far fa-credit-card"/>
                    <FaCard icon="fas fa-crop"/>
                    <FaCard icon="fas fa-crosshairs"/>
                    <FaCard icon="fas fa-crow"/>
                    <FaCard icon="fas fa-crown"/>
                    <FaCard icon="fab fa-css3"/>
                    <FaCard icon="fab fa-css3-alt"/>
                    <FaCard icon="fas fa-cube"/>
                    <FaCard icon="fas fa-cubes"/>
                    <FaCard icon="fas fa-cut"/>
                    <FaCard icon="fab fa-cuttlefish"/>
                    <FaCard icon="fab fa-d-and-d"/>
                    <FaCard icon="fab fa-dashcube"/>
                    <FaCard icon="fas fa-database"/>
                    <FaCard icon="fas fa-deaf"/>
                    <FaCard icon="fab fa-delicious"/>
                    <FaCard icon="fab fa-deploydog"/>
                    <FaCard icon="fab fa-deskpro"/>
                    <FaCard icon="fas fa-desktop"/>
                    <FaCard icon="fab fa-deviantart"/>
                    <FaCard icon="fas fa-diagnoses"/>
                    <FaCard icon="fas fa-dice"/>
                    <FaCard icon="fas fa-dice-five"/>
                    <FaCard icon="fas fa-dice-four"/>
                    <FaCard icon="fas fa-dice-one"/>
                    <FaCard icon="fas fa-dice-six"/>
                    <FaCard icon="fas fa-dice-three"/>
                    <FaCard icon="fas fa-dice-two"/>
                    <FaCard icon="fab fa-digg"/>
                    <FaCard icon="fab fa-digital-ocean"/>
                    <FaCard icon="fab fa-discord"/>
                    <FaCard icon="fab fa-discourse"/>
                    <FaCard icon="fas fa-divide"/>
                    <FaCard icon="fas fa-dna"/>
                    <FaCard icon="fab fa-dochub"/>
                    <FaCard icon="fab fa-docker"/>
                    <FaCard icon="fas fa-dollar-sign"/>
                    <FaCard icon="fas fa-dolly"/>
                    <FaCard icon="fas fa-dolly-flatbed"/>
                    <FaCard icon="fas fa-donate"/>
                    <FaCard icon="fas fa-door-closed"/>
                    <FaCard icon="fas fa-door-open"/>
                    <FaCard icon="fas fa-dot-circle"/>
                    <FaCard icon="far fa-dot-circle"/>
                    <FaCard icon="fas fa-dove"/>
                    <FaCard icon="fas fa-download"/>
                    <FaCard icon="fab fa-draft2digital"/>
                    <FaCard icon="fab fa-dribbble"/>
                    <FaCard icon="fab fa-dribbble-square"/>
                    <FaCard icon="fab fa-dropbox"/>
                    <FaCard icon="fab fa-drupal"/>
                    <FaCard icon="fas fa-dumbbell"/>
                    <FaCard icon="fab fa-dyalog"/>
                    <FaCard icon="fab fa-earlybirds"/>
                    <FaCard icon="fab fa-ebay"/>
                    <FaCard icon="fab fa-edge"/>
                    <FaCard icon="fas fa-edit"/>
                    <FaCard icon="far fa-edit"/>
                    <FaCard icon="fas fa-eject"/>
                    <FaCard icon="fab fa-elementor"/>
                    <FaCard icon="fas fa-ellipsis-h"/>
                    <FaCard icon="fas fa-ellipsis-v"/>
                    <FaCard icon="fab fa-ember"/>
                    <FaCard icon="fab fa-empire"/>
                    <FaCard icon="fas fa-envelope"/>
                    <FaCard icon="far fa-envelope"/>
                    <FaCard icon="fas fa-envelope-open"/>
                    <FaCard icon="far fa-envelope-open"/>
                    <FaCard icon="fas fa-envelope-square"/>
                    <FaCard icon="fab fa-envira"/>
                    <FaCard icon="fas fa-equals"/>
                    <FaCard icon="fas fa-eraser"/>
                    <FaCard icon="fab fa-erlang"/>
                    <FaCard icon="fab fa-ethereum"/>
                    <FaCard icon="fab fa-etsy"/>
                    <FaCard icon="fas fa-euro-sign"/>
                    <FaCard icon="fas fa-exchange-alt"/>
                    <FaCard icon="fas fa-exclamation"/>
                    <FaCard icon="fas fa-exclamation-circle"/>
                    <FaCard icon="fas fa-exclamation-triangle"/>
                    <FaCard icon="fas fa-expand"/>
                    <FaCard icon="fas fa-expand-arrows-alt"/>
                    <FaCard icon="fab fa-expeditedssl"/>
                    <FaCard icon="fas fa-external-link-alt"/>
                    <FaCard icon="fas fa-external-link-square-alt"/>
                    <FaCard icon="fas fa-eye"/>
                    <FaCard icon="far fa-eye"/>
                    <FaCard icon="fas fa-eye-dropper"/>
                    <FaCard icon="fas fa-eye-slash"/>
                    <FaCard icon="far fa-eye-slash"/>
                    <FaCard icon="fab fa-facebook"/>
                    <FaCard icon="fab fa-facebook-f"/>
                    <FaCard icon="fab fa-facebook-messenger"/>
                    <FaCard icon="fab fa-facebook-square"/>
                    <FaCard icon="fas fa-fast-backward"/>
                    <FaCard icon="fas fa-fast-forward"/>
                    <FaCard icon="fas fa-fax"/>
                    <FaCard icon="fas fa-feather"/>
                    <FaCard icon="fas fa-female"/>
                    <FaCard icon="fas fa-fighter-jet"/>
                    <FaCard icon="fas fa-file"/>
                    <FaCard icon="far fa-file"/>
                    <FaCard icon="fas fa-file-alt"/>
                    <FaCard icon="far fa-file-alt"/>
                    <FaCard icon="fas fa-file-archive"/>
                    <FaCard icon="far fa-file-archive"/>
                    <FaCard icon="fas fa-file-audio"/>
                    <FaCard icon="far fa-file-audio"/>
                    <FaCard icon="fas fa-file-code"/>
                    <FaCard icon="far fa-file-code"/>
                    <FaCard icon="fas fa-file-excel"/>
                    <FaCard icon="far fa-file-excel"/>
                    <FaCard icon="fas fa-file-image"/>
                    <FaCard icon="far fa-file-image"/>
                    <FaCard icon="fas fa-file-medical"/>
                    <FaCard icon="fas fa-file-medical-alt"/>
                    <FaCard icon="fas fa-file-pdf"/>
                    <FaCard icon="far fa-file-pdf"/>
                    <FaCard icon="fas fa-file-powerpoint"/>
                    <FaCard icon="far fa-file-powerpoint"/>
                    <FaCard icon="fas fa-file-video"/>
                    <FaCard icon="far fa-file-video"/>
                    <FaCard icon="fas fa-file-word"/>
                    <FaCard icon="far fa-file-word"/>
                    <FaCard icon="fas fa-film"/>
                    <FaCard icon="fas fa-filter"/>
                    <FaCard icon="fas fa-fire"/>
                    <FaCard icon="fas fa-fire-extinguisher"/>
                    <FaCard icon="fab fa-firefox"/>
                    <FaCard icon="fas fa-first-aid"/>
                    <FaCard icon="fab fa-first-order"/>
                    <FaCard icon="fab fa-first-order-alt"/>
                    <FaCard icon="fab fa-firstdraft"/>
                    <FaCard icon="fas fa-flag"/>
                    <FaCard icon="far fa-flag"/>
                    <FaCard icon="fas fa-flag-checkered"/>
                    <FaCard icon="fas fa-flask"/>
                    <FaCard icon="fab fa-flickr"/>
                    <FaCard icon="fab fa-flipboard"/>
                    <FaCard icon="fab fa-fly"/>
                    <FaCard icon="fas fa-folder"/>
                    <FaCard icon="far fa-folder"/>
                    <FaCard icon="fas fa-folder-open"/>
                    <FaCard icon="far fa-folder-open"/>
                    <FaCard icon="fas fa-font"/>
                    <FaCard icon="fab fa-font-awesome"/>
                    <FaCard icon="fab fa-font-awesome-alt"/>
                    <FaCard icon="fab fa-font-awesome-flag"/>
                    <FaCard icon="fas fa-font-awesome-logo-full"/>
                    <FaCard icon="far fa-font-awesome-logo-full"/>
                    <FaCard icon="fab fa-font-awesome-logo-full"/>
                    <FaCard icon="fab fa-fonticons"/>
                    <FaCard icon="fab fa-fonticons-fi"/>
                    <FaCard icon="fas fa-football-ball"/>
                    <FaCard icon="fab fa-fort-awesome"/>
                    <FaCard icon="fab fa-fort-awesome-alt"/>
                    <FaCard icon="fab fa-forumbee"/>
                    <FaCard icon="fas fa-forward"/>
                    <FaCard icon="fab fa-foursquare"/>
                    <FaCard icon="fab fa-free-code-camp"/>
                    <FaCard icon="fab fa-freebsd"/>
                    <FaCard icon="fas fa-frog"/>
                    <FaCard icon="fas fa-frown"/>
                    <FaCard icon="far fa-frown"/>
                    <FaCard icon="fab fa-fulcrum"/>
                    <FaCard icon="fas fa-futbol"/>
                    <FaCard icon="far fa-futbol"/>
                    <FaCard icon="fab fa-galactic-republic"/>
                    <FaCard icon="fab fa-galactic-senate"/>
                    <FaCard icon="fas fa-gamepad"/>
                    <FaCard icon="fas fa-gas-pump"/>
                    <FaCard icon="fas fa-gavel"/>
                    <FaCard icon="fas fa-gem"/>
                    <FaCard icon="far fa-gem"/>
                    <FaCard icon="fas fa-genderless"/>
                    <FaCard icon="fab fa-get-pocket"/>
                    <FaCard icon="fab fa-gg"/>
                    <FaCard icon="fab fa-gg-circle"/>
                    <FaCard icon="fas fa-gift"/>
                    <FaCard icon="fab fa-git"/>
                    <FaCard icon="fab fa-git-square"/>
                    <FaCard icon="fab fa-github"/>
                    <FaCard icon="fab fa-github-alt"/>
                    <FaCard icon="fab fa-github-square"/>
                    <FaCard icon="fab fa-gitkraken"/>
                    <FaCard icon="fab fa-gitlab"/>
                    <FaCard icon="fab fa-gitter"/>
                    <FaCard icon="fas fa-glass-martini"/>
                    <FaCard icon="fas fa-glasses"/>
                    <FaCard icon="fab fa-glide"/>
                    <FaCard icon="fab fa-glide-g"/>
                    <FaCard icon="fas fa-globe"/>
                    <FaCard icon="fab fa-gofore"/>
                    <FaCard icon="fas fa-golf-ball"/>
                    <FaCard icon="fab fa-goodreads"/>
                    <FaCard icon="fab fa-goodreads-g"/>
                    <FaCard icon="fab fa-google"/>
                    <FaCard icon="fab fa-google-drive"/>
                    <FaCard icon="fab fa-google-play"/>
                    <FaCard icon="fab fa-google-plus"/>
                    <FaCard icon="fab fa-google-plus-g"/>
                    <FaCard icon="fab fa-google-plus-square"/>
                    <FaCard icon="fab fa-google-wallet"/>
                    <FaCard icon="fas fa-graduation-cap"/>
                    <FaCard icon="fab fa-gratipay"/>
                    <FaCard icon="fab fa-grav"/>
                    <FaCard icon="fas fa-greater-than"/>
                    <FaCard icon="fas fa-greater-than-equal"/>
                    <FaCard icon="fab fa-gripfire"/>
                    <FaCard icon="fab fa-grunt"/>
                    <FaCard icon="fab fa-gulp"/>
                    <FaCard icon="fas fa-h-square"/>
                    <FaCard icon="fab fa-hacker-news"/>
                    <FaCard icon="fab fa-hacker-news-square"/>
                    <FaCard icon="fas fa-hand-holding"/>
                    <FaCard icon="fas fa-hand-holding-heart"/>
                    <FaCard icon="fas fa-hand-holding-usd"/>
                    <FaCard icon="fas fa-hand-lizard"/>
                    <FaCard icon="far fa-hand-lizard"/>
                    <FaCard icon="fas fa-hand-paper"/>
                    <FaCard icon="far fa-hand-paper"/>
                    <FaCard icon="fas fa-hand-peace"/>
                    <FaCard icon="far fa-hand-peace"/>
                    <FaCard icon="fas fa-hand-point-down"/>
                    <FaCard icon="far fa-hand-point-down"/>
                    <FaCard icon="fas fa-hand-point-left"/>
                    <FaCard icon="far fa-hand-point-left"/>
                    <FaCard icon="fas fa-hand-point-right"/>
                    <FaCard icon="far fa-hand-point-right"/>
                    <FaCard icon="fas fa-hand-point-up"/>
                    <FaCard icon="far fa-hand-point-up"/>
                    <FaCard icon="fas fa-hand-pointer"/>
                    <FaCard icon="far fa-hand-pointer"/>
                    <FaCard icon="fas fa-hand-rock"/>
                    <FaCard icon="far fa-hand-rock"/>
                    <FaCard icon="fas fa-hand-scissors"/>
                    <FaCard icon="far fa-hand-scissors"/>
                    <FaCard icon="fas fa-hand-spock"/>
                    <FaCard icon="far fa-hand-spock"/>
                    <FaCard icon="fas fa-hands"/>
                    <FaCard icon="fas fa-hands-helping"/>
                    <FaCard icon="fas fa-handshake"/>
                    <FaCard icon="far fa-handshake"/>
                    <FaCard icon="fas fa-hashtag"/>
                    <FaCard icon="fas fa-hdd"/>
                    <FaCard icon="far fa-hdd"/>
                    <FaCard icon="fas fa-heading"/>
                    <FaCard icon="fas fa-headphones"/>
                    <FaCard icon="fas fa-heart"/>
                    <FaCard icon="far fa-heart"/>
                    <FaCard icon="fas fa-heartbeat"/>
                    <FaCard icon="fas fa-helicopter"/>
                    <FaCard icon="fab fa-hips"/>
                    <FaCard icon="fab fa-hire-a-helper"/>
                    <FaCard icon="fas fa-history"/>
                    <FaCard icon="fas fa-hockey-puck"/>
                    <FaCard icon="fas fa-home"/>
                    <FaCard icon="fab fa-hooli"/>
                    <FaCard icon="fas fa-hospital"/>
                    <FaCard icon="far fa-hospital"/>
                    <FaCard icon="fas fa-hospital-alt"/>
                    <FaCard icon="fas fa-hospital-symbol"/>
                    <FaCard icon="fab fa-hotjar"/>
                    <FaCard icon="fas fa-hourglass"/>
                    <FaCard icon="far fa-hourglass"/>
                    <FaCard icon="fas fa-hourglass-end"/>
                    <FaCard icon="fas fa-hourglass-half"/>
                    <FaCard icon="fas fa-hourglass-start"/>
                    <FaCard icon="fab fa-houzz"/>
                    <FaCard icon="fab fa-html5"/>
                    <FaCard icon="fab fa-hubspot"/>
                    <FaCard icon="fas fa-i-cursor"/>
                    <FaCard icon="fas fa-id-badge"/>
                    <FaCard icon="far fa-id-badge"/>
                    <FaCard icon="fas fa-id-card"/>
                    <FaCard icon="far fa-id-card"/>
                    <FaCard icon="fas fa-id-card-alt"/>
                    <FaCard icon="fas fa-image"/>
                    <FaCard icon="far fa-image"/>
                    <FaCard icon="fas fa-images"/>
                    <FaCard icon="far fa-images"/>
                    <FaCard icon="fab fa-imdb"/>
                    <FaCard icon="fas fa-inbox"/>
                    <FaCard icon="fas fa-indent"/>
                    <FaCard icon="fas fa-industry"/>
                    <FaCard icon="fas fa-infinity"/>
                    <FaCard icon="fas fa-info"/>
                    <FaCard icon="fas fa-info-circle"/>
                    <FaCard icon="fab fa-instagram"/>
                    <FaCard icon="fab fa-internet-explorer"/>
                    <FaCard icon="fab fa-ioxhost"/>
                    <FaCard icon="fas fa-italic"/>
                    <FaCard icon="fab fa-itunes"/>
                    <FaCard icon="fab fa-itunes-note"/>
                    <FaCard icon="fab fa-java"/>
                    <FaCard icon="fab fa-jedi-order"/>
                    <FaCard icon="fab fa-jenkins"/>
                    <FaCard icon="fab fa-joget"/>
                    <FaCard icon="fab fa-joomla"/>
                    <FaCard icon="fab fa-js"/>
                    <FaCard icon="fab fa-js-square"/>
                    <FaCard icon="fab fa-jsfiddle"/>
                    <FaCard icon="fas fa-key"/>
                    <FaCard icon="fab fa-keybase"/>
                    <FaCard icon="fas fa-keyboard"/>
                    <FaCard icon="far fa-keyboard"/>
                    <FaCard icon="fab fa-keycdn"/>
                    <FaCard icon="fab fa-kickstarter"/>
                    <FaCard icon="fab fa-kickstarter-k"/>
                    <FaCard icon="fas fa-kiwi-bird"/>
                    <FaCard icon="fab fa-korvue"/>
                    <FaCard icon="fas fa-language"/>
                    <FaCard icon="fas fa-laptop"/>
                    <FaCard icon="fab fa-laravel"/>
                    <FaCard icon="fab fa-lastfm"/>
                    <FaCard icon="fab fa-lastfm-square"/>
                    <FaCard icon="fas fa-leaf"/>
                    <FaCard icon="fab fa-leanpub"/>
                    <FaCard icon="fas fa-lemon"/>
                    <FaCard icon="far fa-lemon"/>
                    <FaCard icon="fab fa-less"/>
                    <FaCard icon="fas fa-less-than"/>
                    <FaCard icon="fas fa-less-than-equal"/>
                    <FaCard icon="fas fa-level-down-alt"/>
                    <FaCard icon="fas fa-level-up-alt"/>
                    <FaCard icon="fas fa-life-ring"/>
                    <FaCard icon="far fa-life-ring"/>
                    <FaCard icon="fas fa-lightbulb"/>
                    <FaCard icon="far fa-lightbulb"/>
                    <FaCard icon="fab fa-line"/>
                    <FaCard icon="fas fa-link"/>
                    <FaCard icon="fab fa-linkedin"/>
                    <FaCard icon="fab fa-linkedin-in"/>
                    <FaCard icon="fab fa-linode"/>
                    <FaCard icon="fab fa-linux"/>
                    <FaCard icon="fas fa-lira-sign"/>
                    <FaCard icon="fas fa-list"/>
                    <FaCard icon="fas fa-list-alt"/>
                    <FaCard icon="far fa-list-alt"/>
                    <FaCard icon="fas fa-list-ol"/>
                    <FaCard icon="fas fa-list-ul"/>
                    <FaCard icon="fas fa-location-arrow"/>
                    <FaCard icon="fas fa-lock"/>
                    <FaCard icon="fas fa-lock-open"/>
                    <FaCard icon="fas fa-long-arrow-alt-down"/>
                    <FaCard icon="fas fa-long-arrow-alt-left"/>
                    <FaCard icon="fas fa-long-arrow-alt-right"/>
                    <FaCard icon="fas fa-long-arrow-alt-up"/>
                    <FaCard icon="fas fa-low-vision"/>
                    <FaCard icon="fab fa-lyft"/>
                    <FaCard icon="fab fa-magento"/>
                    <FaCard icon="fas fa-magic"/>
                    <FaCard icon="fas fa-magnet"/>
                    <FaCard icon="fas fa-male"/>
                    <FaCard icon="fab fa-mandalorian"/>
                    <FaCard icon="fas fa-map"/>
                    <FaCard icon="far fa-map"/>
                    <FaCard icon="fas fa-map-marker"/>
                    <FaCard icon="fas fa-map-marker-alt"/>
                    <FaCard icon="fas fa-map-pin"/>
                    <FaCard icon="fas fa-map-signs"/>
                    <FaCard icon="fas fa-mars"/>
                    <FaCard icon="fas fa-mars-double"/>
                    <FaCard icon="fas fa-mars-stroke"/>
                    <FaCard icon="fas fa-mars-stroke-h"/>
                    <FaCard icon="fas fa-mars-stroke-v"/>
                    <FaCard icon="fab fa-mastodon"/>
                    <FaCard icon="fab fa-maxcdn"/>
                    <FaCard icon="fab fa-medapps"/>
                    <FaCard icon="fab fa-medium"/>
                    <FaCard icon="fab fa-medium-m"/>
                    <FaCard icon="fas fa-medkit"/>
                    <FaCard icon="fab fa-medrt"/>
                    <FaCard icon="fab fa-meetup"/>
                    <FaCard icon="fas fa-meh"/>
                    <FaCard icon="far fa-meh"/>
                    <FaCard icon="fas fa-memory"/>
                    <FaCard icon="fas fa-mercury"/>
                    <FaCard icon="fas fa-microchip"/>
                    <FaCard icon="fas fa-microphone"/>
                    <FaCard icon="fas fa-microphone-alt"/>
                    <FaCard icon="fas fa-microphone-alt-slash"/>
                    <FaCard icon="fas fa-microphone-slash"/>
                    <FaCard icon="fab fa-microsoft"/>
                    <FaCard icon="fas fa-minus"/>
                    <FaCard icon="fas fa-minus-circle"/>
                    <FaCard icon="fas fa-minus-square"/>
                    <FaCard icon="far fa-minus-square"/>
                    <FaCard icon="fab fa-mix"/>
                    <FaCard icon="fab fa-mixcloud"/>
                    <FaCard icon="fab fa-mizuni"/>
                    <FaCard icon="fas fa-mobile"/>
                    <FaCard icon="fas fa-mobile-alt"/>
                    <FaCard icon="fab fa-modx"/>
                    <FaCard icon="fab fa-monero"/>
                    <FaCard icon="fas fa-money-bill"/>
                    <FaCard icon="fas fa-money-bill-alt"/>
                    <FaCard icon="far fa-money-bill-alt"/>
                    <FaCard icon="fas fa-money-bill-wave"/>
                    <FaCard icon="fas fa-money-bill-wave-alt"/>
                    <FaCard icon="fas fa-money-check"/>
                    <FaCard icon="fas fa-money-check-alt"/>
                    <FaCard icon="fas fa-moon"/>
                    <FaCard icon="far fa-moon"/>
                    <FaCard icon="fas fa-motorcycle"/>
                    <FaCard icon="fas fa-mouse-pointer"/>
                    <FaCard icon="fas fa-music"/>
                    <FaCard icon="fab fa-napster"/>
                    <FaCard icon="fas fa-neuter"/>
                    <FaCard icon="fas fa-newspaper"/>
                    <FaCard icon="far fa-newspaper"/>
                    <FaCard icon="fab fa-nintendo-switch"/>
                    <FaCard icon="fab fa-node"/>
                    <FaCard icon="fab fa-node-js"/>
                    <FaCard icon="fas fa-not-equal"/>
                    <FaCard icon="fas fa-notes-medical"/>
                    <FaCard icon="fab fa-npm"/>
                    <FaCard icon="fab fa-ns8"/>
                    <FaCard icon="fab fa-nutritionix"/>
                    <FaCard icon="fas fa-object-group"/>
                    <FaCard icon="far fa-object-group"/>
                    <FaCard icon="fas fa-object-ungroup"/>
                    <FaCard icon="far fa-object-ungroup"/>
                    <FaCard icon="fab fa-odnoklassniki"/>
                    <FaCard icon="fab fa-odnoklassniki-square"/>
                    <FaCard icon="fab fa-old-republic"/>
                    <FaCard icon="fab fa-opencart"/>
                    <FaCard icon="fab fa-openid"/>
                    <FaCard icon="fab fa-opera"/>
                    <FaCard icon="fab fa-optin-monster"/>
                    <FaCard icon="fab fa-osi"/>
                    <FaCard icon="fas fa-outdent"/>
                    <FaCard icon="fab fa-page4"/>
                    <FaCard icon="fab fa-pagelines"/>
                    <FaCard icon="fas fa-paint-brush"/>
                    <FaCard icon="fas fa-palette"/>
                    <FaCard icon="fab fa-palfed"/>
                    <FaCard icon="fas fa-pallet"/>
                    <FaCard icon="fas fa-paper-plane"/>
                    <FaCard icon="far fa-paper-plane"/>
                    <FaCard icon="fas fa-paperclip"/>
                    <FaCard icon="fas fa-parachute-box"/>
                    <FaCard icon="fas fa-paragraph"/>
                    <FaCard icon="fas fa-parking"/>
                    <FaCard icon="fas fa-paste"/>
                    <FaCard icon="fab fa-patreon"/>
                    <FaCard icon="fas fa-pause"/>
                    <FaCard icon="fas fa-pause-circle"/>
                    <FaCard icon="far fa-pause-circle"/>
                    <FaCard icon="fas fa-paw"/>
                    <FaCard icon="fab fa-paypal"/>
                    <FaCard icon="fas fa-pen-square"/>
                    <FaCard icon="fas fa-pencil-alt"/>
                    <FaCard icon="fas fa-people-carry"/>
                    <FaCard icon="fas fa-percent"/>
                    <FaCard icon="fas fa-percentage"/>
                    <FaCard icon="fab fa-periscope"/>
                    <FaCard icon="fab fa-phabricator"/>
                    <FaCard icon="fab fa-phoenix-framework"/>
                    <FaCard icon="fab fa-phoenix-squadron"/>
                    <FaCard icon="fas fa-phone"/>
                    <FaCard icon="fas fa-phone-slash"/>
                    <FaCard icon="fas fa-phone-square"/>
                    <FaCard icon="fas fa-phone-volume"/>
                    <FaCard icon="fab fa-php"/>
                    <FaCard icon="fab fa-pied-piper"/>
                    <FaCard icon="fab fa-pied-piper-alt"/>
                    <FaCard icon="fab fa-pied-piper-hat"/>
                    <FaCard icon="fab fa-pied-piper-pp"/>
                    <FaCard icon="fas fa-piggy-bank"/>
                    <FaCard icon="fas fa-pills"/>
                    <FaCard icon="fab fa-pinterest"/>
                    <FaCard icon="fab fa-pinterest-p"/>
                    <FaCard icon="fab fa-pinterest-square"/>
                    <FaCard icon="fas fa-plane"/>
                    <FaCard icon="fas fa-play"/>
                    <FaCard icon="fas fa-play-circle"/>
                    <FaCard icon="far fa-play-circle"/>
                    <FaCard icon="fab fa-playstation"/>
                    <FaCard icon="fas fa-plug"/>
                    <FaCard icon="fas fa-plus"/>
                    <FaCard icon="fas fa-plus-circle"/>
                    <FaCard icon="fas fa-plus-square"/>
                    <FaCard icon="far fa-plus-square"/>
                    <FaCard icon="fas fa-podcast"/>
                    <FaCard icon="fas fa-poo"/>
                    <FaCard icon="fas fa-portrait"/>
                    <FaCard icon="fas fa-pound-sign"/>
                    <FaCard icon="fas fa-power-off"/>
                    <FaCard icon="fas fa-prescription-bottle"/>
                    <FaCard icon="fas fa-prescription-bottle-alt"/>
                    <FaCard icon="fas fa-print"/>
                    <FaCard icon="fas fa-procedures"/>
                    <FaCard icon="fab fa-product-hunt"/>
                    <FaCard icon="fas fa-project-diagram"/>
                    <FaCard icon="fab fa-pushed"/>
                    <FaCard icon="fas fa-puzzle-piece"/>
                    <FaCard icon="fab fa-python"/>
                    <FaCard icon="fab fa-qq"/>
                    <FaCard icon="fas fa-qrcode"/>
                    <FaCard icon="fas fa-question"/>
                    <FaCard icon="fas fa-question-circle"/>
                    <FaCard icon="far fa-question-circle"/>
                    <FaCard icon="fas fa-quidditch"/>
                    <FaCard icon="fab fa-quinscape"/>
                    <FaCard icon="fab fa-quora"/>
                    <FaCard icon="fas fa-quote-left"/>
                    <FaCard icon="fas fa-quote-right"/>
                    <FaCard icon="fab fa-r-project"/>
                    <FaCard icon="fas fa-random"/>
                    <FaCard icon="fab fa-ravelry"/>
                    <FaCard icon="fab fa-react"/>
                    <FaCard icon="fab fa-readme"/>
                    <FaCard icon="fab fa-rebel"/>
                    <FaCard icon="fas fa-receipt"/>
                    <FaCard icon="fas fa-recycle"/>
                    <FaCard icon="fab fa-red-river"/>
                    <FaCard icon="fab fa-reddit"/>
                    <FaCard icon="fab fa-reddit-alien"/>
                    <FaCard icon="fab fa-reddit-square"/>
                    <FaCard icon="fas fa-redo"/>
                    <FaCard icon="fas fa-redo-alt"/>
                    <FaCard icon="fas fa-registered"/>
                    <FaCard icon="far fa-registered"/>
                    <FaCard icon="fab fa-rendact"/>
                    <FaCard icon="fab fa-renren"/>
                    <FaCard icon="fas fa-reply"/>
                    <FaCard icon="fas fa-reply-all"/>
                    <FaCard icon="fab fa-replyd"/>
                    <FaCard icon="fab fa-researchgate"/>
                    <FaCard icon="fab fa-resolving"/>
                    <FaCard icon="fas fa-retweet"/>
                    <FaCard icon="fas fa-ribbon"/>
                    <FaCard icon="fas fa-road"/>
                    <FaCard icon="fas fa-robot"/>
                    <FaCard icon="fas fa-rocket"/>
                    <FaCard icon="fab fa-rocketchat"/>
                    <FaCard icon="fab fa-rockrms"/>
                    <FaCard icon="fas fa-rss"/>
                    <FaCard icon="fas fa-rss-square"/>
                    <FaCard icon="fas fa-ruble-sign"/>
                    <FaCard icon="fas fa-ruler"/>
                    <FaCard icon="fas fa-ruler-combined"/>
                    <FaCard icon="fas fa-ruler-horizontal"/>
                    <FaCard icon="fas fa-ruler-vertical"/>
                    <FaCard icon="fas fa-rupee-sign"/>
                    <FaCard icon="fab fa-safari"/>
                    <FaCard icon="fab fa-sass"/>
                    <FaCard icon="fas fa-save"/>
                    <FaCard icon="far fa-save"/>
                    <FaCard icon="fab fa-schlix"/>
                    <FaCard icon="fas fa-school"/>
                    <FaCard icon="fas fa-screwdriver"/>
                    <FaCard icon="fab fa-scribd"/>
                    <FaCard icon="fas fa-search"/>
                    <FaCard icon="fas fa-search-minus"/>
                    <FaCard icon="fas fa-search-plus"/>
                    <FaCard icon="fab fa-searchengin"/>
                    <FaCard icon="fas fa-seedling"/>
                    <FaCard icon="fab fa-sellcast"/>
                    <FaCard icon="fab fa-sellsy"/>
                    <FaCard icon="fas fa-server"/>
                    <FaCard icon="fab fa-servicestack"/>
                    <FaCard icon="fas fa-share"/>
                    <FaCard icon="fas fa-share-alt"/>
                    <FaCard icon="fas fa-share-alt-square"/>
                    <FaCard icon="fas fa-share-square"/>
                    <FaCard icon="far fa-share-square"/>
                    <FaCard icon="fas fa-shekel-sign"/>
                    <FaCard icon="fas fa-shield-alt"/>
                    <FaCard icon="fas fa-ship"/>
                    <FaCard icon="fas fa-shipping-fast"/>
                    <FaCard icon="fab fa-shirtsinbulk"/>
                    <FaCard icon="fas fa-shoe-prints"/>
                    <FaCard icon="fas fa-shopping-bag"/>
                    <FaCard icon="fas fa-shopping-basket"/>
                    <FaCard icon="fas fa-shopping-cart"/>
                    <FaCard icon="fas fa-shower"/>
                    <FaCard icon="fas fa-sign"/>
                    <FaCard icon="fas fa-sign-in-alt"/>
                    <FaCard icon="fas fa-sign-language"/>
                    <FaCard icon="fas fa-sign-out-alt"/>
                    <FaCard icon="fas fa-signal"/>
                    <FaCard icon="fab fa-simplybuilt"/>
                    <FaCard icon="fab fa-sistrix"/>
                    <FaCard icon="fas fa-sitemap"/>
                    <FaCard icon="fab fa-sith"/>
                    <FaCard icon="fas fa-skull"/>
                    <FaCard icon="fab fa-skyatlas"/>
                    <FaCard icon="fab fa-skype"/>
                    <FaCard icon="fab fa-slack"/>
                    <FaCard icon="fab fa-slack-hash"/>
                    <FaCard icon="fas fa-sliders-h"/>
                    <FaCard icon="fab fa-slideshare"/>
                    <FaCard icon="fas fa-smile"/>
                    <FaCard icon="far fa-smile"/>
                    <FaCard icon="fas fa-smoking"/>
                    <FaCard icon="fas fa-smoking-ban"/>
                    <FaCard icon="fab fa-snapchat"/>
                    <FaCard icon="fab fa-snapchat-ghost"/>
                    <FaCard icon="fab fa-snapchat-square"/>
                    <FaCard icon="fas fa-snowflake"/>
                    <FaCard icon="far fa-snowflake"/>
                    <FaCard icon="fas fa-sort"/>
                    <FaCard icon="fas fa-sort-alpha-down"/>
                    <FaCard icon="fas fa-sort-alpha-up"/>
                    <FaCard icon="fas fa-sort-amount-down"/>
                    <FaCard icon="fas fa-sort-amount-up"/>
                    <FaCard icon="fas fa-sort-down"/>
                    <FaCard icon="fas fa-sort-numeric-down"/>
                    <FaCard icon="fas fa-sort-numeric-up"/>
                    <FaCard icon="fas fa-sort-up"/>
                    <FaCard icon="fab fa-soundcloud"/>
                    <FaCard icon="fas fa-space-shuttle"/>
                    <FaCard icon="fab fa-speakap"/>
                    <FaCard icon="fas fa-spinner"/>
                    <FaCard icon="fab fa-spotify"/>
                    <FaCard icon="fas fa-square"/>
                    <FaCard icon="far fa-square"/>
                    <FaCard icon="fas fa-square-full"/>
                    <FaCard icon="fab fa-stack-exchange"/>
                    <FaCard icon="fab fa-stack-overflow"/>
                    <FaCard icon="fas fa-star"/>
                    <FaCard icon="far fa-star"/>
                    <FaCard icon="fas fa-star-half"/>
                    <FaCard icon="far fa-star-half"/>
                    <FaCard icon="fab fa-staylinked"/>
                    <FaCard icon="fab fa-steam"/>
                    <FaCard icon="fab fa-steam-square"/>
                    <FaCard icon="fab fa-steam-symbol"/>
                    <FaCard icon="fas fa-step-backward"/>
                    <FaCard icon="fas fa-step-forward"/>
                    <FaCard icon="fas fa-stethoscope"/>
                    <FaCard icon="fab fa-sticker-mule"/>
                    <FaCard icon="fas fa-sticky-note"/>
                    <FaCard icon="far fa-sticky-note"/>
                    <FaCard icon="fas fa-stop"/>
                    <FaCard icon="fas fa-stop-circle"/>
                    <FaCard icon="far fa-stop-circle"/>
                    <FaCard icon="fas fa-stopwatch"/>
                    <FaCard icon="fas fa-store"/>
                    <FaCard icon="fas fa-store-alt"/>
                    <FaCard icon="fab fa-strava"/>
                    <FaCard icon="fas fa-stream"/>
                    <FaCard icon="fas fa-street-view"/>
                    <FaCard icon="fas fa-strikethrough"/>
                    <FaCard icon="fab fa-stripe"/>
                    <FaCard icon="fab fa-stripe-s"/>
                    <FaCard icon="fas fa-stroopwafel"/>
                    <FaCard icon="fab fa-studiovinari"/>
                    <FaCard icon="fab fa-stumbleupon"/>
                    <FaCard icon="fab fa-stumbleupon-circle"/>
                    <FaCard icon="fas fa-subscript"/>
                    <FaCard icon="fas fa-subway"/>
                    <FaCard icon="fas fa-suitcase"/>
                    <FaCard icon="fas fa-sun"/>
                    <FaCard icon="far fa-sun"/>
                    <FaCard icon="fab fa-superpowers"/>
                    <FaCard icon="fas fa-superscript"/>
                    <FaCard icon="fab fa-supple"/>
                    <FaCard icon="fas fa-sync"/>
                    <FaCard icon="fas fa-sync-alt"/>
                    <FaCard icon="fas fa-syringe"/>
                    <FaCard icon="fas fa-table"/>
                    <FaCard icon="fas fa-table-tennis"/>
                    <FaCard icon="fas fa-tablet"/>
                    <FaCard icon="fas fa-tablet-alt"/>
                    <FaCard icon="fas fa-tablets"/>
                    <FaCard icon="fas fa-tachometer-alt"/>
                    <FaCard icon="fas fa-tag"/>
                    <FaCard icon="fas fa-tags"/>
                    <FaCard icon="fas fa-tape"/>
                    <FaCard icon="fas fa-tasks"/>
                    <FaCard icon="fas fa-taxi"/>
                    <FaCard icon="fab fa-teamspeak"/>
                    <FaCard icon="fab fa-telegram"/>
                    <FaCard icon="fab fa-telegram-plane"/>
                    <FaCard icon="fab fa-tencent-weibo"/>
                    <FaCard icon="fas fa-terminal"/>
                    <FaCard icon="fas fa-text-height"/>
                    <FaCard icon="fas fa-text-width"/>
                    <FaCard icon="fas fa-th"/>
                    <FaCard icon="fas fa-th-large"/>
                    <FaCard icon="fas fa-th-list"/>
                    <FaCard icon="fab fa-themeisle"/>
                    <FaCard icon="fas fa-thermometer"/>
                    <FaCard icon="fas fa-thermometer-empty"/>
                    <FaCard icon="fas fa-thermometer-full"/>
                    <FaCard icon="fas fa-thermometer-half"/>
                    <FaCard icon="fas fa-thermometer-quarter"/>
                    <FaCard icon="fas fa-thermometer-three-quarters"/>
                    <FaCard icon="fas fa-thumbs-down"/>
                    <FaCard icon="far fa-thumbs-down"/>
                    <FaCard icon="fas fa-thumbs-up"/>
                    <FaCard icon="far fa-thumbs-up"/>
                    <FaCard icon="fas fa-thumbtack"/>
                    <FaCard icon="fas fa-ticket-alt"/>
                    <FaCard icon="fas fa-times"/>
                    <FaCard icon="fas fa-times-circle"/>
                    <FaCard icon="far fa-times-circle"/>
                    <FaCard icon="fas fa-tint"/>
                    <FaCard icon="fas fa-toggle-off"/>
                    <FaCard icon="fas fa-toggle-on"/>
                    <FaCard icon="fas fa-toolbox"/>
                    <FaCard icon="fab fa-trade-federation"/>
                    <FaCard icon="fas fa-trademark"/>
                    <FaCard icon="fas fa-train"/>
                    <FaCard icon="fas fa-transgender"/>
                    <FaCard icon="fas fa-transgender-alt"/>
                    <FaCard icon="fas fa-trash"/>
                    <FaCard icon="fas fa-trash-alt"/>
                    <FaCard icon="far fa-trash-alt"/>
                    <FaCard icon="fas fa-tree"/>
                    <FaCard icon="fab fa-trello"/>
                    <FaCard icon="fab fa-tripadvisor"/>
                    <FaCard icon="fas fa-trophy"/>
                    <FaCard icon="fas fa-truck"/>
                    <FaCard icon="fas fa-truck-loading"/>
                    <FaCard icon="fas fa-truck-moving"/>
                    <FaCard icon="fas fa-tshirt"/>
                    <FaCard icon="fas fa-tty"/>
                    <FaCard icon="fab fa-tumblr"/>
                    <FaCard icon="fab fa-tumblr-square"/>
                    <FaCard icon="fas fa-tv"/>
                    <FaCard icon="fab fa-twitch"/>
                    <FaCard icon="fab fa-twitter"/>
                    <FaCard icon="fab fa-twitter-square"/>
                    <FaCard icon="fab fa-typo3"/>
                    <FaCard icon="fab fa-uber"/>
                    <FaCard icon="fab fa-uikit"/>
                    <FaCard icon="fas fa-umbrella"/>
                    <FaCard icon="fas fa-underline"/>
                    <FaCard icon="fas fa-undo"/>
                    <FaCard icon="fas fa-undo-alt"/>
                    <FaCard icon="fab fa-uniregistry"/>
                    <FaCard icon="fas fa-universal-access"/>
                    <FaCard icon="fas fa-university"/>
                    <FaCard icon="fas fa-unlink"/>
                    <FaCard icon="fas fa-unlock"/>
                    <FaCard icon="fas fa-unlock-alt"/>
                    <FaCard icon="fab fa-untappd"/>
                    <FaCard icon="fas fa-upload"/>
                    <FaCard icon="fab fa-usb"/>
                    <FaCard icon="fas fa-user"/>
                    <FaCard icon="far fa-user"/>
                    <FaCard icon="fas fa-user-alt"/>
                    <FaCard icon="fas fa-user-alt-slash"/>
                    <FaCard icon="fas fa-user-astronaut"/>
                    <FaCard icon="fas fa-user-check"/>
                    <FaCard icon="fas fa-user-circle"/>
                    <FaCard icon="far fa-user-circle"/>
                    <FaCard icon="fas fa-user-clock"/>
                    <FaCard icon="fas fa-user-cog"/>
                    <FaCard icon="fas fa-user-edit"/>
                    <FaCard icon="fas fa-user-friends"/>
                    <FaCard icon="fas fa-user-graduate"/>
                    <FaCard icon="fas fa-user-lock"/>
                    <FaCard icon="fas fa-user-md"/>
                    <FaCard icon="fas fa-user-minus"/>
                    <FaCard icon="fas fa-user-ninja"/>
                    <FaCard icon="fas fa-user-plus"/>
                    <FaCard icon="fas fa-user-secret"/>
                    <FaCard icon="fas fa-user-shield"/>
                    <FaCard icon="fas fa-user-slash"/>
                    <FaCard icon="fas fa-user-tag"/>
                    <FaCard icon="fas fa-user-tie"/>
                    <FaCard icon="fas fa-user-times"/>
                    <FaCard icon="fas fa-users"/>
                    <FaCard icon="fas fa-users-cog"/>
                    <FaCard icon="fab fa-ussunnah"/>
                    <FaCard icon="fas fa-utensil-spoon"/>
                    <FaCard icon="fas fa-utensils"/>
                    <FaCard icon="fab fa-vaadin"/>
                    <FaCard icon="fas fa-venus"/>
                    <FaCard icon="fas fa-venus-double"/>
                    <FaCard icon="fas fa-venus-mars"/>
                    <FaCard icon="fab fa-viacoin"/>
                    <FaCard icon="fab fa-viadeo"/>
                    <FaCard icon="fab fa-viadeo-square"/>
                    <FaCard icon="fas fa-vial"/>
                    <FaCard icon="fas fa-vials"/>
                    <FaCard icon="fab fa-viber"/>
                    <FaCard icon="fas fa-video"/>
                    <FaCard icon="fas fa-video-slash"/>
                    <FaCard icon="fab fa-vimeo"/>
                    <FaCard icon="fab fa-vimeo-square"/>
                    <FaCard icon="fab fa-vimeo-v"/>
                    <FaCard icon="fab fa-vine"/>
                    <FaCard icon="fab fa-vk"/>
                    <FaCard icon="fab fa-vnv"/>
                    <FaCard icon="fas fa-volleyball-ball"/>
                    <FaCard icon="fas fa-volume-down"/>
                    <FaCard icon="fas fa-volume-off"/>
                    <FaCard icon="fas fa-volume-up"/>
                    <FaCard icon="fab fa-vuejs"/>
                    <FaCard icon="fas fa-walking"/>
                    <FaCard icon="fas fa-wallet"/>
                    <FaCard icon="fas fa-warehouse"/>
                    <FaCard icon="fab fa-weibo"/>
                    <FaCard icon="fas fa-weight"/>
                    <FaCard icon="fab fa-weixin"/>
                    <FaCard icon="fab fa-whatsapp"/>
                    <FaCard icon="fab fa-whatsapp-square"/>
                    <FaCard icon="fas fa-wheelchair"/>
                    <FaCard icon="fab fa-whmcs"/>
                    <FaCard icon="fas fa-wifi"/>
                    <FaCard icon="fab fa-wikipedia-w"/>
                    <FaCard icon="fas fa-window-close"/>
                    <FaCard icon="far fa-window-close"/>
                    <FaCard icon="fas fa-window-maximize"/>
                    <FaCard icon="far fa-window-maximize"/>
                    <FaCard icon="fas fa-window-minimize"/>
                    <FaCard icon="far fa-window-minimize"/>
                    <FaCard icon="fas fa-window-restore"/>
                    <FaCard icon="far fa-window-restore"/>
                    <FaCard icon="fab fa-windows"/>
                    <FaCard icon="fas fa-wine-glass"/>
                    <FaCard icon="fab fa-wolf-pack-battalion"/>
                    <FaCard icon="fas fa-won-sign"/>
                    <FaCard icon="fab fa-wordpress"/>
                    <FaCard icon="fab fa-wordpress-simple"/>
                    <FaCard icon="fab fa-wpbeginner"/>
                    <FaCard icon="fab fa-wpexplorer"/>
                    <FaCard icon="fab fa-wpforms"/>
                    <FaCard icon="fas fa-wrench"/>
                    <FaCard icon="fas fa-x-ray"/>
                    <FaCard icon="fab fa-xbox"/>
                    <FaCard icon="fab fa-xing"/>
                    <FaCard icon="fab fa-xing-square"/>
                    <FaCard icon="fab fa-y-combinator"/>
                    <FaCard icon="fab fa-yahoo"/>
                    <FaCard icon="fab fa-yandex"/>
                    <FaCard icon="fab fa-yandex-international"/>
                    <FaCard icon="fab fa-yelp"/>
                    <FaCard icon="fas fa-yen-sign"/>
                    <FaCard icon="fab fa-yoast"/>
                    <FaCard icon="fab fa-youtube"/>
                    <FaCard icon="fab fa-youtube-square"/>
                </Row>
                <h4 className="page-header">Simple Line icons</h4>
                <Row>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-user mr-2"></em>
                                <span>.icon-user</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-people mr-2"></em>
                                <span>.icon-people</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-user-female mr-2"></em>
                                <span>.icon-user-female</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-user-follow mr-2"></em>
                                <span>.icon-user-follow</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-user-following mr-2"></em>
                                <span>.icon-user-following</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-user-unfollow mr-2"></em>
                                <span>.icon-user-unfollow</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-login mr-2"></em>
                                <span>.icon-login</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-logout mr-2"></em>
                                <span>.icon-logout</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-emotsmile mr-2"></em>
                                <span>.icon-emotsmile</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-phone mr-2"></em>
                                <span>.icon-phone</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-call-end mr-2"></em>
                                <span>.icon-call-end</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-call-in mr-2"></em>
                                <span>.icon-call-in</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-call-out mr-2"></em>
                                <span>.icon-call-out</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-map mr-2"></em>
                                <span>.icon-map</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-location-pin mr-2"></em>
                                <span>.icon-location-pin</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-direction mr-2"></em>
                                <span>.icon-direction</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-directions mr-2"></em>
                                <span>.icon-directions</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-compass mr-2"></em>
                                <span>.icon-compass</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-layers mr-2"></em>
                                <span>.icon-layers</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-menu mr-2"></em>
                                <span>.icon-menu</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-list mr-2"></em>
                                <span>.icon-list</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-options-vertical mr-2"></em>
                                <span>.icon-options-vertical</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-options mr-2"></em>
                                <span>.icon-options</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-down mr-2"></em>
                                <span>.icon-arrow-down</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-left mr-2"></em>
                                <span>.icon-arrow-left</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-right mr-2"></em>
                                <span>.icon-arrow-right</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-up mr-2"></em>
                                <span>.icon-arrow-up</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-up-circle mr-2"></em>
                                <span>.icon-arrow-up-circle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-left-circle mr-2"></em>
                                <span>.icon-arrow-left-circle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-right-circle mr-2"></em>
                                <span>.icon-arrow-right-circle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-arrow-down-circle mr-2"></em>
                                <span>.icon-arrow-down-circle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-check mr-2"></em>
                                <span>.icon-check</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-clock mr-2"></em>
                                <span>.icon-clock</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-plus mr-2"></em>
                                <span>.icon-plus</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-close mr-2"></em>
                                <span>.icon-close</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-trophy mr-2"></em>
                                <span>.icon-trophy</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-screen-smartphone mr-2"></em>
                                <span>.icon-screen-smartphone</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-screen-desktop mr-2"></em>
                                <span>.icon-screen-desktop</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-plane mr-2"></em>
                                <span>.icon-plane</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-notebook mr-2"></em>
                                <span>.icon-notebook</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-mustache mr-2"></em>
                                <span>.icon-mustache</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-mouse mr-2"></em>
                                <span>.icon-mouse</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-magnet mr-2"></em>
                                <span>.icon-magnet</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-energy mr-2"></em>
                                <span>.icon-energy</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-disc mr-2"></em>
                                <span>.icon-disc</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-cursor mr-2"></em>
                                <span>.icon-cursor</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-cursor-move mr-2"></em>
                                <span>.icon-cursor-move</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-crop mr-2"></em>
                                <span>.icon-crop</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-chemistry mr-2"></em>
                                <span>.icon-chemistry</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-speedometer mr-2"></em>
                                <span>.icon-speedometer</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-shield mr-2"></em>
                                <span>.icon-shield</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-screen-tablet mr-2"></em>
                                <span>.icon-screen-tablet</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-magic-wand mr-2"></em>
                                <span>.icon-magic-wand</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-hourglass mr-2"></em>
                                <span>.icon-hourglass</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-graduation mr-2"></em>
                                <span>.icon-graduation</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-ghost mr-2"></em>
                                <span>.icon-ghost</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-game-controller mr-2"></em>
                                <span>.icon-game-controller</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-fire mr-2"></em>
                                <span>.icon-fire</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-eyeglass mr-2"></em>
                                <span>.icon-eyeglass</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-envelope-open mr-2"></em>
                                <span>.icon-envelope-open</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-envelope-letter mr-2"></em>
                                <span>.icon-envelope-letter</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-bell mr-2"></em>
                                <span>.icon-bell</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-badge mr-2"></em>
                                <span>.icon-badge</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-anchor mr-2"></em>
                                <span>.icon-anchor</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-wallet mr-2"></em>
                                <span>.icon-wallet</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-vector mr-2"></em>
                                <span>.icon-vector</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-speech mr-2"></em>
                                <span>.icon-speech</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-puzzle mr-2"></em>
                                <span>.icon-puzzle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-printer mr-2"></em>
                                <span>.icon-printer</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-present mr-2"></em>
                                <span>.icon-present</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-playlist mr-2"></em>
                                <span>.icon-playlist</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-pin mr-2"></em>
                                <span>.icon-pin</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-picture mr-2"></em>
                                <span>.icon-picture</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-handbag mr-2"></em>
                                <span>.icon-handbag</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-globe-alt mr-2"></em>
                                <span>.icon-globe-alt</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-globe mr-2"></em>
                                <span>.icon-globe</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-folder-alt mr-2"></em>
                                <span>.icon-folder-alt</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-folder mr-2"></em>
                                <span>.icon-folder</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-film mr-2"></em>
                                <span>.icon-film</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-feed mr-2"></em>
                                <span>.icon-feed</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-drop mr-2"></em>
                                <span>.icon-drop</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-drawer mr-2"></em>
                                <span>.icon-drawer</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-docs mr-2"></em>
                                <span>.icon-docs</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-doc mr-2"></em>
                                <span>.icon-doc</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-diamond mr-2"></em>
                                <span>.icon-diamond</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-cup mr-2"></em>
                                <span>.icon-cup</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-calculator mr-2"></em>
                                <span>.icon-calculator</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-bubbles mr-2"></em>
                                <span>.icon-bubbles</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-briefcase mr-2"></em>
                                <span>.icon-briefcase</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-book-open mr-2"></em>
                                <span>.icon-book-open</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-basket-loaded mr-2"></em>
                                <span>.icon-basket-loaded</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-basket mr-2"></em>
                                <span>.icon-basket</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-bag mr-2"></em>
                                <span>.icon-bag</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-action-undo mr-2"></em>
                                <span>.icon-action-undo</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-action-redo mr-2"></em>
                                <span>.icon-action-redo</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-wrench mr-2"></em>
                                <span>.icon-wrench</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-umbrella mr-2"></em>
                                <span>.icon-umbrella</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-trash mr-2"></em>
                                <span>.icon-trash</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-tag mr-2"></em>
                                <span>.icon-tag</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-support mr-2"></em>
                                <span>.icon-support</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-frame mr-2"></em>
                                <span>.icon-frame</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-size-fullscreen mr-2"></em>
                                <span>.icon-size-fullscreen</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-size-actual mr-2"></em>
                                <span>.icon-size-actual</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-shuffle mr-2"></em>
                                <span>.icon-shuffle</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-share-alt mr-2"></em>
                                <span>.icon-share-alt</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-share mr-2"></em>
                                <span>.icon-share</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-rocket mr-2"></em>
                                <span>.icon-rocket</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-question mr-2"></em>
                                <span>.icon-question</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-pie-chart mr-2"></em>
                                <span>.icon-pie-chart</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-pencil mr-2"></em>
                                <span>.icon-pencil</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-note mr-2"></em>
                                <span>.icon-note</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-loop mr-2"></em>
                                <span>.icon-loop</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-home mr-2"></em>
                                <span>.icon-home</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-grid mr-2"></em>
                                <span>.icon-grid</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-graph mr-2"></em>
                                <span>.icon-graph</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-microphone mr-2"></em>
                                <span>.icon-microphone</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-music-tone-alt mr-2"></em>
                                <span>.icon-music-tone-alt</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-music-tone mr-2"></em>
                                <span>.icon-music-tone</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-earphones-alt mr-2"></em>
                                <span>.icon-earphones-alt</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-earphones mr-2"></em>
                                <span>.icon-earphones</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-equalizer mr-2"></em>
                                <span>.icon-equalizer</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-like mr-2"></em>
                                <span>.icon-like</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-dislike mr-2"></em>
                                <span>.icon-dislike</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-start mr-2"></em>
                                <span>.icon-control-start</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-rewind mr-2"></em>
                                <span>.icon-control-rewind</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-play mr-2"></em>
                                <span>.icon-control-play</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-pause mr-2"></em>
                                <span>.icon-control-pause</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-forward mr-2"></em>
                                <span>.icon-control-forward</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-control-end mr-2"></em>
                                <span>.icon-control-end</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-volume-1 mr-2"></em>
                                <span>.icon-volume-1</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-volume-2 mr-2"></em>
                                <span>.icon-volume-2</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-volume-off mr-2"></em>
                                <span>.icon-volume-off</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-calendar mr-2"></em>
                                <span>.icon-calendar</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-bulb mr-2"></em>
                                <span>.icon-bulb</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-chart mr-2"></em>
                                <span>.icon-chart</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-ban mr-2"></em>
                                <span>.icon-ban</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-bubble mr-2"></em>
                                <span>.icon-bubble</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-camrecorder mr-2"></em>
                                <span>.icon-camrecorder</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-camera mr-2"></em>
                                <span>.icon-camera</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-cloud-download mr-2"></em>
                                <span>.icon-cloud-download</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-cloud-upload mr-2"></em>
                                <span>.icon-cloud-upload</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-envelope mr-2"></em>
                                <span>.icon-envelope</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-eye mr-2"></em>
                                <span>.icon-eye</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-flag mr-2"></em>
                                <span>.icon-flag</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-heart mr-2"></em>
                                <span>.icon-heart</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-info mr-2"></em>
                                <span>.icon-info</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-key mr-2"></em>
                                <span>.icon-key</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-link mr-2"></em>
                                <span>.icon-link</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-lock mr-2"></em>
                                <span>.icon-lock</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-lock-open mr-2"></em>
                                <span>.icon-lock-open</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-magnifier mr-2"></em>
                                <span>.icon-magnifier</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-magnifier-add mr-2"></em>
                                <span>.icon-magnifier-add</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-magnifier-remove mr-2"></em>
                                <span>.icon-magnifier-remove</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-paper-clip mr-2"></em>
                                <span>.icon-paper-clip</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-paper-plane mr-2"></em>
                                <span>.icon-paper-plane</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-power mr-2"></em>
                                <span>.icon-power</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-refresh mr-2"></em>
                                <span>.icon-refresh</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-reload mr-2"></em>
                                <span>.icon-reload</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-settings mr-2"></em>
                                <span>.icon-settings</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-star mr-2"></em>
                                <span>.icon-star</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-symbol-female mr-2"></em>
                                <span>.icon-symbol-female</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-symbol-male mr-2"></em>
                                <span>.icon-symbol-male</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-target mr-2"></em>
                                <span>.icon-target</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-credit-card mr-2"></em>
                                <span>.icon-credit-card</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-paypal mr-2"></em>
                                <span>.icon-paypal</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-tumblr mr-2"></em>
                                <span>.icon-social-tumblr</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-twitter mr-2"></em>
                                <span>.icon-social-twitter</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-facebook mr-2"></em>
                                <span>.icon-social-facebook</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-instagram mr-2"></em>
                                <span>.icon-social-instagram</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-linkedin mr-2"></em>
                                <span>.icon-social-linkedin</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-pinterest mr-2"></em>
                                <span>.icon-social-pinterest</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-github mr-2"></em>
                                <span>.icon-social-github</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-google mr-2"></em>
                                <span>.icon-social-google</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-reddit mr-2"></em>
                                <span>.icon-social-reddit</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-skype mr-2"></em>
                                <span>.icon-social-skype</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-dribbble mr-2"></em>
                                <span>.icon-social-dribbble</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-behance mr-2"></em>
                                <span>.icon-social-behance</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-foursqare mr-2"></em>
                                <span>.icon-social-foursqare</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-soundcloud mr-2"></em>
                                <span>.icon-social-soundcloud</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-spotify mr-2"></em>
                                <span>.icon-social-spotify</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-stumbleupon mr-2"></em>
                                <span>.icon-social-stumbleupon</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-youtube mr-2"></em>
                                <span>.icon-social-youtube</span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <em className="fa-2x icon-social-dropbox mr-2"></em>
                                <span>.icon-social-dropbox</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }

}

export default FontIcons;