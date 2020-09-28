import React from 'react';
import Color from './components/base/color'
import Typography from './components/base/typography'
import Grid from './components/base/grid'
import Button from './components/base/buttons'
import Card from './components/base/card'
import Avatar from './components/base/avatar'
import Form from './components/base/form'
import Pagination from './components/base/pagination'
import Shadow from './components/base/shadow'
import Radius from './components/base/radius'
import Spacing from './components/base/spacing'
import Menu from './components/base/menu'
import Icons from './components/base/icons'
const App = () => {
  return (
    <div className="App">
      <Color />
      <Typography />
      <Grid />
      <Button />
      <Card />
      <Avatar />
      <Form />
      <Pagination />
      <Shadow />
      <Spacing />
      <Radius />
      <Menu />
      <Icons />
    </div>
  );
}

export default App;
