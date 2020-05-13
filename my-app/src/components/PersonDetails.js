import React, {Component} from 'react';

class PersonDetails extends Component{
    render() {
        return(
            <div className="person-details">
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonDetails;
