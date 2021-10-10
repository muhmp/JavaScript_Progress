class UserInformation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/userinformation")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              items: result.items
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }
  
    render() {
      const { error, items } = this.state;
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.description}
              </li>
            ))}
          </ul>
        )
    }
  }