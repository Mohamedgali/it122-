 const movies = [
   { title : 'Black Panther', year : 2018, actors : 'Chadwick Boseman', profit: 1000 },
   { title : 'Mystic River', year : 2003, actors : 'Sean Penn', profit: 2000 },
   { title : 'Spider-Man', year : 2004, actors : 'Tobey Maguire', profit: 3000 },
   { title : 'Get Out ', year : 2017, actors : 'Daniel Kaluuya', profit: 4000 },
   { title : 'There Will Be Blood', year : 2007, actors : 'Daniel Day-Lewis', profit: 5000 },
   ];


   exports.getAll = function getAll(){
      return movies;
   }

   