import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/MenuItem"

const SushiMenu = () => {
  return (
    <Layout>
      <SEO title="sushi-menu" />
      <div className="menu">
        <MenuItem
          title={"Hamachi Nigiri"}
          description="Fresh cut Hamachi nigiri sushi.  Lightly brushed with Shoyu with a touch of Wasabi"
        />
        <MenuItem
          title={"Ahi Nigiri"}
          description="Fresh cut Hamachi nigiri sushi.  Lightly brushed with Shoyu with a touch of Wasabi"
        />
        <MenuItem
          title={"Salmon Nigiri"}
          description="Fresh cut Hamachi nigiri sushi.  Lightly brushed with Shoyu with a touch of Wasabi"
        />
      </div>
    </Layout>
  )
}

export default SushiMenu
