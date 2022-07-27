"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          recipeName: "Mascarpone cheese tart",
          description:
            "Mascarpone cheese tart with Oreo white chocolate ganache, sweet and sour cream",
          instructions:
            "In a mixer bowl with a guitar hook, put flour and butter and mix until you get fine crumbs. Add the almonds and powdered sugar and mix for a few seconds .Add salt, vanilla and eggs and mix just until combined. Roll out the dough between two sheets of baking paper to a thickness of about 3 mm and refrigerate for a few hours. Line two 18-20 cm diameter rings with the cold dough and transfer to the freezer for half an hour. Bake the kelts at 160 degrees without weights for about 10 minutes and cool. Mix all the ingredients together in a mixer with a guitar hook until you get a smooth mixture without lumps. The mixture is runny and that's fine. Pour the filling into the half-baked cakes up to the edge of the tart and carefully transfer to the oven. Bake for 10 minutes at 160 degrees and another 10 minutes at 140 degrees until the filling is set. Cool completely. Heat the sour cream in a pot until it boils. Pour the cream on top of the chocolate and mix until you get a smooth ganache. It is advisable to blend with a stick blender and make sure there are no lumps in the ganache. Add in the sweet cream when it is cold. Wrap the surface of the ganache with plastic wrap and transfer to the refrigerator for a few hours. Whip the ganache to a very firm cream and transfer to a piping bag with a closed star center. On top of the tart, sprinkle closed rings of ganache to obtain the shape of the roses. Cover the entire tart with roses, dust with a little powdered sugar and decorate with chocolate decorations or candied citrus peels",
          image: "mascarponeCheeseTart.jpg",
          cookingTime: "01:00",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeName: "Apricot pie",
          description: "Apricot pie with almond cream and poppy seed",
          instructions:
            "Mix all the ingredients in a mixer with a guitar hook into a soft dough. Keep in plastic wrap in the refrigerator for 20 minutes. Roll out the dough to a thickness of 4-5 mm and line a narrow greased rectangular pan. Keep in the refrigerator. for the almond cream. Mix all the ingredients and set aside. for filling and assembling the dish. Remove the dough from the refrigerator and fill the dough with a 3 mm thick layer of almond cream. Lightly caramelize the apricot halves in a pan with 30 g of butter and add the rosemary leaves. Arrange the apricots nicely with the back to the cream in rows and rows. Gently sprinkle some poppy seeds and touches of apricot jam Pour some cream with a spoon in a row in the center of the pie. Put in a preheated oven at 180 degrees for 35-40 minutes and take out. Refrigerate and sprinkle powdered sugar along the long side of the pie.",
          image: "apricotPie.jpg",
          cookingTime: "02:00",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeName: "Wool bread",
          description: "Wool bread filled with parmesan and garlic butter",
          instructions:
            "In a mixer bowl with a guitar hook, put flour and butter and mix until you get fine crumbs. Add the almonds and powdered sugar and mix for a few seconds. Add salt, vanilla and eggs and mix just until combined. Roll out the dough between two sheets of baking paper to a thickness of about 3 mm and refrigerate for a few hours. Line two 18-20 cm diameter rings with the cold dough and transfer to the freezer for half an hour. Bake the kelts at 160 degrees without weights for about 10 minutes and cool. Sift the flour into a bowl. Add salt and sugar and mix well for complete assimilation. Add the yeast and mix well again. Connect the kneading hook and slowly add the oil. Add the water, add the last quarter of the cup gradually until the dough absorbs all the liquid. If necessary, add more water, spoon by spoon, to obtain a soft, flexible and pleasant dough. Put at medium speed for 10-15 minutes until the dough becomes flexible and very pleasant. Transfer to a clean lightly oiled bowl, roll the dough in the bowl so that it is well oiled. Cover and let it rise until it doubles in volume (one and a half to two hours). Mix very soft butter with the chopped garlic and basil into a uniform and very soft mixture that is easy to spread. Grease a 20 cm diameter baking dish well. Divide the dough into equal balls (120-150 grams). Roll each part into an oval. Cut the lower half into thin strips using parchment paper or a pizza wheel. Spread the desired filling on the top (for sweet filling - Nutella and chocolate spread, for salty filling - soft butter and grated cheese). Close different secondary and roll from the closed part down into a cylinder shape. Place the rolls on the side of the mold to form a ring shape. Cover and let rise until doubled in volume (about an hour). Heat the oven to 175 degrees. Brush gently with the beaten egg. Bake for 25-30 minutes until the pastry is golden and very puffy. Remove from the oven, brush the salty map again with garlic butter. Cool slightly and serve.",
          image: "woolBread.jpg",
          cookingTime: "02:30",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeName: "Strawbery jam filled cookies",
          description: "Strawbery jam filled cookies",
          instructions: "Mix all the ingredients together",
          image: "strawberyCookies.jpg",
          cookingTime: "01:00",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
