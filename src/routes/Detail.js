import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;

        if (location.state) {
            return (
                <div className="detail_container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="inner_container">
                        <h1>{location.state.title}</h1>
                        <h3 className="year">{location.state.year}</h3>
                        <div className="genres">
                            {
                                location.state.genres.map((genre, index) => {
                                    return <li key={index}>{genre}</li>
                                })
                            }
                        </div>
                        <p className="summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;