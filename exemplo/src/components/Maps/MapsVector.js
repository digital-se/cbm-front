import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

import VectorMap from './VectorMap';

const defaultColors = {
    markerColor:  '#23b7e5',      // the marker points
    bgColor:      'transparent',  // the background
    scaleColors:  ['#878c9a'],    // the color of the region in the serie
    regionFill:   '#bbbec6'       // the base region color
};

const RegionValues = {
    'CA': 11100,   // Canada
    'DE': 2510,    // Germany
    'FR': 3710,    // France
    'AU': 5710,    // Australia
    'GB': 8310,    // Great Britain
    'RU': 9310,    // Russia
    'BR': 6610,    // Brazil
    'IN': 7810,    // India
    'CN': 4310,    // China
    'US': 839,     // USA
    'SA': 410      // Saudi Arabia
}

class MapsVector extends Component {

    state = {
        series: {
            regions: [{
                values: RegionValues,
                scale: defaultColors.scaleColors,
                normalizeFunction: 'polynomial'
            }]
        },
        markers: [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
        ],
        options: {
            map: 'world_mill_en',
            backgroundColor: defaultColors.bgColor,
            zoomMin: 1,
            zoomMax: 8,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    'fill': defaultColors.regionFill,
                    'fill-opacity': 1,
                    'stroke': 'none',
                    'stroke-width': 1.5,
                    'stroke-opacity': 1
                },
                hover: {
                    'fill-opacity': 0.8
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {}
            },
            focusOn: {
                x: 0.4,
                y: 0.6,
                scale: 1
            },
            markerStyle: {
                initial: {
                    fill: defaultColors.markerColor,
                    stroke: defaultColors.markerColor
                }
            },
            onRegionLabelShow: (e, el, code) => {
                if (RegionValues[code])
                    el.html(el.html() + ': ' + RegionValues[code] + ' visitors');
            }
        }
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Vector Maps
                        <small>Resolution independent maps</small>
                    </div>
                </div>
                <VectorMap height="700px" options={this.state.options} series={this.state.series} markers={this.state.markers}/>
            </ContentWrapper>
        );
    }

}

export default MapsVector;
