let data = {
  about: {
    store_name: 'ADD',
    store_slogan: "Welcome to ADD, Home of the Attractive Distracted Coder's Store",
    store_address: '123 Main Street, New York, NY',
    store_email: 'add@gmail.com',
    store_phone: '555-555-0000'
  },
  products: {
    shirts: [{name:'T-Shirt1', price:  1.99,  image:'http://cdnstatic.visualizeus.com/thumbs/57/07/html,tshirt-5707db842ac3776c1a220f861ca2cbd7_h.jpg' }, 
              {name:'T-Shirt2', price: 1.99,  image:'https://vangogh.teespring.com/shirt_pic/1315999/758903/2/2397/480x9999/front.png?v=2014-09-13-02-10'}, 
              {name:'T-Shirt3', price: 2.99, image:'https://s-media-cache-ak0.pinimg.com/236x/f9/34/2b/f9342bcd573ebee82eb47700b7017bfb.jpg'},
              {name:'T-Shirt4', price: 3.99, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR0sDNWzUYSFCQ5pFR0pM7ZToTR94HPZsmQMB0gMxlwPEh2az'}],
    babies:  [{name:'Baby-Hat', price: 1.99,  image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQqyElFYq4_xYPdqBtyoVC3C2YxeRLofKnpCmU-TX5IgnQ4kdV'},
              {name:'Baby-Bib', price: 2.99,  image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwopmBDw97d0OyI7NvbYahThn2HryGDYOVzmMVVqtlxIH45pJ2gQ'},
              {name:'Baby-Hat', price: 1.99,  image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQM7qS90RRCHihMFDwqfo8fh3tkY4AZzormGLibEXB0tFe7e4hs'},
              {name:'Baby-Book', price:1.99, image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4UUuoraW4dqXhz_LsuiY5S74CGBHE2NbNAp29DBDM4JX3T-cZ'}],
    cups:    [{name:'Cup-1', price:0.99, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfVDsuEzTtCnKHUHblT72qj9tLEmC5AGUjLbIlCS7RvoMEOpTGA'},
              {name:'Cup-2', price:1.99, image:'https://img1.etsystatic.com/056/0/7339125/il_fullxfull.765931335_mlf1.jpg'},
              {name:'Cup-3', price:1.99, image:'http://rlv.zcache.nl/de_programmeurs_overvallen_basic_witte_mok-rf9b42c794ff24bf0bf22224bf038418b_x7jsg_8byvr_324.jpg'},
              {name:'Cup-4', price:1.99, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZJXuZ4m58Pt149MQhB7F5MasJK3vzUWxme-Wo75rHE5ZMqRZ1Q'}]
    
 }
};

data.getProduct = function() {
  return this.products;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

export default data;

  





