import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/MenuItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="menu">
      <div>
        <h1 className="menu__title">To Start</h1>
        <MenuItem
          title={"Korean Side Dishes (Banchan)"}
          description="Fresh sliced cabbage Kimchi, spicy dried squid (taegu), japanese pickled Cucumber, seaweed salad"
        />
        <MenuItem
          title={"Miso Soup"}
          description="Dashi with white miso, green onion, and tofu"
        />
        <MenuItem
          title={"Korean Style Dumplings (Mandu)"}
          description="Chicken or Pork mixed with vegetables, set in a traditional dumpling wrapper"
        />
      </div>
      <div>
        <h1 className="menu__title">Main Courses</h1>
        <MenuItem
          title={"Jalapeno Hamachi"}
          description=" Thinly sliced hamachi set in garlic yuzu soy topped with jalapeño, garlic chips, and a little bit of cilantro in for added texture"
        />
        <MenuItem
          title={"Shibuya Salmon Special"}
          description="Fresh cut Atlantic salmon nigiri with our house made torched garlic aioli, and garnished with scallions, onion, and himeji tobiko 
"
        />
        <MenuItem title={"Agedashi Tofu"} description="" />
        <MenuItem
          title={"Wagyu nigiri"}
          description="Thinly sliced Aomori wagyu nigiri torched and served with our tamanegi ponzu sauce. Topped with scallions and Himeji Tobiko"
        />
        <MenuItem
          title={"Hayami Salmon Taco"}
          description="Raw cubed Atlantic salmon and avocado in a spicy gochujang sauce. Topped with scallion and Himeji Tobiko "
        />
        <MenuItem
          title={"The Stryklybzness Bomb"}
          description="Spicy salmon maki sushi. Topped with Takuan, scallions, Tobiko, and unagi sauce"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
