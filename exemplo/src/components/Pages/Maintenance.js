import React from 'react';

const Maintenance = props => (
    <div className="abs-center">
        <div className="text-center my-3">
            <h1 className="mb-3">
                <sup>
                    <em className="fa fa-cog fa-2x text-muted fa-spin text-info"></em>
                </sup>
                <em className="fa fa-cog fa-5x text-muted fa-spin text-purple"></em>
                <em className="fa fa-cog fa-lg text-muted fa-spin text-success"></em>
            </h1>
            <div className="text-bold text-lg mb-3">SITE IS UNDER MAINTENANCE</div>
            <p className="lead m-0">We'll back online shortly!</p>
        </div>
    </div>
)

export default Maintenance;
