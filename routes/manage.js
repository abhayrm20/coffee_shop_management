exports.list = function(req, res){

  req.getConnection(function(err,connection){   
      var query = connection.query('select o.order_id, c.name, o.tot_amount, o.datetime, o.table_no, o.status from orders o, customer c where o.cust_id = c.phone order by o.status desc',function(err,rows){
        if(err)
          console.log("Error Selecting : %s ",err );

        res.render('manage',{page_title:"Test Table",data:rows});
      });
  });
};
