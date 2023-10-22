function MyName(props) {
    return (<div>Hello, {props.nam}!</div>);
}

MyName.defaultProps = {
    name: "World"
};

export default MyName;