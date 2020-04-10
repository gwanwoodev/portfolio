import React, {Component} from "react";
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection } from '@material/react-top-app-bar';
import Drawer, {DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from "@material/react-material-icon";
import Section from "../components/section";
import Tags from "../components/tags";

interface Props {
  iconClassName?: string,
  loggedIn: boolean
}

const isLoggedMenu = (isLogged: boolean) => {
  const href = isLogged ? "/logout" : "/login";
  const hrefText = isLogged ? "Logout" : "Login"

  const comp = <a href={href} className="mdc-list-href">
    <ListItem>
      <ListItemGraphic graphic={<MaterialIcon icon="lock" />} />
      <ListItemText primaryText={hrefText} />      
    </ListItem>
  </a>

  return comp;

}

class MyAppHeader extends Component<Props> {
  state = {
    selectedIndex: 0,
    open: false
  };
  constructor(props: Props) {
    super(props);
  }


  render() {
    return(
      <div className="wrapper-header">
        <TopAppBar>
          <Drawer
            modal
            open={this.state.open}
            onClose={()=> this.setState({open: false})}
          >
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
              <List singleSelection selectedIndex={this.state.selectedIndex} handleSelect={(selectedIndex) => this.setState({selectedIndex})}>
                <a target="_blank" href="https://gwanwoodev.github.io" className="mdc-list-href">
                  <ListItem>
                    <ListItemGraphic graphic={<MaterialIcon icon="link" />} />
                    <ListItemText primaryText="Blog" />
                  </ListItem>
                </a>

                <a target="_blank" href="https://github.com/gwanwoodev" className="mdc-list-href">
                  <ListItem>
                    <ListItemGraphic graphic={<MaterialIcon icon="link" />} />
                    <ListItemText primaryText="Github" />
                  </ListItem>
                </a>                

                <a target="_blank" href="https://gwanwoodev.github.io/contact" className="mdc-list-href">
                  <ListItem>
                    <ListItemGraphic graphic={<MaterialIcon icon="link" />} />
                    <ListItemText primaryText="Contact" />
                  </ListItem>                                
                </a>
                { this.props.loggedIn ? 
                  <a href="/admin" className="mdc-list-href">
                    <ListItem>
                      <ListItemGraphic graphic={<MaterialIcon icon="dashboard" />} />
                      <ListItemText primaryText="Dashboard" />      
                    </ListItem>
                  </a> : null}
                { isLoggedMenu(this.props.loggedIn) }


              </List>
            </DrawerContent>
          </Drawer>


          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                  <MaterialIcon className="mdc-custom-icon" hasRipple icon='home' onClick={()=> location.href="/" }/>
              </TopAppBarIcon>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon 
                  aria-label="print page" 
                  hasRipple 
                  className="mdc-custom-icon"
                  icon='menu' 
                  onClick={() => this.setState({open: ! this.state.open})}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <Section />
        <Tags />
      </div>
    )
  }
}

export default MyAppHeader;