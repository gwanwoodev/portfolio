import React, {Component} from "react";
import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection } from '@material/react-top-app-bar';
import MaterialIcon from "@material/react-material-icon";
import Section from "./section";
import Tags from "./tags";

interface Props {
  iconClassName: string
}

class MyAppHeader extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <div className="wrapper-header">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon className={this.props.iconClassName} hasRipple icon='home' onClick={() => console.log('click')}/>
              </TopAppBarIcon>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon 
                  aria-label="print page" 
                  hasRipple 
                  className={this.props.iconClassName}
                  icon='menu' 
                  onClick={() => console.log('print')}
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