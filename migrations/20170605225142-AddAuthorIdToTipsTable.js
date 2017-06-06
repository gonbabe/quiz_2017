'use strict';
//Defina una relación 1-a-N entre Usuarios y Pistas similar a la existente entre Usuarios y Quizzes. 
//Cree una migración para añadir el campo AuthorId a la tabla Tips.
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Tips',
            'AuthorId',
            {type: Sequelize.INTEGER}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Tips', 'AuthorId');
    }
};
