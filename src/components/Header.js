import React from 'react';
import { PageHeader, Button, Dropdown } from 'antd';
import CustomisedMenu from './Menu';
const Header = ({handleMenu}) => {
    const menu = <CustomisedMenu handleMenu={(e)=>handleMenu(e)}/>
    return (
        <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="Rental Management System"
          extra={[
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button style={{marginRight:400}}>Select Location</Button>
            </Dropdown>,
          ]}
            >
                
        </PageHeader>
      </div>
    )
}

export default Header;