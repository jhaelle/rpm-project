import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import './styles.css'

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='Note de satisfaction' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='Sortie équipe' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
        <Menu.Item name='Admin' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Français</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;