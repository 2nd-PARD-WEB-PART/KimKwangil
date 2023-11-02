function MyName(props) {
    return (<div>Hello, {props.name}!</div>);
}

MyName.defaultProps = {
    name: "World"
};

export default MyName;