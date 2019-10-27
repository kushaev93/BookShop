import React from 'react';
import { Input, Menu } from 'semantic-ui-react'




const Filter = ({setFilter , filterBy , searchQuery , setSearchQuery}) => (
        <Menu secondary>
          <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this , 'all')}
          >Все</Menu.Item>
          <Menu.Item
            active={filterBy === 'expensive'}
            onClick={setFilter.bind(this , 'expensive')}
          >Дорогие</Menu.Item>
          <Menu.Item
            active={filterBy === 'cheap'}
            onClick={setFilter.bind(this , 'cheap')}
          >Дешёвые</Menu.Item>
          <Menu.Item
            active={filterBy === 'author'}
            onClick={setFilter.bind(this , 'author')}
          >Автор</Menu.Item>
          <Menu.Item>
          <Input icon="search" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}></Input>
          </Menu.Item>
        </Menu>
    )
export default Filter;
