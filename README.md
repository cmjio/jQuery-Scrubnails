jQuery-Scrubnails
=================

jQuery Plugin to generate iPhoto like thumbnails for a given JSON array.  Moving your mouse over the thumbnail container will scrub through the images in that set.
  
	  var json = [
	  		{
				"images":['wentworth.jpeg','rcd.jpeg']
			},
			{
				"images":['photo2.png','photo3.png','photo4.png','photo3.png','photo1.png']
			},
			{
				"images":['photo3.png','photo4.png','photo1.png','photo2.png','photo4.png','photo1.png','photo2.png','photo3.png','photo4.png','photo5.png']
			},
			{
				"images":['photo4.png','photo1.png','photo2.png','photo1.png','photo2.png','photo1.png','photo2.png','photo3.png','photo4.png','photo5.png','photo1.png','photo2.png','photo3.png','photo4.png','photo5.png','photo1.png','photo2.png','photo3.png','photo4.png','photo5.png']
			}
		];
	  
	  $('#thumbnails').Scrubnails({ images: json });