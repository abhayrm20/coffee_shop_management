var imp = require('../app1'); 
exports.list = function(req, res){
	  req.getConnection(function(err,connection){   
		  var sqlquery = 'select b.order_id, m.item_name,  m.price, b.quantity, (m.price * b.quantity) as total from menu m, bill b where b.item_id=m.item_id and order_id = ' + imp.orderid;
		  var query = connection.query(sqlquery, function(err,rows){
			if(err)
			  console.log("Error Selecting : %s ",err );
			  console.log(imp.orderid);
			console.log(rows);
			res.render('order',{page_title:"Test Table",data:rows});
		  });
	  });
	};
