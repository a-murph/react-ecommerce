const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/ecommerce"
);

const productSeed = [
	{
		name: "Capcom Monster Hunter: Paolumu Soft Springy Plush",
		brand: "Capcom",
		price: 37.99,
		image: "img/lumu-plush.jpg",
		category: "Toys",
		description: "Hunt your favorite monsters in real life in plushie form! Although Paolumu from Monster Hunter: World is of the less scary variety, making it even fluffier and shrinking it to a hand-friendly size of 7.9” still helps in making it more approachable!",
		rating: 5,
		reviews : [
		],
		createdAt: new Date(Date.now())
	},
	{
		name: "Moisturel Theraputic Lotion - 14oz",
		brand: "Moisturel",
		price: 15.97,
		image: "img/lotion.jpg",
		category: "Personal Care",
		description: "Quick absorbing, long lasting moisturel lotion leaves skin feeling smooth and soft. Clinically proven, this skin protectant relieves dry skin and is designed not to clog pores. Free of lanolins and parabens that can irritate sensitive skin.",
		rating: 5,
		reviews : [
			{
				user: "Etta M. Campbell",
				rating: 5,
				text: "It is the only lotion that does not break my face out. Not greasy. For me, it's better than Keri lotion.",
				date: new Date().toLocaleDateString()
			},
			{
				user: "W Langston",
				rating: 5,
				text: "Moisturel has been a part of my moisturizing routine EVERY DAY for 30 years. I love the product and use it as my daily facial moisturizer. It is very lightweight, yet not heavy and smothering. My face stays hydrated and full covered/hydrated. If you balk at the price, know that a 14 oz bottle will last me four months or so. Moisturel goes on my face, neck and shoulders every day.",
				date: new Date().toLocaleDateString()
			},
			{
				user: "Patrick Lombardo",
				rating: 5,
				text: "I've been using this product for a few years now. Best moisturizer out there. It soaks into your skin quickly and is effective. It doesn't leave your skin oily and gross like most other moisturizers plus it is best for those with skin blemishes and acne. WELL worth the money.",
				date: new Date().toLocaleDateString()
			},
		],
		createdAt: new Date(Date.now())
	},
	{
		name: "Rain-X RX30226 Weatherbeater Wiper Blade, 26\"",
		brand: "Rain-X",
		price: 13.00,
		image: "img/wiper.jpg",
		category: "Auto Parts",
		description: "In 2001 Rain-X introduced the Weatherbeater wiper blade, continuing its tradition of designing products that help you see more clearly and outsmart the elements, for a better driving experience. The Rain-X Weatherbeater wiper blade continues to be a favorite wiper blade of drivers looking for wipe quality, durability and a great value.",
		rating: 3,
		reviews : [
			{
				user: "Stephanie Sullivan",
				rating: 5,
				text: "I got the Rain-X Weatherbeater 26in Blade for the driver side on my 2007 Prius. The Prius uses 2 different size blades. The old blade was worn out and streaking badly. I have long liked Rain-X products and particularly their washer fluid which I get for a great price locally. Based on good experiences with that I decided to give their wiper blades a try and I've been very happy so far.\nReplacement of the driver side wiper on my Prius was very simple. It's the common hook and latch system and the old blade came off easily and quickly by hand. The Rain-X wiper clicked right into place easily and with perfect fit. It took about 2 minutes as I had changed wipers before and knew how. Easy Peasy!\nThe blade lays perfectly against my Prius windshield with full contact. It wipes without streaking so far with quiet operation. As mentioned above, I'm very happy with this driver's side wiper blade. It fits perfectly and is operating streak-free so far. I'm giving this blade a solid 5 stars.\nHope this helps someone!",
				date: new Date().toLocaleDateString()
			},
			{
				user: "Alley B",
				rating: 2,
				text: "After installing, the wiper blade doesn't meet with the windshield at the end so it doesn't wipe away the water. Very disappointed. I'm shipping it back and requesting a replacement hoping that this one was just defective.",
				date: new Date().toLocaleDateString()
			},
			{
				user: "Andrew",
				rating: 2,
				text: "i have used rain-x on my windshields for over 20 years and love the results, so i tried their wipers when it was time to replace the originals on my suv. i replaced the rear and both fronts at the same time and will probably replace them again before they wear out because of the noise. the rear wiper is not loud but it does not wipe clean at all, and the fronts wipe clean but are extremely noisy. the noise i am referring to is the rubber wiping across the glass, it is not any kind of wiper motor noise i am getting it confused with, and also it only occurred after installing these. i always bought the cheapest blades at the local parts store for all the cars i ever owned and never had any this loud. all 3 blades i ordered are a different size so i cant say i got a bad batch, rain x windshield treatment products are great, their wipers, at least for me sucked",
				date: new Date().toLocaleDateString()
			},
		],
		createdAt: new Date(Date.now())
	},
	{
		name: "Toshiba Canvio Basics 1TB Portable Hard Drive - Black (HDTB310XK3AA)",
		brand: "Toshiba",
		price: 54.99,
		image: "img/hdd.jpg",
		category: "Electronics",
		description: "500GB Canvio Basic USB 3.0 BLK",
		rating: 4.4,
		reviews : [
			{
				user: "Customer",
				rating: 5,
				text: "I just bought 2 of these right here on Amazon. They are the 3TB for $91.99 each this Dec. 2016.\nSo far I am very pleased. Let's get to some stuff other reviews have not covered yet.\nBoot consumption: 0.50A @ 5.08v\nIdle consumption: 0.22A @ 5.06v\nSleep consumption: 0.03A @ 5.06v (a sweet feature to save the life of the drive, no noticeable wake-up for my backup use)\nWrite consumption: 0.48A @ 5.01v Windows10 says 38 MB/s average. (USB3.0)\nRead consumption: 0.22A @ 5.06v Windows10 says 1.61GB/s average. (USB3.0)\nIf you like the extra effort on this review, let me know. Thanks.",
				date: new Date().toLocaleDateString()
			},
			{
				user: "Cedar Grove Ranch",
				rating: 5,
				text: "PERFECT!\nI was looking for a MAC time machine backup drive and noticed the external drives labeled as MAC were $10 - $15 more. I then read the Q&A on this drive and someone gave the most perfect instructions:\n\"right out of the box it's not Mac ready, but the solution is real easy. You go to Utilities and open up Disk Utility. With the drive plugged in, select it and go to the Erase tab and there should be a drop down menu with Format. Select Mac OS and click erase and after that's done, the drive should be formatted for Mac and you can save to your heart's content.\"\nI might only add where to find Disk Utility in case you didn't know ... in finder go to the applications folder and in that folder is utilities and in that folder is disk utility.\nI did just as the person in Q&A said and the second it was done reformatting a box came up asking if I wanted to use this drive as a time machine backup drive. I said yes, and within 107 seconds I was done. Color me impressed!\nWe got the 1tb drive because we have a 1tb 21.5\" iMac from Nov 2013.\nI hope this helps someone. I will update this review later as to longevity of the drive.",
				date: new Date().toLocaleDateString()
			},
			{
				user: "K. Stevens",
				rating: 5,
				text: "I bought this drive because it had such high ratings, even though it’s formatted for PC and I needed it for a MacBook Pro - and all of the external drives that are already formatted for Macs are more expensive. As soon as I connected it to my MacBook, Time Machine automatically launched and asked if I wanted to use the Canvio for backups and I said yes. It erased and reformatted the drive and then started the backup. Couldn’t be any easier! This drive works beautifully and is small and lightweight. I was so impressed with it that I bought another one - for my iMac. If you need a good external drive for your Mac, you can’t go wrong with this one!",
				date: new Date().toLocaleDateString()
			},
		],
		createdAt: new Date(Date.now())
	},
];

db.Product
	.remove({})
	.then(() => db.Product.collection.insertMany(productSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});