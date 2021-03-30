import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/MenuItem"

const DrinkMenu = () => {
  return (
    <Layout>
      <SEO title="drink-menu" />
      <div className="drink-menu">
        <h1 className="drink-menu__title">Signature Cock-Tails</h1>
        <MenuItem
          title="Love Language"
          description="Vodka, Lavender syrup Lemon juice, Elderflower syrup, & Ginger Beer"
        />
      </div>
      <MenuItem title="Jazzy FKN Honey" description="Bourgon, Honey, & Lemon" />
      <MenuItem
        title="Aries in a Glass"
        description="Tequila & Grapefruit Juice"
      />
    </Layout>
  )
}

export default DrinkMenu
