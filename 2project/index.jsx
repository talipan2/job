  
  const Header = props => {
    return (
      <header className="welcome-section">
       <div className="forest" ><img className="img" src="http://faunazoo.ru/wp-content/uploads/2020/12/%D0%9F%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA-%D0%A8%D0%B5%D0%BB%D1%82%D0%B8.jpg?sanitize=true" alt="" /></div>         

        
      </header>
    );
  };
  
  
   
    
    
    
  
 /***********************
    Main Component
   ***********************/
  
    class App extends React.Component {
      state = {
        menuState: false
      };
    
      toggleMenu = () => {
        this.setState(state => ({
          menuState: !state.menuState
            ? 'active'
            : state.menuState === 'deactive'
              ? 'active'
              : 'deactive'
        }));
      };
    
      render() {
        return (
          <React.Fragment>
            <Header />
          </React.Fragment>
        );
      }
    
      componentDidMount() {
        const header = document.querySelector('#welcome-section');
        let forestInitPos = -300;
    
   
    
        
      }
    }
    
    
    ReactDOM.render(<App />, document.getElementById('app'));