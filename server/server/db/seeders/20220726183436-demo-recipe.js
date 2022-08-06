"use strict";

const {setGlobalDBConfig} = require("../config/helpers");
module.exports = {
  async up(queryInterface, Sequelize) {
    await setGlobalDBConfig(queryInterface);
    await queryInterface.bulkInsert(
        "Recipes",
        [
          {
            "recipeName": "Mascarpone cheese tart",
            "description": "Mascarpone cheese tart with Oreo white chocolate ganache, sweet and sour cream",
            "instructions": "In a mixer bowl with a guitar hook, put flour and butter and mix until you get fine crumbs. Add the almonds and powdered sugar and mix for a few seconds .Add salt, vanilla and eggs and mix just until combined. Roll out the dough between two sheets of baking paper to a thickness of about 3 mm and refrigerate for a few hours. Line two 18-20 cm diameter rings with the cold dough and transfer to the freezer for half an hour. Bake the kelts at 160 degrees without weights for about 10 minutes and cool. Mix all the ingredients together in a mixer with a guitar hook until you get a smooth mixture without lumps. The mixture is runny and that's fine. Pour the filling into the half-baked cakes up to the edge of the tart and carefully transfer to the oven. Bake for 10 minutes at 160 degrees and another 10 minutes at 140 degrees until the filling is set. Cool completely. Heat the sour cream in a pot until it boils. Pour the cream on top of the chocolate and mix until you get a smooth ganache. It is advisable to blend with a stick blender and make sure there are no lumps in the ganache. Add in the sweet cream when it is cold. Wrap the surface of the ganache with plastic wrap and transfer to the refrigerator for a few hours. Whip the ganache to a very firm cream and transfer to a piping bag with a closed star center. On top of the tart, sprinkle closed rings of ganache to obtain the shape of the roses. Cover the entire tart with roses, dust with a little powdered sugar and decorate with chocolate decorations or candied citrus peels",
            "image": "ngpwwkmascarponeCheeseTart.jpg",
            "cookingTime": "01:00",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Apricot pie",
            "description": "Apricot pie with almond cream and poppy seed",
            "instructions": "Mix all the ingredients in a mixer with a guitar hook into a soft dough. Keep in plastic wrap in the refrigerator for 20 minutes. Roll out the dough to a thickness of 4-5 mm and line a narrow greased rectangular pan. Keep in the refrigerator. for the almond cream. Mix all the ingredients and set aside. for filling and assembling the dish. Remove the dough from the refrigerator and fill the dough with a 3 mm thick layer of almond cream. Lightly caramelize the apricot halves in a pan with 30 g of butter and add the rosemary leaves. Arrange the apricots nicely with the back to the cream in rows and rows. Gently sprinkle some poppy seeds and touches of apricot jam Pour some cream with a spoon in a row in the center of the pie. Put in a preheated oven at 180 degrees for 35-40 minutes and take out. Refrigerate and sprinkle powdered sugar along the long side of the pie.",
            "image": "08u6blapricotPie.jpg",
            "cookingTime": "02:00",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Wool bread",
            "description": "Wool bread filled with parmesan and garlic butter",
            "instructions": "In a mixer bowl with a guitar hook, put flour and butter and mix until you get fine crumbs. Add the almonds and powdered sugar and mix for a few seconds. Add salt, vanilla and eggs and mix just until combined. Roll out the dough between two sheets of baking paper to a thickness of about 3 mm and refrigerate for a few hours. Line two 18-20 cm diameter rings with the cold dough and transfer to the freezer for half an hour. Bake the kelts at 160 degrees without weights for about 10 minutes and cool. Sift the flour into a bowl. Add salt and sugar and mix well for complete assimilation. Add the yeast and mix well again. Connect the kneading hook and slowly add the oil. Add the water, add the last quarter of the cup gradually until the dough absorbs all the liquid. If necessary, add more water, spoon by spoon, to obtain a soft, flexible and pleasant dough. Put at medium speed for 10-15 minutes until the dough becomes flexible and very pleasant. Transfer to a clean lightly oiled bowl, roll the dough in the bowl so that it is well oiled. Cover and let it rise until it doubles in volume (one and a half to two hours). Mix very soft butter with the chopped garlic and basil into a uniform and very soft mixture that is easy to spread. Grease a 20 cm diameter baking dish well. Divide the dough into equal balls (120-150 grams). Roll each part into an oval. Cut the lower half into thin strips using parchment paper or a pizza wheel. Spread the desired filling on the top (for sweet filling - Nutella and chocolate spread, for salty filling - soft butter and grated cheese). Close different secondary and roll from the closed part down into a cylinder shape. Place the rolls on the side of the mold to form a ring shape. Cover and let rise until doubled in volume (about an hour). Heat the oven to 175 degrees. Brush gently with the beaten egg. Bake for 25-30 minutes until the pastry is golden and very puffy. Remove from the oven, brush the salty map again with garlic butter. Cool slightly and serve.",
            "image": "9rk6awoolBread.jpg",
            "cookingTime": "02:30",
            "categoryId": 24,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Strawbery jam filled cookies",
            "description": "Strawbery jam filled cookies",
            "instructions": "Mix all the ingredients together",
            "image": "o4jhxstrawberyCookies.jpg",
            "cookingTime": "01:00",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Black forest cake",
            "description": "Black forest cake with chocolate and cherries",
            "instructions": "Heat an oven to 170 degrees and grease a mold. In the mixer bowl with the whisk attachment, beat egg whites and salt until white foam begins to form. Add the sugar gradually, while whipping, and continue whipping until you get a stable, but not too hard, whipping. In a separate bowl, whisk together egg yolks, brandy and vanilla. Add the yolk mixture into the egg whites, while slowly whipping, until a uniform mixture is obtained. Sift in flour, cocoa and baking powder and gently fold until a uniform batter is obtained. Pour the batter into the pan and bake for about 30-35 minutes or until a toothpick inserted in the center comes out dry. Cool the cake completely and slice across it into 3 layers using a serrated knife. Cherry syrup: In a small pot, place water and sugar together and bring to a boil. Cook further for 2-3 minutes after boiling, until all the sugar has dissolved. Remove from the heat and cool for about 10 minutes at room temperature. Contains cherry liqueur and mix well Whipped chocolate ganache: chop chocolate and place a small control. In a small pot, place 250 ml of sweet cream and bring to the boil. Pour the boiling cream on top of the chopped chocolate, wait about a minute and whisk until you get a uniform and glossy ganache. Cool the ganache in the refrigerator for about 2-3 hours or until it is completely cold. Transfer the mixture Pour the cold ganache into a mixing bowl with the whisk, add 125 ml of sweet cream and whip at high speed until a stable cream is obtained. It is important to be careful of over whipping. Assembling the cake: place a layer of chocolate torte on a serving plate and generously brush it with the cherry syrup. Pour about half of the amount of chocolate cream on top of the torte and level with a spatula. Sprinkle half of the amount of cherries and close with another layer of torte. Brush the torte with syrup, pour the rest of the chocolate cream, straighten and sprinkle with the rest of the cherries. Close with a third layer of torte and brush with syrup. Whipped cream: in the bowl of a mixer with the whipping balloon, whip together sweet cream, sugar and vanilla until a firm whipped cream is obtained. Cover the cake with whipped cream on the sides and top and level with a spatula. Leave about 1/3 of the whipped cream for decoration. Stick grated dark chocolate on the sides.",
            "image": "nd5ntBlackForest.PNG",
            "cookingTime": "03:00",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Almond and pear pie",
            "description": "Almond and pear pie",
            "instructions": "Dough: mix cold butter and flour into crumbs, add almond powder, powdered sugar, lemon zest and egg until combined. Almond cream: mix egg, butter, sugar, ground almonds and cornflour. Pears: cut pears into segments. Fill the pie pan with the dough, put the almond cream on it and the ace slices on top, put it in the oven at 180 for 45 minutes.",
            "image": "d3mv7AlmondPear.PNG",
            "cookingTime": "0:40",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Ciabatta",
            "description": "Ciabatta-Italian bread",
            "instructions": "Put all the dough ingredients  the mixer bowl until a very soft but uniform dough is obtained. Start with half the amount of water and then slowly add the rest, you may not need the entire amount. Leave for 10-12 minutes and transfer the dough to a bowl lightly greased with olive oil. Let the dough rise for half an hour, then fold, with the help of your hand, in circular movements and start to lift the part The outside of the dough to the inside, that is, to the center of the dough. Repeat the operation two more times to fold, cover again and let it rise again for another half hour. Again, fold the dough inside the bowl two or three times, and cover again. Put in the fridge for 24 hours. Take the dough out of the fridge and let it rest outside for half an hour. Heat the oven to 230 degrees. on a floured surface, Turn the bowl over the dough, making sure to do it gently so that we have as much air as possible left in the dough Using a metal sheet, divide the dough in half widthwise, then lengthwise into equal squares, from the amount This gave me 10 jabatas. Flour the jabatas on top, and place them on the oven tray. When you put it in the oven, throw some ice cubes into the mold at the bottom to create steam that gives the dough. Bake for about 15-20 minutes until the gabettas are brown in appearance also in their lower part. Take out and cool completely.",
            "image": "66h42Ciabatta.PNG",
            "cookingTime": "02:30",
            "categoryId": 24,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Garlic butter and mozzarella slugs",
            "description": "Garlic butter and mozzarella slugs",
            "instructions": "Mix flour and dry yeast in a mixer, turn the mixer on low speed and add white sugar, salt, eggs and oil. Add the water little by little until the dough forms a ball (if necessary, add another tablespoon or two), and knead for 10 minutes until you get a soft and flexible dough. Transfer the dough to a greased bowl, cover with plastic wrap and a towel and place in a warm place to rise for an hour and a half to two hours. Meanwhile, mix butter and garlic to create garlic butter. Prepare an oblong bowl with some water and a bowl with sesame seeds. Take out the risen dough to a work surface and divide it in half. Lightly flour the surface and roll out one of the dough parts into a thin rectangle. Using a palette or spatula, spread half of the amount of butter on the rectangle evenly. Sprinkle half of the amount of mozzarella and, using a pizza roller, cut the rectangle crosswise into strips 2 cm wide and roll each strip of dough into a snail (you can alternatively roll the whole dough into a roulade and then slice it into roses). Dip the outside of each snail in water. Transfer to the sesame bowl and roll it with sesame seeds. Place the snail on the work surface and with the palm of your hand, crush it so that it flattens a little. Repeat the operations with all the snails and then with the other part of the dough, and arrange the snails in a pan lined with baking paper or greased. Cover with a towel and leave to rise again for 30-40 minutes. Meanwhile, heat the oven to 180 degrees. Bake the snails for about 25 minutes, until they are nicely browned. Serve hot.",
            "image": "d5jnhhgarlicMozzarella.PNG",
            "cookingTime": "01:00",
            "categoryId": 14,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "Dulce de leche and almonds cake",
            "description": "Dulce de leche cake with rum syrup and banana liqueur, vanilla mascarpone cream and caramelized hazelnuts",
            "instructions": "Heat the oven to 170 degrees and grease the molds. In a large bowl, beat together eggs, sugar, vanilla, cinnamon, salt, sour cream and oil until a uniform mixture is obtained. Add flour, almond powder and baking powder and beat just until uniform. Pour about 1/2 of the batter into the bottom of the 2 molds. Using a spoon, create small mounds of milk jam on top of the batter in each mold. Cover with the remaining batter.",
            "image": "f37qgDulceDeLeche.PNG",
            "cookingTime": "01:30",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "recipeName": "butter cream-cinnamon-almonds brioche",
            "description": "Brioche filled with butter cream-cinnamon-almonds and caramel glaze",
            "instructions": "Place flour, sugar, salt, yeast, butter, milk, vanilla extract and eggs in the bowl of a mixer with a kneading hook and knead for 10 minutes until a uniform and slightly sticky dough is obtained. Cover with non-stick plastic and let the dough rise for 1-2 hours until it doubles in volume. You can let the dough rise in the fridge overnight. Prepare the cinnamon-pecan stuffing. Place the softened butter in a bowl and, using a hand whisk, whip it into a cream. Add sugar and cinnamon and mix well.",
            "image": "m9fc4kbriocheCinnamon.PNG",
            "cookingTime": "02:30",
            "categoryId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
          }
        ],
        {}
    );
  },

  async down(queryInterface, Sequelize) {
    await setGlobalDBConfig(queryInterface);
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true})
    await queryInterface.bulkDelete("Recipes", null, {truncate: true, cascade: true});
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
  },
};
