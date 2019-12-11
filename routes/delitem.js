exports.list = function(req, res){

  req.getConnection(function(err,connection){   
      var query = connection.query('SELECT * FROM menu',function(err,rows){
        if(err)
          console.log("Error Selecting : %s ",err );

        res.render('delitem',{page_title:"Test Table",data:rows});
      });
  });
};
