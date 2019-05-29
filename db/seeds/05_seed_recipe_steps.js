
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipe_steps').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipe_steps').insert([
          {id: 1, recipe_id: 1, step: 1, image: "/image/recipe_steps/recipe1/step1.png", title: 'Cook the bulgur', description: 'Mince the garlic. In a medium pot, combine the bulgur, 1 cup of water (double for 4 portions) and a big pinch of salt; bring to a boil.'},
          {id: 2, recipe_id: 1, step: 2, image: "/image/recipe_steps/recipe1/step2.png", title: 'Mise en place', description: 'Halve the zucchini lengthwise; thinly slice into half-moons on an angle. Peel, halve and thinly slice the shallot. Thinly slice the chives.'},
          {id: 3, recipe_id: 1, step: 3, image: "/image/recipe_steps/recipe1/step3.png", title: 'Cook the zucchini', description: 'In a large pan, heat a drizzle of oil on medium high. Add ½ the shallots and cook, stirring frequently, 30 seconds to 1 minute, until fragrant.'},
          {id: 4, recipe_id: 1, step: 4, image: "/image/recipe_steps/recipe1/step4.png", title: 'Cook the pork', description: 'In the same pan, heat a drizzle of oil on medium-high. Pat the pork chops dry with paper towel; season with the remaining spice blend and S&P.'},
          {id: 5, recipe_id: 1, step: 5, image: "/image/recipe_steps/recipe1/step5.png", title: 'Make the pan sauce', description: 'In the pan of fond, heat a drizzle of oil on medium-high. Add the remaining shallots and garlic. Cook, stirring frequently, 30 seconds to 1 minute, until fragrant.'},
          {id: 6, recipe_id: 1, step: 6, image: "/image/recipe_steps/recipe1/step6.png", title: 'Finish & serve', description: 'Top with the finished zucchini and pork. Spoon the tomato pan sauceover the pork. Garnish with the remaining chives. Bon appétit!'},
          {id: 7, recipe_id: 10, step: 1, image: "/image/recipe_steps/recipe10/step1.png", title: 'Cook the farro', description: 'Bring a large pot of salted water to a boil. Once boiling, add the farro. Cook, 28 to 32 minutes or until tender.'},
          {id: 8, recipe_id: 10, step: 2, image: "/image/recipe_steps/recipe10/step2.png", title: 'Cook the sausages', description: 'While the farro cooks, in a large pan, heat a drizzle of oil on medium-high. Add the sausages* and cook, partially covered, 3 to 5 minutes per side, until browned and cooked through.'},
          {id: 9, recipe_id: 10, step: 3, image: "/image/recipe_steps/recipe10/step3.png", title: 'Mise en place', description: 'While the sausages cook, remove the stem ends of the broccolini. In a bowl, toss the broccolini with a drizzle of olive oil and season with S&P.'},
          {id: 10, recipe_id: 10, step: 4, image: "/image/recipe_steps/recipe10/step4.png", title: 'Cook the vegetables', description: 'In the reserved pan of fond, heat a drizzle of oil on medium-high. Add the shallots and cook, stirring frequently, 1 to 2 minutes, until fragrant.'},
          {id: 11, recipe_id: 10, step: 5, image: "/image/recipe_steps/recipe10/step5.png", title: 'Finish & serve', description: 'Divide the finished farro between your plates and top with the cooked sausages and vegetables. Garnish with the parsley and as much of the vinaigrette as you’d like. Bon appétit!'}
        ]);
      });
  };
  