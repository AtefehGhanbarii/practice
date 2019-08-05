
export default (component, event) => {
    component.setState({ [event.target.name]: event.target.value });
};