import TopAppBar, { TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@material/react-top-app-bar';
import MaterialIcon from "@material/react-material-icon";

const MyAdminHeader = () => (
    <div className="wrapper-admin-header">
        <TopAppBar className="mdc-admin-top-bar">
            <TopAppBarRow>
            <TopAppBarSection align='start'>
                <TopAppBarIcon navIcon tabIndex={0}>
                    <MaterialIcon className="mdc-custom-icon" icon='dashboard' hasRipple/>
                </TopAppBarIcon>
                <TopAppBarTitle>DashBoard</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
                <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon 
                    aria-label="print page" 
                    hasRipple 
                    className="mdc-custom-icon"
                    icon='add' 
                />
                </TopAppBarIcon>
            </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
    </div>
)

export default MyAdminHeader;