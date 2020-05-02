//  DirectoryComponent.js
//  A "presentational" component which renders UI state is inherited and not maintained locally
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                    {/* <Card onClick={() => this.onCampsiteSelect(campsite)}> */}
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <CampsiteInfo campsite={this.state.selectedCampsite} /> */}
            </div>
        );
    }
}

export default Directory;