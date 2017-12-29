class Grade extends React.Component {

    componentWillMount() {
        if (!this.props.data || !this.props.data.Id || this.props.data.Id <= 0)
            return;
    }

    render() {

        return (
            <div>
                <div>
                    <div> Id: {this.props.data.Id}</div>
                    <div> Description: {this.props.data.Description}</div>
                </div>

                <div>
                    <div> id: {this.props.data.id}</div>
                    <div> description: {this.props.data.description}</div>
                </div>
            </div>
        );
    }

};
