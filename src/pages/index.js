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
          description="Chicken or Pork mixed with vegetables, set in a traditional won ton wrapper. Served with our dumpling sauce"
        />
      </div>
      <div>
        <h1 className="menu__title">Main Courses</h1>
        <MenuItem
          title={"Jalapeno Hamachi"}
          description=" Thinly sliced hamachi set in garlic yuzu soy topped with thinly sliced jalapeño, garlic chips, and a little bit of cilantro in for added texture"
        />
        <MenuItem
          title={"Shibuya Salmon Special"}
          description="Fresh cut Atlantic salmon nigiri with our house made torched garlic aioli, and garnished with scallions, onion, and himeji tobiko 
"
        />
        <MenuItem
          title={"Agedashi Tofu"}
          description="Lightly fried tofu set in a soy dashi sauce (tsuyu), topped with green onion, shaved daikon, shaved ginger, and bonito flakes"
        />
        <MenuItem
          title={"Spicy Poke Crispy Rice"}
          description="Crispy sushi rice, topped with fresh avocado, our homemade spicy poke, thinly sliced jalapeño, and drizzled with unagi sauce"
        />
        <MenuItem
          title={"Osaka Sashimi Salad"}
          description="Freshly sliced sashimi over a bed of mixed greens and sprouts topped with olive oil, balsamic, crispy capers, and lemon zest"
        />
        <MenuItem
          title={"Poke Tacos"}
          description="Our homemade poke mixed in a spicy gochujang sauce, topped with green onion and tobiko"
        />
        <MenuItem
          title={"Miso Chilean Sea Bass"}
          description="Chilean Sea Bass marinated with miso, soy, and mirin. Broiled and topped with green onion and crispy won ton strips"
        />
        <MenuItem
          title={"Ribeye Kalbi"}
          description="Ribeye marinated with our homemade kalbi recipe. Seared and thinly sliced. Topped with garlic chips and green onion. Served with a daikon ponzu sauce"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
