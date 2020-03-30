import React, {Component} from "react";
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection } from '@material/react-top-app-bar';
import Drawer, {DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import MaterialIcon from "@material/react-material-icon";
import Section from "./section";
import Tags from "./tags";

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
              <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
              <List singleSelection selectedIndex={this.state.selectedIndex}>
                <ListItem>
                  <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
                  <ListItemText primaryText="Primary Text" />
                </ListItem>
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

        </TopAppBar>
        <Section />
        <Tags />
      </div>
    )
  }
}

export default MyAppHeader;