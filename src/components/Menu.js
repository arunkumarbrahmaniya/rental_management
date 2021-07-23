import React,{useState, useEffect} from 'react';
import { Menu } from 'antd';
import config from '../commonJSON/catalog.json';
const { SubMenu } = Menu;

const CustomisedMenu = ({handleMenu}) => {
    const [catalogData, setCatalogData] = useState('');
    const [categories, setCategories] = useState('');
    useEffect(() => {
        setCatalogData(config.data.locations);
    }, []);
    function handleClick(e) {
        console.log('click', e);
    }
    // const handleMenu = (categories) => {
    //     debugger

    // }
    console.log("JSON", config)
    return (
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
            {
               catalogData && catalogData.map((data) => {
                    return <SubMenu key={data.name} title={data.name}>
                        {
                            data.branches.map((submenu) => {
                                return <Menu.Item key={submenu.branch_id} onClick={() => handleMenu(submenu.categories)}>{submenu.name}</Menu.Item>
                            })
                        }
                    </SubMenu>
                })
            }
        </Menu>
    )
}

export default CustomisedMenu;