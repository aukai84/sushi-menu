import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/MenuItem"

const SushiMenu = () => {
  return (
    <Layout>
      <SEO title="sushi-menu" />
      <div className="menu">
        <h1 className="menu__title">Sushi</h1>
        <MenuItem
          title={"Hamachi Nigiri"}
          description="Fresh cut Hamachi nigiri sushi.  Lightly brushed with shoyu with a touch of wasabi"
        />
        <MenuItem
          title={"Ahi Nigiri"}
          description="Fresh cut Ahi sushi.  Lightly brushed with shoyu with a touch of wasabi"
        />
        <MenuItem
          title={"Salmon Nigiri"}
          description="Fresh cut Salmon nigiri sushi.  Lightly brushed with shoyu with a touch of wasabi"
        />
        <MenuItem
          title={"Jalapeno Hamachi"}
          description=" thinly sliced hamachi set in yuzu soy topped with jalapeño and a little bit of cilantro in for added texture "
        />
        <MenuItem
          title={"Hayami Wagyu Taco"}
          description="Aomori wagyu cooked and served with tamanegi, topped with cilantro onion in our crispy taco shells."
        />
      </div>
    </Layout>
  )
}

export default SushiMenu
