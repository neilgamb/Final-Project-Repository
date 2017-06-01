module.exports = {
    name: 'MealService',
    func: function ($http) {

        const availableMeals = [];

        return {

            postMeal(meal) {

                for(let i = 0; i < meal.servings; i++){

                    availableMeals.push(meal);
                }

                console.log(availableMeals);
            }
        }
    }
}