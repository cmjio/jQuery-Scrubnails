$(function() {
	// Stuff to do as soon as the DOM is ready;

	var data = [
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

	$('#thumbnails').Scrubnails({ images:data });


});