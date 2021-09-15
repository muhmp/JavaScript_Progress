//There is an issue within an eCommerce React.js application with how 
//setState is updated, as the DOM does not reflect the latest changes 
//from a shopping cart button click. Based on the sample code below, 
//which of the following statements are correct?

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      this.refBtn.addEventListener("click", this.onClick);
    }
  
    componentWillUnmount() {
      this.refBtn.removeEventListener("click", this.onClick);
    }
  
    onClick = () => {
      this.setState({count: this.state.count + 1});
    };
  
    render() {
      return (
        <div>
          <button onClick={this.onClick}>Add</button>
        </div>
      );
    }
  }