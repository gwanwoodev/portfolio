import React, {Component} from "react";
import Section from "./section";
import Tags from "./tags";
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection } from '@material/react-top-app-bar';
import Drawer, {DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import Link from "next/link";
import MaterialIcon from "@material/react-material-icon";

interface Props {
  iconClassName: string
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
                <Link href="/login">
                  <a className="mdc-list-href">
                    <ListItem>
                      <ListItemGraphic graphic={<MaterialIcon icon="lock" />} />
                      <ListItemText primaryText="Login" />
                    </ListItem>
                  </a>
                </Link>

              </List>
            </DrawerContent>
          </Drawer>


          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon className={this.props.iconClassName} hasRipple icon='home' onClick={() => location.href="/"}/>
              </TopAppBarIcon>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon 
                  aria-label="print page" 
                  hasRipple 
                  className={this.props.iconClassName}
                  icon='menu' 
                  onClick={() => this.setState({open: ! this.state.open})}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
          <Section />
          <Tags />
        </TopAppBar>
      </div>
    )
  }
}

export default MyAppHeader;