import React from 'react'
import Category from '~/components/Category'
import Categorybtn from '~/components/Categorybtn'
import Featurestore from '~/components/Featurestore'
import News from '~/components/News'
import Products from '~/components/Products'
import SiteHome from '~/components/site-home'

function Homepage() {
  return (
    <div>
      <SiteHome /> 
      <Category />
      <Products />
      <Featurestore/>
      <Categorybtn/>
    </div>
  )
}

export default Homepage