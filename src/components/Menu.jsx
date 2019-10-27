import React from 'react'
import { Menu } from 'semantic-ui-react'


const MenuComponent = ({ totalPrice , count}) => (
    <Menu>
            <Menu.Item name='browse'  >
            Book shoop
            </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'  >
              Total: &nbsp; <b>{totalPrice}</b> &nbsp; rub.
            </Menu.Item>

            <Menu.Item name='help' >
              Cart (<b>{count}</b>)
             </Menu.Item>
      </Menu.Menu>
</Menu>
)


export default MenuComponent;
